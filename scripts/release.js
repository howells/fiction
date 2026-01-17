#!/usr/bin/env node

/**
 * Automated release script
 *
 * Usage:
 *   node scripts/release.js           # Auto-detect bump from commits
 *   node scripts/release.js patch     # Force patch bump
 *   node scripts/release.js minor     # Force minor bump
 *   node scripts/release.js major     # Force major bump
 *
 * This script will:
 * 1. Analyze commits since last tag
 * 2. Determine version bump type (or use provided type)
 * 3. Update plugin.json version
 * 4. Generate/update CHANGELOG.md
 * 5. Stage and commit the changes
 * 6. Create a git tag
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const PLUGIN_PATH = path.join(ROOT, '.claude-plugin', 'plugin.json');
const CHANGELOG_PATH = path.join(ROOT, 'CHANGELOG.md');

function exec(cmd, options = {}) {
  return execSync(cmd, { encoding: 'utf8', cwd: ROOT, ...options }).trim();
}

function readPlugin() {
  return JSON.parse(fs.readFileSync(PLUGIN_PATH, 'utf8'));
}

function writePlugin(data) {
  fs.writeFileSync(PLUGIN_PATH, JSON.stringify(data, null, 2) + '\n');
}

function parseVersion(version) {
  const [major, minor, patch] = version.split('.').map(Number);
  return { major, minor, patch };
}

function formatVersion({ major, minor, patch }) {
  return `${major}.${minor}.${patch}`;
}

function bumpVersion(current, type) {
  const v = parseVersion(current);
  switch (type) {
    case 'major':
      return formatVersion({ major: v.major + 1, minor: 0, patch: 0 });
    case 'minor':
      return formatVersion({ major: v.major, minor: v.minor + 1, patch: 0 });
    case 'patch':
    default:
      return formatVersion({ major: v.major, minor: v.minor, patch: v.patch + 1 });
  }
}

function getLastTag() {
  try {
    return exec('git describe --tags --abbrev=0 2>/dev/null');
  } catch {
    return null;
  }
}

function getCommitsSince(tag) {
  try {
    const cmd = tag
      ? `git log ${tag}..HEAD --pretty=format:"%s"`
      : `git log --pretty=format:"%s"`;
    return exec(cmd).split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

function detectBumpType(commits) {
  let type = 'patch';

  for (const msg of commits) {
    if (msg.includes('BREAKING CHANGE') || /^[a-z]+!:/.test(msg)) {
      return 'major';
    }
    if (/^feat(\(.+\))?:/.test(msg)) {
      type = 'minor';
    }
  }

  return type;
}

function categorizeCommit(message) {
  if (/BREAKING CHANGE/.test(message) || /^[a-z]+!:/.test(message)) return 'Breaking';
  if (/^feat(\(.+\))?:/.test(message)) return 'Added';
  if (/^fix(\(.+\))?:/.test(message)) return 'Fixed';
  if (/^refactor(\(.+\))?:/.test(message)) return 'Changed';
  if (/^perf(\(.+\))?:/.test(message)) return 'Performance';
  if (/^docs(\(.+\))?:/.test(message)) return null;
  if (/^test(\(.+\))?:/.test(message)) return null;
  if (/^chore(\(.+\))?:/.test(message)) return null;
  if (/^ci(\(.+\))?:/.test(message)) return null;
  if (/^build(\(.+\))?:/.test(message)) return null;
  if (/^style(\(.+\))?:/.test(message)) return null;
  return null;
}

function formatCommit(message) {
  return message
    .replace(/^[a-z]+(\(.+\))?!?:\s*/i, '')
    .replace(/^./, c => c.toUpperCase());
}

