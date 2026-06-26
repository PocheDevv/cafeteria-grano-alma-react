import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#29190f', color: '#d6d3d1' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '96px 48px 64px 48px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '64px' }}>

          {/* Brand */}
          <div className="md:col-span-1">
            <div style={{ marginBottom: '24px' }}>
              <span className="font-bold text-stone-100 block" style={{ fontSize: '20px', lineHeight: '1', marginBottom: '6px' }}>
                Grano & Alma
              </span>
              <span className="text-coffee-400 font-medium" style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                Café de especialidad
              </span>
            </div>
            <p className="text-stone-400 text-sm" style={{ lineHeight: '1.9' }}>
              Cafetería artesanal en Miraflores. Cada taza cuenta la historia de un grano y las manos que lo cuidaron.
            </p>
          </div>

          {/* Páginas */}
          <div>
            <h4 className="text-stone-100 font-bold" style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '28px' }}>Páginas</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[['/', 'Inicio'], ['/carta', 'Carta'], ['/historia', 'Nuestra Historia'], ['/galeria', 'Galería'], ['/contacto', 'Contacto']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-stone-400 hover:text-coffee-400 transition-colors duration-200 text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-stone-100 font-bold" style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '28px' }}>Horarios</h4>
            <ul className="text-stone-400 text-sm" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li className="text-stone-200 font-semibold">Lunes – Viernes</li>
              <li>7:00 am – 8:00 pm</li>
              <li className="text-stone-200 font-semibold" style={{ marginTop: '12px' }}>Sábado</li>
              <li>8:00 am – 9:00 pm</li>
              <li className="text-stone-200 font-semibold" style={{ marginTop: '12px' }}>Domingo</li>
              <li>9:00 am – 6:00 pm</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-stone-100 font-bold" style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '28px' }}>Contacto</h4>
            <ul className="text-stone-400 text-sm" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Av. La Mar 342</li>
              <li>Miraflores, Lima, Perú</li>
              <li className="text-stone-200" style={{ marginTop: '12px' }}>+51 987 654 321</li>
              <li>contacto@granoyalma.pe</li>
            </ul>
          </div>

        </div>
      </div>

      <div style={{ borderTop: '1px solid #3d2010', padding: '28px 48px' }}>
        <p className="text-stone-500 text-xs text-center">
          © 2026 Grano & Alma. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}