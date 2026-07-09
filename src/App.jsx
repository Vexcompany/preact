import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import MarqueeBanner from './components/Marquee'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import History from './pages/History'
import Structure from './pages/Structure'
import Achievements from './pages/Achievements'

const SOCIAL = [
  { href: 'https://www.instagram.com/pagaska_/', icon: 'fi-brands-instagram', label: 'Instagram' },
  { href: 'https://www.youtube.com/pagaskasmkn5madiun', icon: 'fi-brands-youtube', label: 'YouTube' },
  { href: 'https://www.tiktok.com/gala.taksaka', icon: 'fi-brands-tik-tok', label: 'TikTok' },
  { href: 'https://www.smkn5madiun.sch.id', icon: 'fi-rs-site-alt', label: 'Website Sekolah' },
]

function Footer() {
  return (
    <footer className="border-t border-parchment/[0.08] mt-10 py-12 px-7">
      <div className="max-w-site mx-auto text-center space-y-6">
        <div className="flex flex-wrap justify-center gap-6">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center gap-2 text-parchment/50 hover:text-parchment text-[0.85rem] transition-colors duration-200"
            >
              <i className={`fi ${s.icon} text-base`} />
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-parchment/25 font-mono text-[0.72rem] tracking-[0.1em]">
          © 2026 PAGASKA — Paskibra Gala Taksaka. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <Navbar />
      <MarqueeBanner />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
