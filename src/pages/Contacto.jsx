import { useState } from 'react'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [ocultando, setOcultando] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Obtiene los valores del formulario
    const nombre = e.target.nombre.value.trim()
    const email = e.target.email.value.trim()
    const mensaje = e.target.mensaje.value.trim()

    // Valida que los campos requeridos estén llenos
    if (!nombre || !email || !mensaje) {
      setError(true)
      setTimeout(() => setError(false), 3000)
      return
    }

    setError(false)
    setEnviado(true)
    setOcultando(false)
    setTimeout(() => setOcultando(true), 3000)
    setTimeout(() => setEnviado(false), 3800)
  }

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15,10,5,0.72), rgba(15,10,5,0.72)), url(https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1800&q=90)',
          height: '500px'
        }}>
        <div className="text-center text-stone-100 px-8 max-w-2xl mx-auto">
          <p className="text-coffee-300 tracking-[0.5em] text-xs uppercase font-semibold" style={{ marginBottom: '20px' }}>Estamos aquí para ti</p>
          <h1 className="text-6xl font-bold" style={{ marginBottom: '20px' }}>Contacto</h1>
          <p className="text-stone-300 text-lg leading-relaxed font-light">
            ¿Tienes alguna pregunta, propuesta o simplemente quieres saludarnos? Con gusto te respondemos.
          </p>
        </div>
      </section>

      {/* ── INFO RÁPIDA ── */}
      <section className="bg-white" style={{ padding: '80px 0', borderBottom: '1px solid #e7dac5' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '48px', textAlign: 'center' }}>
            {[
              { icon: '🕐', titulo: 'Horarios de atención', lineas: ['Lun – Vie: 7:00 am – 8:00 pm', 'Sáb: 8:00 am – 9:00 pm', 'Dom: 9:00 am – 6:00 pm'] },
              { icon: '📞', titulo: 'Llámanos o escríbenos', lineas: ['+51 987 654 321', 'contacto@granoyalma.pe'] },
              { icon: '📍', titulo: 'Visítanos', lineas: ['Av. La Mar 342, Miraflores', 'Lima 15074, Perú'] },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
                <h4 className="font-bold text-stone-800" style={{ marginBottom: '16px', fontSize: '16px' }}>{item.titulo}</h4>
                {item.lineas.map((l, j) => (
                  <p key={j} className="text-stone-500 text-sm" style={{ lineHeight: '1.8' }}>{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULARIO + SERVICIOS ── */}
      <section style={{ padding: '120px 0' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '96px' }}>

            {/* Formulario */}
            <div>
              <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Cuéntanos</p>
              <h2 className="text-4xl font-bold text-stone-800" style={{ marginBottom: '48px' }}>Escríbenos</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '24px' }}>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700" style={{ marginBottom: '8px' }}>Nombre</label>
                    <input type="text" name="nombre" placeholder="Tu nombre"
                      className="w-full text-sm text-stone-800 bg-white"
                      style={{ border: '1px solid #e7dac5', borderRadius: '12px', padding: '16px 20px', outline: 'none' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700" style={{ marginBottom: '8px' }}>Apellido</label>
                    <input type="text" placeholder="Tu apellido"
                      className="w-full text-sm text-stone-800 bg-white"
                      style={{ border: '1px solid #e7dac5', borderRadius: '12px', padding: '16px 20px', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700" style={{ marginBottom: '8px' }}>Correo electrónico</label>
                  <input type="email" name="email" placeholder="correo@ejemplo.com"
                    className="w-full text-sm text-stone-800 bg-white"
                    style={{ border: '1px solid #e7dac5', borderRadius: '12px', padding: '16px 20px', outline: 'none' }} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700" style={{ marginBottom: '8px' }}>Asunto</label>
                  <select className="w-full text-sm text-stone-700 bg-white"
                    style={{ border: '1px solid #e7dac5', borderRadius: '12px', padding: '16px 20px', outline: 'none' }}>
                    <option value="">Selecciona un asunto</option>
                    <option value="reserva">Reserva de mesa</option>
                    <option value="evento">Evento privado</option>
                    <option value="prensa">Prensa y medios</option>
                    <option value="pedido">Pedido de café en grano</option>
                    <option value="trabajo">Trabaja con nosotros</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700" style={{ marginBottom: '8px' }}>Mensaje</label>
                  <textarea name="mensaje" rows={5} placeholder="¿En qué podemos ayudarte? Cuéntanos con detalle..."
                    className="w-full text-sm text-stone-800 bg-white"
                    style={{ border: '1px solid #e7dac5', borderRadius: '12px', padding: '16px 20px', outline: 'none', resize: 'none' }} />
                </div>
                {error && (
                  <div className="mensaje-error">
                    ⚠️ Por favor completa tu nombre, correo y mensaje antes de enviar.
                  </div>
                )}
                {enviado && (
                  <div className={`mensaje-exito ${ocultando ? 'oculto' : ''}`}>
                    ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
                  </div>
                )}
                <button type="submit" className="btn-primary w-full">
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Servicios */}
            <div>
              <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>También ofrecemos</p>
              <h2 className="text-4xl font-bold text-stone-800" style={{ marginBottom: '48px' }}>Servicios especiales</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { titulo: 'Eventos privados', desc: 'Reserva el espacio completo para celebraciones, reuniones corporativas o catas de café. Capacidad para 40 personas. Contáctanos con 5 días de anticipación.', icon: '🎉' },
                  { titulo: 'Café en grano para llevar', desc: 'Vendemos nuestros granos tostados en bolsas de 250g y 500g. Disponibles en tienda y con despacho a domicilio en Lima Metropolitana.', icon: '☕' },
                  { titulo: 'Talleres de barismo', desc: 'Cada primer sábado del mes ofrecemos talleres de 3 horas donde aprenderás a preparar espresso, leche vaporizada y latte art desde cero.', icon: '🎓' },
                  { titulo: 'Trabaja con nosotros', desc: 'Siempre buscamos personas apasionadas por el café. Escríbenos con tu CV y cuéntanos por qué te gustaría unirte.', icon: '🤝' },
                ].map((s) => (
                  <div key={s.titulo} className="bg-white hover:shadow-md transition-all duration-200"
                    style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', borderRadius: '16px', border: '1px solid #e7dac5' }}>
                    <span style={{ fontSize: '28px', marginTop: '2px' }}>{s.icon}</span>
                    <div>
                      <h4 className="font-bold text-stone-800" style={{ marginBottom: '8px' }}>{s.titulo}</h4>
                      <p className="text-stone-500 text-sm" style={{ lineHeight: '1.8' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAPA ── */}
      <section className="bg-coffee-950" style={{ padding: '120px 0' }}>
        <div className="max-w-6xl mx-auto" style={{ padding: '0 48px' }}>
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <p className="text-coffee-400 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '16px' }}>Ubícanos</p>
            <h2 className="text-4xl font-bold text-stone-100" style={{ marginBottom: '20px' }}>Cómo llegar</h2>
            <div style={{ width: '56px', height: '2px', backgroundColor: '#93683f', margin: '0 auto 24px auto' }}></div>
            <p className="text-stone-400 mx-auto" style={{ maxWidth: '560px', lineHeight: '1.8' }}>
              Estamos en el corazón de Miraflores, a dos cuadras del Parque Kennedy. Acceso fácil en metro (estación Ricardo Palma) y zona con estacionamiento.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '400px' }}>
            <iframe title="Ubicación Grano & Alma"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0!2d-77.0282!3d-12.1211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662bf%3A0x63287d9f36b4ca01!2sAv.%20La%20Mar%2C%20Miraflores%2015074!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              className="w-full h-full border-0" allowFullScreen="" loading="lazy" />
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <a href="https://maps.google.com/..." target="_blank" rel="noreferrer" className="btn-outline">
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}