function generateChangelog(newVersion, commits) {
  const date = new Date().toISOString().split('T')[0];

  const grouped = {};
  for (const commit of commits) {
    const category = categorizeCommit(commit);
    if (!category) continue;
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(formatCommit(commit));
  }

  if (Object.keys(grouped).length === 0) {
    console.log('ℹ️  No user-facing changes to document');
    return;
  }

  let entry = `## [${newVersion}] - ${date}\n\n`;

  const order = ['Breaking', 'Added', 'Changed', 'Fixed', 'Performance'];

  for (const category of order) {
    if (grouped[category]?.length) {
      entry += `### ${category}\n\n`;
      for (const item of grouped[category]) {
        entry += `- ${item}\n`;
      }
      entry += '\n';
    }
  }

  let changelog = '';
  if (fs.existsSync(CHANGELOG_PATH)) {
    changelog = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  }

  if (!changelog.includes('# Changelog')) {
    changelog = `# Changelog\n\nAll notable changes to the Fiction plugin will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),\nand this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\n`;
  }

  const headerEnd = changelog.indexOf('\n## ');
  if (headerEnd !== -1) {
    changelog = changelog.slice(0, headerEnd) + '\n' + entry + changelog.slice(headerEnd + 1);
  } else {
    changelog += entry;
  }

  fs.writeFileSync(CHANGELOG_PATH, changelog);
}

function hasUncommittedChanges() {
  try {
    exec('git diff-index --quiet HEAD --');
    return false;
  } catch {
    return true;
  }
}

function getChangelogSection(version) {
  if (!fs.existsSync(CHANGELOG_PATH)) return null;
  const changelog = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  const regex = new RegExp(`## \\[${version}\\][^\\n]*\\n([\\s\\S]*?)(?=\\n## \\[|$)`);
  const match = changelog.match(regex);
  return match ? match[1].trim() : null;
}

// Main
console.log('🚀 Fiction Plugin Release\n');

if (hasUncommittedChanges()) {
  console.error('❌ You have uncommitted changes. Please commit or stash them first.');
  process.exit(1);
}

const [,, forcedType] = process.argv;
const lastTag = getLastTag();
const commits = getCommitsSince(lastTag);

if (commits.length === 0) {
  console.log('ℹ️  No commits since last tag. Nothing to release.');
  process.exit(0);
}

console.log(`📋 Found ${commits.length} commit(s) since ${lastTag || 'beginning'}:\n`);
commits.slice(0, 10).forEach(c => console.log(`   • ${c}`));
if (commits.length > 10) console.log(`   ... and ${commits.length - 10} more\n`);

const bumpType = forcedType || detectBumpType(commits);
const plugin = readPlugin();
const currentVersion = plugin.version;
const newVersion = bumpVersion(currentVersion, bumpType);

console.log(`\n📦 Version bump: ${currentVersion} → ${newVersion} (${bumpType})\n`);

// Update plugin.json
plugin.version = newVersion;
writePlugin(plugin);
console.log('✓ Updated .claude-plugin/plugin.json');

// Update changelog
generateChangelog(newVersion, commits);
console.log('✓ Updated CHANGELOG.md');

// Git operations
exec('git add .claude-plugin/plugin.json CHANGELOG.md');
exec(`git commit -m "chore(release): v${newVersion}"`);
console.log('✓ Committed changes');

exec(`git tag -a v${newVersion} -m "Release v${newVersion}"`);
console.log(`✓ Created tag v${newVersion}`);

// Push and create release
console.log('\n🚀 Pushing to origin...');
exec('git push origin main --tags');
console.log('✓ Pushed to origin');

// Create GitHub release
console.log('\n📦 Creating GitHub release...');
try {
  const releaseNotes = getChangelogSection(newVersion);
  const notesArg = releaseNotes ? `--notes "${releaseNotes.replace(/"/g, '\\"')}"` : '--generate-notes';
  exec(`gh release create v${newVersion} --title "v${newVersion}" ${notesArg}`);
  console.log(`✓ Created GitHub release v${newVersion}`);
} catch (err) {
  console.log('⚠️  Could not create GitHub release (gh CLI may not be configured)');
}

console.log(`\n✨ Release v${newVersion} complete!`);
