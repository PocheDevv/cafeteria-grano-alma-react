export default function Historia() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15,10,5,0.72), rgba(15,10,5,0.72)), url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1800&q=90)',
          height: '500px'
        }}>
        <div className="text-center text-stone-100 px-8 max-w-2xl mx-auto">
          <p className="text-coffee-300 tracking-[0.5em] text-xs uppercase font-semibold" style={{ marginBottom: '20px' }}>Quiénes somos</p>
          <h1 className="text-6xl font-bold" style={{ marginBottom: '20px' }}>Nuestra Historia</h1>
          <p className="text-stone-300 text-lg leading-relaxed font-light">
            Una cafetería nacida de la pasión por el café peruano y el deseo genuino de compartirlo con el mundo.
          </p>
        </div>
      </section>

      {/* ── ORIGEN ── */}
      <section style={{ padding: '120px 0' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '80px', alignItems: 'center' }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '420px' }}>
              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&q=80" alt="Interior de Grano & Alma" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '20px' }}>El comienzo</p>
              <h2 className="text-4xl font-bold text-stone-800 leading-tight" style={{ marginBottom: '32px' }}>Nacimos de una pasión<br />por el café peruano</h2>
              <div className="text-stone-600 text-base text-justify" style={{ lineHeight: '2', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>Grano & Alma nació en 2018 cuando Lucía Vargas, tras años trabajando en el sector agrícola del sur peruano, decidió abrir un espacio donde los mejores granos del país pudieran ser degustados sin intermediarios, con transparencia y respeto por quienes los cultivan.</p>
                <p>Lo que comenzó como un pequeño local en el Mercado de Surquillo pronto se convirtió en un punto de encuentro para aficionados al café, artistas, emprendedores y viajeros que buscaban más que una bebida: buscaban una experiencia genuina.</p>
                <p>Hoy, desde nuestra sede en Miraflores, seguimos fieles a ese espíritu: cada taza cuenta la historia de una finca, de un agricultor y de un proceso cuidado con amor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{
        padding: '120px 0',
        backgroundImage: 'linear-gradient(rgba(15,10,5,0.82), rgba(15,10,5,0.82)), url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1800&q=90)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="max-w-4xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <p className="text-coffee-300 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Nuestro camino</p>
            <h2 className="text-4xl font-bold text-stone-100" style={{ marginBottom: '20px' }}>Hitos que nos marcaron</h2>
            <div style={{ width: '56px', height: '2px', backgroundColor: '#be9d74', margin: '0 auto' }}></div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '1px', backgroundColor: '#624027' }}></div>
            {[
              { year: '2018', title: 'El primer local', desc: 'Abrimos en el Mercado de Surquillo con 6 mesas y una máquina espresso. La fila llegaba hasta la calle desde el primer día.' },
              { year: '2019', title: 'Nuestro tostador propio', desc: 'Adquirimos el primer tostador y comenzamos a tostar en casa. Marco Quispe se unió al equipo como maestro tostador.' },
              { year: '2021', title: 'Reconocimiento nacional', desc: 'Fuimos elegidos entre los 10 mejores cafés de Lima por la revista Sabores del Perú.' },
              { year: '2022', title: 'Mudanza a Miraflores', desc: 'Abrimos nuestra sede definitiva en Av. La Mar con un espacio pensado para la comunidad.' },
              { year: '2023', title: 'Programa de origen', desc: 'Lanzamos nuestro programa de visitas a fincas. Clientes y baristas viajan juntos a conocer el café desde la raíz.' },
              { year: '2025', title: 'World Barista Championship', desc: 'Andrea Salcedo representó al Perú en el campeonato mundial. Un orgullo para todo el equipo.' },
            ].map((h, i) => (
              <div key={h.year} style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '48px', marginBottom: '64px', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                <div style={{ width: '45%', textAlign: i % 2 === 0 ? 'right' : 'left', paddingRight: i % 2 === 0 ? '16px' : '0', paddingLeft: i % 2 === 0 ? '0' : '16px' }}>
                  <span className="font-bold text-coffee-400" style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>{h.year}</span>
                  <h3 className="font-bold text-stone-100 text-lg" style={{ marginBottom: '12px' }}>{h.title}</h3>
                  <p className="text-stone-400 text-sm" style={{ lineHeight: '1.8' }}>{h.desc}</p>
                </div>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', backgroundColor: '#be9d74', borderRadius: '50%', border: '4px solid #29190f', top: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }}></div>
                <div style={{ width: '45%' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section style={{ padding: '120px 0' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Lo que nos mueve</p>
            <h2 className="text-4xl font-bold text-stone-800" style={{ marginBottom: '20px' }}>Nuestros valores</h2>
            <div style={{ width: '56px', height: '2px', backgroundColor: '#93683f', margin: '0 auto' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '40px' }}>
            {[
              { titulo: 'Origen trazable', texto: 'Conocemos el nombre del agricultor detrás de cada saco de café que compramos. La transparencia no es opcional.', icon: '🌱' },
              { titulo: 'Calidad sin atajos', texto: 'Del grano verde a la taza en menos de 72 horas. Tostamos en lotes pequeños para garantizar frescura real.', icon: '⚗️' },
              { titulo: 'Comunidad', texto: 'El 5% de nuestras ganancias va a proyectos de educación para hijos de agricultores cafetaleros de Junín y Cusco.', icon: '🤝' },
            ].map((v) => (
              <div key={v.titulo} className="bg-white rounded-2xl text-center border border-coffee-100 hover:shadow-xl transition-all duration-300" style={{ padding: '48px' }}>
                <div style={{ fontSize: '48px', marginBottom: '28px' }}>{v.icon}</div>
                <h3 className="text-xl font-bold text-stone-800" style={{ marginBottom: '20px' }}>{v.titulo}</h3>
                <p className="text-stone-500 text-sm" style={{ lineHeight: '2' }}>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section className="bg-coffee-950" style={{ padding: '120px 0' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <p className="text-coffee-400 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Las personas detrás</p>
            <h2 className="text-4xl font-bold text-stone-100" style={{ marginBottom: '20px' }}>Nuestro equipo</h2>
            <div style={{ width: '56px', height: '2px', backgroundColor: '#93683f', margin: '0 auto' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '64px' }}>
            {[
              { nombre: 'Lucía Vargas', cargo: 'Fundadora & Directora', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80', bio: 'Agrónoma de profesión, cafetóloga por vocación. Recorrió más de 30 fincas antes de abrir Grano & Alma. Apasionada del origen y el impacto social del café.' },
              { nombre: 'Marco Quispe', cargo: 'Maestro Tostador', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80', bio: '12 años de experiencia en tostado artesanal. Campeón del Peruvian Roaster Challenge 2022. Su objetivo: que cada taza cuente la historia del grano.' },
              { nombre: 'Andrea Salcedo', cargo: 'Head Barista', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80', bio: 'Certificada por el SCA en tres disciplinas. Representó al Perú en la World Barista Championship 2023 y forma a la nueva generación de baristas del país.' },
            ].map((p) => (
              <div key={p.nombre} className="text-center">
                <div className="rounded-full overflow-hidden border-4 border-coffee-700 shadow-xl mx-auto" style={{ width: '160px', height: '160px', marginBottom: '32px' }}>
                  <img src={p.img} alt={p.nombre} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-stone-100 text-xl" style={{ marginBottom: '8px' }}>{p.nombre}</h3>
                <p className="text-coffee-400 text-xs font-semibold tracking-wide uppercase" style={{ marginBottom: '20px' }}>{p.cargo}</p>
                <p className="text-stone-400 text-sm" style={{ lineHeight: '2' }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}