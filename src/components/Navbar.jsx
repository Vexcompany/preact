import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/home', label: 'Beranda' },
  { to: '/project', label: 'Project' },
  { to: '/about', label: 'Tentang' },
  { to: '/history', label: 'Sejarah' },
  { to: '/structure', label: 'Struktur' },
  { to: '/achievements', label: 'Prestasi' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false)
    document.body.classList.remove('menu-open')
  }, [location])

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev
      document.body.classList.toggle('menu-open', next)
      return next
    })
  }

  const linkClass = ({ isActive }) =>
    [
      'text-[0.83rem] font-medium tracking-[0.04em] uppercase relative py-1.5 transition-colors duration-[250ms]',
      'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-[width] after:duration-[250ms]',
      isActive
        ? 'text-parchment after:w-full'
        : 'text-parchment/70 after:w-0 hover:text-parchment hover:after:w-full',
    ].join(' ')

  return (
    <>
      <nav className="sticky top-0 z-[500] bg-ink border-b border-gold/[0.18]">
        <div className="max-w-site mx-auto px-7 h-[68px] flex items-center justify-between gap-4">
          {/* Logo */}
          <NavLink
            to="/home"
            className="font-display text-[1.2rem] font-semibold text-parchment tracking-[0.02em] flex items-center gap-2 shrink-0"
          >
            PAGASKA
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden lg:flex gap-[2.1rem] items-center list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer z-[700] w-6 shrink-0 bg-transparent border-0 p-0"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            <span
              className={`w-6 h-[2px] bg-parchment transition-transform duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-parchment transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-parchment transition-transform duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-ink/55 z-[600] transition-[opacity,visibility] duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile drawer */}
      <ul
        className={`fixed top-0 right-0 bottom-0 w-[min(78%,320px)] bg-ink flex flex-col justify-center gap-[1.9rem] px-10 py-10 border-l border-gold/[0.18] shadow-[-20px_0_40px_rgba(11,18,32,0.3)] z-[650] list-none m-0 transition-transform duration-[350ms] lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={linkClass} style={{ fontSize: '0.95rem' }}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}
