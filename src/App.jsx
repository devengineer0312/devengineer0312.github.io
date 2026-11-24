import { useCallback, useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Tools from './components/Tools.jsx'
import Process from './components/Process.jsx'
import Projects from './components/Projects.jsx'
import GitHub from './components/GitHub.jsx'
import AlbumViewer from './components/AlbumViewer.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import { projects } from './data/projects.js'

// Albums are deep-linkable: #project/<id>/<imageIndex>
function readHash() {
  const m = window.location.hash.match(/^#project\/([\w-]+)(?:\/(\d+))?/)
  if (!m) return null
  const project = projects.find((p) => p.id === m[1])
  if (!project) return null
  const index = Math.min(Number(m[2] ?? 0), project.images.length - 1)
  return { project, index }
}

export default function App() {
  const [open, setOpen] = useState(readHash)

  useEffect(() => {
    const onHash = () => setOpen(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const openAlbum = useCallback((project, index = 0) => {
    window.history.replaceState(null, '', `#project/${project.id}/${index}`)
    setOpen({ project, index })
  }, [])

  const setIndex = useCallback((index) => {
    setOpen((cur) => {
      if (!cur) return cur
      window.history.replaceState(null, '', `#project/${cur.project.id}/${index}`)
      return { ...cur, index }
    })
  }, [])

  const close = useCallback(() => {
    window.history.replaceState(null, '', '#projects')
    setOpen(null)
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects onOpen={openAlbum} />
        <GitHub />
        <Experience />
        <Tools />
        <Process />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span className="mono">© {new Date().getFullYear()} Markese Sweet · Senior Hardware Engineer</span>
          <span className="mono muted">Designed in React · images from real project files</span>
        </div>
      </footer>
      {open && (
        <AlbumViewer project={open.project} index={open.index} onIndex={setIndex} onClose={close} />
      )}
    </>
  )
}
