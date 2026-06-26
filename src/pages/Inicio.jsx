import { Link } from 'react-router-dom'

const btnPrimary = "btn-primary"
const btnOutline = "btn-outline"

export default function Inicio() {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'linear-gradient(rgba(15,10,5,0.60), rgba(15,10,5,0.60)), url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=90)' }}
      >
        <div className="text-center text-stone-100 px-6 max-w-3xl mx-auto">
          <p className="text-coffee-300 tracking-[0.5em] text-xs uppercase mb-8 font-medium">
            Café de especialidad · Miraflores, Lima
          </p>
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Grano <span className="text-coffee-400">&</span> Alma
          </h1>
          <p className="text-xl text-stone-300 max-w-xl mx-auto mb-16 leading-relaxed font-light">
            Cada taza es el resultado de un proceso cuidadoso, desde el origen del grano hasta tus manos.
          </p>
          <br />
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link to="/carta" className={btnPrimary}>Explorar la Carta</Link>
            <Link to="/historia" className={btnOutline}>Nuestra Historia</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── LO QUE NOS DEFINE ── */}
      <section style={{ padding: '120px 0' }}>
        <div className="max-w-5xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Por qué elegirnos</p>
            <h2 className="text-4xl font-bold text-stone-800" style={{ marginBottom: '20px' }}>Lo que nos define</h2>
            <div style={{ width: '56px', height: '2px', backgroundColor: '#93683f', margin: '0 auto' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '40px' }}>
            {[
              {
                icon: (<svg className="w-7 h-7 text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>),
                title: 'Granos de origen único',
                desc: 'Trabajamos directamente con agricultores de Cusco, Junín y Cajamarca para traerte los mejores granos del Perú sin intermediarios.',
              },
              {
                icon: (<svg className="w-7 h-7 text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>),
                title: 'Tostado artesanal',
                desc: 'Nuestro maestro tostador lleva más de 12 años perfeccionando el perfil de tueste ideal para cada variedad y origen.',
              },
              {
                icon: (<svg className="w-7 h-7 text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>),
                title: 'Sostenibilidad real',
                desc: 'Comercio justo, empaques biodegradables y apoyo directo a las comunidades cafetaleras. El 5% de nuestras ganancias regresa al campo.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-coffee-100" style={{ padding: '48px' }}>
                <div className="bg-coffee-50 rounded-2xl flex items-center justify-center mx-auto" style={{ width: '64px', height: '64px', marginBottom: '28px' }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-stone-800" style={{ fontSize: '18px', marginBottom: '16px' }}>{item.title}</h3>
                <p className="text-stone-500 text-sm" style={{ lineHeight: '2' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA ── */}
      <section
        className="bg-cover bg-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,6,2,0.78), rgba(10,6,2,0.78)), url(https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1800&q=90)',
          padding: '180px 0'
        }}
      >
        <div className="max-w-3xl mx-auto" style={{ padding: '0 24px' }}>
          <p className="text-coffee-400 tracking-widest text-xs uppercase font-semibold" style={{ marginBottom: '32px' }}>Nuestra filosofía</p>
          <h2 className="font-bold text-stone-100 leading-tight" style={{ fontSize: '56px', marginBottom: '40px' }}>
            "No vendemos café.<br />Compartimos una pasión."
          </h2>
          <p className="text-stone-300 text-lg leading-loose mx-auto" style={{ maxWidth: '680px', marginBottom: '24px' }}>
            En Grano & Alma creemos que una buena taza de café puede cambiar el tono de tu día. Por eso cuidamos cada etapa del proceso con dedicación y honestidad.
          </p>
          <p className="text-stone-400 text-base leading-loose mx-auto" style={{ maxWidth: '680px', marginBottom: '56px' }}>
            Desde el primer sorbo sabrás que estás bebiendo algo diferente: un café con nombre, con origen y con la historia de las personas que lo cultivaron con sus manos.
          </p>
          <Link to="/historia" className={btnPrimary}>Conoce nuestra historia</Link>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section style={{ padding: '120px 0' }}>
        <div className="max-w-5xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Nuestras estrellas</p>
            <h2 className="text-4xl font-bold text-stone-800" style={{ marginBottom: '20px' }}>Especialidades de la casa</h2>
            <div style={{ width: '56px', height: '2px', backgroundColor: '#93683f', margin: '0 auto' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '32px' }}>
            {[
              { name: 'Cortado de origen', desc: 'Espresso doble con un toque de leche vaporizada. Nuestro clásico perfecto.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80' },
              { name: 'Cold Brew Peruano', desc: '20 horas de extracción en frío con café de Junín. Suave, oscuro y sin acidez.', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=80' },
              { name: 'Cappuccino artesanal', desc: 'Espresso, leche vaporizada y espuma cremosa. Elaborado con precisión barista.', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&q=80' },
              { name: 'Tostada de palta', desc: 'Pan de masa madre con palta, semillas de sésamo y limón de Pica.', img: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=900&q=80' },
            ].map((item) => (
              <div key={item.name} className="relative rounded-2xl overflow-hidden group shadow-md" style={{ height: '320px' }}>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.9), rgba(28,25,23,0.1), transparent)', padding: '32px' }}>
                  <h3 className="font-bold text-white" style={{ fontSize: '22px', marginBottom: '8px' }}>{item.name}</h3>
                  <p className="text-stone-300 text-sm" style={{ lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '80px' }}>
            <Link to="/carta" className={btnPrimary}>Ver carta completa</Link>
          </div>
        </div>
      </section>

      {/* ── DÓNDE ENCONTRARNOS ── */}
      <section className="bg-white border-t border-coffee-100" style={{ padding: '120px 0' }}>
        <div className="max-w-5xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Visítanos</p>
            <h2 className="text-4xl font-bold text-stone-800" style={{ marginBottom: '20px' }}>Dónde encontrarnos</h2>
            <div style={{ width: '56px', height: '2px', backgroundColor: '#93683f', margin: '0 auto' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center" style={{ gap: '40px', marginBottom: '80px' }}>
            {[
              { icon: (<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), label: 'Dirección', lines: ['Av. La Mar 342, Miraflores', 'Lima 15074, Perú'] },
              { icon: (<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), label: 'Horarios', lines: ['Lun – Vie: 7:00 am – 8:00 pm', 'Sáb: 8:00 am – 9:00 pm', 'Dom: 9:00 am – 6:00 pm'] },
              { icon: (<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>), label: 'Contacto', lines: ['+51 987 654 321', 'contacto@granoyalma.pe'] },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="bg-coffee-700 rounded-2xl flex items-center justify-center shadow-md" style={{ width: '56px', height: '56px', marginBottom: '20px' }}>{item.icon}</div>
                <h4 className="font-bold text-stone-800" style={{ marginBottom: '12px' }}>{item.label}</h4>
                {item.lines.map((l, j) => <p key={j} className="text-stone-500 text-sm" style={{ lineHeight: '1.8' }}>{l}</p>)}
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '384px', marginBottom: '64px' }}>
            <iframe title="Ubicación" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0!2d-77.0282!3d-12.1211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662bf%3A0x63287d9f36b4ca01!2sAv.%20La%20Mar%2C%20Miraflores%2015074!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe" className="w-full h-full border-0" allowFullScreen="" loading="lazy" />
          </div>
          <div className="text-center">
            <Link to="/contacto" className={btnPrimary}>Escríbenos</Link>
          </div>
        </div>
      </section>
    </main>
  )
}