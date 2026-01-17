#!/bin/bash

# Plugin validation script
# Run automatically in pre-commit or manually with .husky/validate-plugin.sh

set -e
shopt -s globstar nullglob 2>/dev/null || true

ERRORS=0
WARNINGS=0

error() {
  echo "❌ ERROR: $1"
  ERRORS=$((ERRORS + 1))
}

warn() {
  echo "⚠️  WARN: $1"
  WARNINGS=$((WARNINGS + 1))
}

ok() {
  echo "✓ $1"
}

echo "🔍 Validating plugin..."
echo ""

# 1. Validate plugin.json is valid JSON
echo "Checking plugin.json..."
if ! jq . .claude-plugin/plugin.json > /dev/null 2>&1; then
  error "plugin.json is not valid JSON"
else
  # Check required fields
  if ! jq -e '.name' .claude-plugin/plugin.json > /dev/null 2>&1; then
    error "plugin.json missing required 'name' field"
  fi
  if ! jq -e '.version' .claude-plugin/plugin.json > /dev/null 2>&1; then
    error "plugin.json missing 'version' field"
  fi
  ok "plugin.json valid"
fi

# 2. Validate marketplace.json if exists
if [ -f .claude-plugin/marketplace.json ]; then
  echo "Checking marketplace.json..."
  if ! jq . .claude-plugin/marketplace.json > /dev/null 2>&1; then
    error "marketplace.json is not valid JSON"
  else
    ok "marketplace.json valid"
  fi
fi

# 3. Check all agent files have proper frontmatter
echo "Checking agent frontmatter..."
agent_count=0
while IFS= read -r -d '' f; do
  agent_count=$((agent_count + 1))

  # Check starts with ---
  if ! head -1 "$f" | grep -q "^---"; then
    error "$f missing YAML frontmatter (must start with ---)"
    continue
  fi

  # Check has closing --- (find second occurrence, check up to 50 lines)
  frontmatter_end=$(head -50 "$f" | grep -n "^---$" | sed -n '2p' | cut -d: -f1)
  if [ -z "$frontmatter_end" ]; then
    error "$f frontmatter not closed (missing second --- within first 50 lines)"
    continue
  fi

  # Check has name field
  if ! head -20 "$f" | grep -q "^name:"; then
    error "$f missing 'name:' in frontmatter"
  fi

  # Check has description field (within frontmatter)
  if ! head -"$frontmatter_end" "$f" | grep -q "^description:"; then
    error "$f missing 'description:' in frontmatter"
  fi
done < <(find agents -name "*.md" -print0 2>/dev/null)
ok "Agents checked ($agent_count files)"

# 4. Check skill SKILL.md files
echo "Checking skill files..."
while IFS= read -r -d '' f; do
  if ! head -1 "$f" | grep -q "^---\|^#"; then
    warn "$f doesn't start with frontmatter or heading"
  fi
done < <(find skills -name "SKILL.md" -print0 2>/dev/null)
ok "Skills checked"

# 5. Check command files have frontmatter
echo "Checking command files..."
if [ -d commands ]; then
  for f in commands/*.md; do
    [ -f "$f" ] || continue
    if ! head -1 "$f" | grep -q "^---"; then
      error "$f missing YAML frontmatter"
    fi
  done
fi
ok "Commands checked"

# 6. Check for hardcoded paths
echo "Checking for hardcoded paths..."
hardcoded=$(grep -r "/Users/\|/home/" skills/ commands/ agents/ .claude-plugin/ 2>/dev/null | grep -v ".git" | head -5 || true)
if [ -n "$hardcoded" ]; then
  echo "$hardcoded"
  error "Found hardcoded paths (use relative paths or \${CLAUDE_PLUGIN_ROOT})"
fi
ok "No hardcoded paths"

# 7. Check for kebab-case naming
echo "Checking naming conventions..."
while IFS= read -r -d '' f; do
  name=$(head -20 "$f" | grep "^name:" | head -1 | sed 's/name: *//')
  if [ -n "$name" ]; then
    # Check kebab-case (lowercase, hyphens, no consecutive hyphens)
    if echo "$name" | grep -q "[A-Z]"; then
      error "$f name '$name' should be lowercase (kebab-case)"
    fi
    if echo "$name" | grep -q "_"; then
      error "$f name '$name' should use hyphens not underscores"
    fi
    if echo "$name" | grep -q -- "--"; then
      error "$f name '$name' has consecutive hyphens"
    fi
  fi
done < <(find agents -name "*.md" -print0 2>/dev/null)
ok "Naming conventions checked"

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -gt 0 ]; then
  echo "❌ Validation failed: $ERRORS error(s), $WARNINGS warning(s)"
  exit 1
elif [ $WARNINGS -gt 0 ]; then
  echo "⚠️  Validation passed with $WARNINGS warning(s)"
  exit 0
else
  echo "✅ Validation passed"
  exit 0
fi
