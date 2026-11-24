import meta from './data/image-meta.json'

// PUBLIC_URL is '' in development and '.' in the build (see "homepage" in package.json)
const base = `${process.env.PUBLIC_URL}/`

export const imgSrc = (projectId, i) => `${base}img/${projectId}/${i}.webp`
export const thumbSrc = (projectId, i) => `${base}img/${projectId}/${i}-thumb.webp`
export const imgSize = (projectId, i) => meta[projectId]?.[i] ?? { w: 4, h: 3 }

export const pad2 = (n) => String(n).padStart(2, '0')
