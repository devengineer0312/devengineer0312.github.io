// Converts the raw project images in ../projects into web-ready WebP files.
//   public/img/<projectId>/<n>.webp        full size (max 2000 px)
//   public/img/<projectId>/<n>-thumb.webp  card / thumbnail size (max 900 px)
// and writes src/data/image-meta.json with dimensions for layout.
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { projects } from '../src/data/projects.js'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const srcDir = path.resolve(root, '..', 'projects')
const outDir = path.join(root, 'public', 'img')
const meta = {}

for (const project of projects) {
  const dir = path.join(outDir, project.id)
  await fs.mkdir(dir, { recursive: true })
  meta[project.id] = []

  for (const [i, img] of project.images.entries()) {
    const input = path.join(srcDir, img.file)
    const opts = img.animated ? { animated: true } : {}

    let base = sharp(input, opts).rotate()
    if (img.trim) {
      // Trim uniform black letterbox bars from phone screen captures.
      const buf = await base.trim({ background: '#000000', threshold: 30 }).toBuffer()
      base = sharp(buf)
    }

    const full = path.join(dir, `${i}.webp`)
    const thumb = path.join(dir, `${i}-thumb.webp`)

    const fullInfo = await base
      .clone()
      .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: img.animated ? 70 : 82, effort: 5 })
      .toFile(full)

    await base
      .clone()
      .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 74, effort: 5 })
      .toFile(thumb)

    // For animated output sharp reports total page height; use pageHeight when present.
    const h = fullInfo.pageHeight || fullInfo.height
    meta[project.id].push({ w: fullInfo.width, h })
    console.log(`✓ ${project.id}/${i}  ${fullInfo.width}×${h}  ← ${img.file}`)
  }
}

await fs.writeFile(path.join(root, 'src', 'data', 'image-meta.json'), JSON.stringify(meta, null, 2))
console.log('\nWrote src/data/image-meta.json')
