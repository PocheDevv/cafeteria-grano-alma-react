import { useState } from 'react'

const fotos = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Latte art en taza de cerámica', categoria: 'Bebidas', desc: 'Cada latte es una pequeña obra de arte. El arte latte es parte de nuestra identidad.' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80', alt: 'Barista preparando espresso', categoria: 'Proceso', desc: 'Marco en su elemento, controlando cada gramo y segundo de extracción.' },
  { src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80', alt: 'Interior del café por la mañana', categoria: 'Ambiente', desc: 'Las mañanas en Grano & Alma tienen luz propia. Ven y siente la diferencia.' },
  { src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80', alt: 'Granos en proceso de tostado', categoria: 'Proceso', desc: 'El tostado en lotes pequeños garantiza que cada grano llegue fresco a tu taza.' },
  { src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80', alt: 'Cortado recién servido', categoria: 'Bebidas', desc: 'El cortado: espresso doble, un toque de leche. Simple, perfecto, nuestro clásico.' },
  { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80', alt: 'Cold brew sobre hielo', categoria: 'Bebidas', desc: '20 horas de espera para 5 minutos de placer. El cold brew es paciencia líquida.' },
  { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80', alt: 'Terraza del café en tarde soleada', categoria: 'Ambiente', desc: 'Nuestra terraza es el rincón favorito de quienes trabajan con buena vibra.' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80', alt: 'Latte art de corazón', categoria: 'Bebidas', desc: 'Un corazón en cada taza. Andrea lo lleva en la sangre.' },
  { src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80', alt: 'Granos de café arábica de Cusco', categoria: 'Origen', desc: 'Granos arábica del Valle de La Convención, Cusco. Recolectados a más de 1800 msnm.' },
  { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80', alt: 'Clientes en el café', categoria: 'Clientes', desc: 'Lara y Mateo, clientes de la primera hora. Cada martes, mismo rincón, mismo latte.' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80', alt: 'Ambiente de trabajo en el café', categoria: 'Clientes', desc: 'Nuestro espacio es refugio de creativos, freelancers y soñadores con laptop.' },
  { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80', alt: 'Croissants recién horneados', categoria: 'Comida', desc: 'Los croissants salen del horno a las 7am. Llega temprano o te quedas sin.' },
  { src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80', alt: 'Cappuccino con espuma perfecta', categoria: 'Bebidas', desc: 'La espuma del cappuccino: suave, densa, perfecta. Resultado de mucha práctica.' },
  { src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80', alt: 'Brownie de cacao peruano', categoria: 'Comida', desc: 'Brownie de cacao de Piura. Húmedo, intenso, con nueces enteras. Irresistible.' },
  { src: 'https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=800&q=80', alt: 'Bowl de granola artesanal', categoria: 'Comida', desc: 'El desayuno ideal. Granola tostada, yogur griego y frutas frescas del día.' },
  { src: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&q=80', alt: 'Tostada de palta', categoria: 'Comida', desc: 'Masa madre con palta fresca y semillas. Desayuno o brunch, siempre funciona.' },
  { src: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071', alt: 'Matcha latte verde', categoria: 'Bebidas', desc: 'Matcha ceremonial con leche de avena. Una opción para quienes buscan algo distinto.' },
  { src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80', alt: 'Sándwich de pollo artesanal', categoria: 'Comida', desc: 'Ciabatta, pollo al romero y mayonesa de albahaca. El almuerzo perfecto.' },
]

const categorias = ['Todas', 'Bebidas', 'Comida', 'Proceso', 'Ambiente', 'Clientes', 'Origen']

export default function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')

  const fotosFiltradas = categoriaActiva === 'Todas'
    ? fotos
    : fotos.filter((f) => f.categoria === categoriaActiva)

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15,10,5,0.72), rgba(15,10,5,0.72)), url(https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1800&q=90)',
          height: '500px'
        }}>
        <div className="text-center text-stone-100 px-8 max-w-2xl mx-auto">
          <p className="text-coffee-300 tracking-[0.5em] text-xs uppercase font-semibold" style={{ marginBottom: '20px' }}>Momentos en imágenes</p>
          <h1 className="text-6xl font-bold" style={{ marginBottom: '20px' }}>Galería</h1>
          <p className="text-stone-300 text-lg leading-relaxed font-light">
            Cada imagen captura algo de lo que vivimos a diario: el aroma, la precisión, el ambiente y las personas que hacen de Grano & Alma un lugar especial.
          </p>
        </div>
      </section>

      {/* ── CATEGORÍAS ── */}
      <section style={{ padding: '64px 0 32px 0' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className="font-semibold text-sm rounded-full transition-all duration-200"
                style={{
                  padding: '10px 28px',
                  cursor: 'pointer',
                  border: '1px solid',
                  backgroundColor: categoriaActiva === cat ? '#7b5231' : 'white',
                  color: categoriaActiva === cat ? 'white' : '#57534e',
                  borderColor: categoriaActiva === cat ? '#7b5231' : '#e7dac5',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-center text-stone-400 text-sm" style={{ marginTop: '20px' }}>
            {fotosFiltradas.length} {fotosFiltradas.length === 1 ? 'foto' : 'fotos'}
            {categoriaActiva !== 'Todas' ? ` en ${categoriaActiva}` : ' en total'}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: '32px 0 80px 0' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="columns-1 sm:columns-2 lg:columns-3" style={{ gap: '24px' }}>
            {fotosFiltradas.map((foto, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group relative bg-stone-900 cursor-pointer"
                style={{ marginBottom: '24px', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <img src={foto.src} alt={foto.alt} className="w-full object-cover group-hover:scale-105 group-hover:opacity-75 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(41,25,15,0.95), rgba(41,25,15,0.1), transparent)', padding: '24px' }}>
                  <span className="text-coffee-300 font-bold" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>{foto.categoria}</span>
                  <p className="text-stone-100 font-bold text-sm" style={{ marginBottom: '4px' }}>{foto.alt}</p>
                  <p className="text-stone-400" style={{ fontSize: '12px', lineHeight: '1.6' }}>{foto.desc}</p>
                </div>
                <div className="absolute group-hover:opacity-0 transition-opacity duration-300" style={{ top: '16px', left: '16px' }}>
                  <span className="text-coffee-300 font-semibold rounded-full"
                    style={{ fontSize: '10px', backgroundColor: 'rgba(41,25,15,0.6)', padding: '4px 12px', letterSpacing: '2px', textTransform: 'uppercase', backdropFilter: 'blur(4px)' }}>
                    {foto.categoria}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center" style={{
        padding: '120px 0 160px 0',
        backgroundImage: 'linear-gradient(rgba(15,10,5,0.75), rgba(15,10,5,0.75)), url(https://images.unsplash.com/photo-1672305330907-8092be9161ea?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '80px'
      }}>
        <div className="max-w-2xl mx-auto" style={{ padding: '0 48px' }}>
          <p className="text-coffee-300 tracking-widest text-xs uppercase font-semibold" style={{ marginBottom: '24px' }}>Únete a la comunidad</p>
          <h2 className="font-bold text-stone-100" style={{ fontSize: '40px', marginBottom: '24px', lineHeight: '1.3' }}>
            ¿Quieres ser parte de<br />nuestra galería?
          </h2>
          <p className="text-stone-300 text-lg" style={{ lineHeight: '1.8', marginBottom: '48px' }}>
            Etiquétanos en tus fotos con <span className="font-bold text-coffee-400">@granoyalma</span> y comparte tu experiencia. Las mejores fotos llegan a nuestra pared del local.
          </p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-primary">
            Síguenos en Instagram
          </a>
        </div>
      </section>
    </main>
  )
}