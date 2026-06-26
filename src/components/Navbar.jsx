import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-coffee-600 font-semibold relative py-1.5 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-coffee-600 after:rounded-full after:scale-x-100'
      : 'text-stone-600 hover:text-coffee-600 relative py-1.5 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-coffee-600 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300'

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? 'text-coffee-600 font-bold text-lg bg-coffee-50/80 px-4 py-3 rounded-xl flex items-center gap-3 border-l-4 border-coffee-600'
      : 'text-stone-600 hover:text-coffee-600 hover:bg-stone-50/50 px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-200'

  const menuItems = [
    { to: '/', label: 'Inicio' },
    { to: '/carta', label: 'Carta' },
    { to: '/historia', label: 'Nuestra Historia' },
    { to: '/galeria', label: 'Galería' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div>
            <span className="text-xl font-bold text-stone-800 tracking-tight leading-none block group-hover:text-coffee-700 transition-colors">
              Grano <span className="text-coffee-600 font-light">&</span> Alma
            </span>
            <span className="text-[10px] text-coffee-600 font-medium tracking-widest uppercase mt-0.5 block">
              Café de especialidad
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-stone-600 hover:text-coffee-700 focus:outline-none transition-colors" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-45 flex">
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs" onClick={() => setIsOpen(false)} />
          <div className="relative flex flex-col w-4/5 max-w-sm bg-white h-screen p-6 shadow-2xl z-50">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
              <span className="font-bold text-stone-800 text-lg">Grano & Alma</span>
              <button onClick={() => setIsOpen(false)} className="p-1.5 text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={mobileLinkClass} onClick={() => setIsOpen(false)} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-stone-100 text-center">
              <p className="text-xs text-stone-400 font-medium">Av. La Mar 342, Miraflores</p>
              <p className="text-xs text-coffee-600 font-bold mt-1">+51 987 654 321</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}