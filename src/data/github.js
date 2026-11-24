// GitHub profile + language colours. Repositories are listed as projects in
// src/data/projects.js (entries with a `repo` field). Language breakdowns live in
// src/data/github-languages.json; refresh with `npm run github`.

export const githubUser = 'devengineer0312'
export const githubProfile = `https://github.com/${githubUser}`
export const repoUrl = (name) => `${githubProfile}/${name}`

// GitHub linguist colours for the language bar.
export const languageColors = {
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  VHDL: '#adb2cb',
  Verilog: '#b2b7f8',
  Assembly: '#6E4C13',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  SCSS: '#c6538c',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Java: '#b07219',
  Python: '#3572A5',
  Shell: '#89e051',
}
