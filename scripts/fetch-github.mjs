// Fetches language breakdowns + last-update dates for the repos in src/data/github.js
// and writes src/data/github-languages.json. Uses the public GitHub API (no token needed).
// Run: npm run github
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { repos, githubUser, languageColors } from '../src/data/github.js'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const headers = { 'User-Agent': 'portfolio-build', Accept: 'application/vnd.github+json' }
const known = new Set(Object.keys(languageColors)) // drop build noise (Makefile, linker scripts, …)

const out = {}
for (const r of repos) {
  const base = `https://api.github.com/repos/${githubUser}/${r.name}`
  const [info, langs] = await Promise.all([
    fetch(base, { headers }).then((x) => x.json()),
    fetch(`${base}/languages`, { headers }).then((x) => x.json()),
  ])
  if (info.message) throw new Error(`${r.name}: ${info.message}`)
  const entries = Object.entries(langs).filter(([k]) => known.has(k))
  const total = entries.reduce((n, [, v]) => n + v, 0) || 1
  out[r.name] = {
    updated: info.pushed_at,
    stars: info.stargazers_count,
    languages: entries
      .map(([name, bytes]) => ({ name, pct: Math.round((bytes / total) * 1000) / 10 }))
      .filter((l) => l.pct >= 1)
      .sort((a, b) => b.pct - a.pct),
  }
  console.log(`✓ ${r.name}: ${out[r.name].languages.map((l) => `${l.name} ${l.pct}%`).join(', ')}`)
}

await fs.writeFile(path.join(root, 'src', 'data', 'github-languages.json'), JSON.stringify(out, null, 2))
console.log('\nWrote src/data/github-languages.json')
