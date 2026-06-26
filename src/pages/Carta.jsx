import CartaItem from '../components/CartaItem'

const bebidas = [
  { nombre: 'Espresso', descripcion: 'Extracción corta e intensa. Café de origen Cusco, tueste medio oscuro. La base de todo.', precio: '8.00', imagen: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80' },
  { nombre: 'Americano', descripcion: 'Espresso con agua caliente. Suave, equilibrado e ideal para empezar el día con calma.', precio: '9.00', imagen: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=600&q=80' },
  { nombre: 'Cappuccino', descripcion: 'Espresso, leche vaporizada y espuma cremosa en partes iguales. Un clásico irresistible.', precio: '12.00', etiqueta: 'Favorito', imagen: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80' },
  { nombre: 'Latte', descripcion: 'Espresso con abundante leche vaporizada y una capa fina de microespuma sedosa.', precio: '13.00', imagen: 'https://images.unsplash.com/photo-1736798940077-63edaa4e713b?q=80&w=987' },
  { nombre: 'Cold Brew', descripcion: '20 horas de extracción en frío con café de Junín. Servido sobre hielo. Sin acidez.', precio: '14.00', etiqueta: 'Especial', imagen: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80' },
  { nombre: 'Cortado', descripcion: 'Espresso doble con un pequeño toque de leche vaporizada. Concentrado y balanceado.', precio: '10.00', imagen: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80' },
  { nombre: 'Matcha Latte', descripcion: 'Té matcha ceremonial de primera calidad con leche de avena vaporizada. Suave y verde.', precio: '14.00', imagen: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071' },
  { nombre: 'Chocolate caliente', descripcion: 'Cacao puro peruano con leche entera. Intenso, cremoso y reconfortante en cada sorbo.', precio: '11.00', imagen: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80' },
]

const comidas = [
  { nombre: 'Tostada de palta', descripcion: 'Pan artesanal de masa madre con palta fresca, semillas de sésamo y limón de Pica.', precio: '16.00', etiqueta: 'Saludable', imagen: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&q=80' },
  { nombre: 'Croissant de mantequilla', descripcion: 'Croissant hojaldrado elaborado cada mañana en nuestro taller. Perfecto con café.', precio: '12.00', imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80' },
  { nombre: 'Bowl de granola', descripcion: 'Granola artesanal tostada, yogur griego, frutas de temporada y miel de abeja.', precio: '18.00', imagen: 'https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=600&q=80' },
  { nombre: 'Sándwich de pollo', descripcion: 'Pan ciabatta, pechuga al romero, lechuga, tomate y mayonesa casera de albahaca.', precio: '22.00', etiqueta: 'Favorito', imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80' },
  { nombre: 'Pizza del día', descripcion: 'Pizza artesanal con masa elaborada en casa y toppings de temporada. Consulta al mozo por la combinación del día.', precio: '19.00', imagen: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80' },
  { nombre: 'Brownie de chocolate', descripcion: 'Brownie húmedo de cacao peruano con nueces enteras. Servido tibio con helado.', precio: '14.00', etiqueta: 'Especial', imagen: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80' },
]

export default function Carta() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15,10,5,0.72), rgba(15,10,5,0.72)), url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=90)',
          height: '500px'
        }}>
        <div className="text-center text-stone-100 px-8 max-w-2xl mx-auto">
          <p className="text-coffee-300 tracking-[0.5em] text-xs uppercase font-semibold" style={{ marginBottom: '20px' }}>Grano & Alma</p>
          <h1 className="text-6xl font-bold" style={{ marginBottom: '20px' }}>Nuestra Carta</h1>
          <p className="text-stone-300 text-lg leading-relaxed font-light">
            Bebidas preparadas con granos de origen único y platos elaborados con ingredientes seleccionados cada mañana.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto" style={{ padding: '100px 48px' }}>

        {/* ── BEBIDAS ── */}
        <section style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', marginBottom: '64px' }}>
            <div>
              <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '8px' }}>Para beber</p>
              <h2 className="text-4xl font-bold text-stone-800">Bebidas</h2>
            </div>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e7dac5', marginBottom: '8px' }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '40px' }}>
            {bebidas.map((item) => (
              <CartaItem key={item.nombre} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} etiqueta={item.etiqueta} imagen={item.imagen} />
            ))}
          </div>
        </section>

        {/* ── COMIDAS ── */}
        <section>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', marginBottom: '64px' }}>
            <div>
              <p className="text-coffee-600 text-xs tracking-widest uppercase font-semibold" style={{ marginBottom: '8px' }}>Para comer</p>
              <h2 className="text-4xl font-bold text-stone-800">Para comer</h2>
            </div>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e7dac5', marginBottom: '8px' }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '40px' }}>
            {comidas.map((item) => (
              <CartaItem key={item.nombre} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} etiqueta={item.etiqueta} imagen={item.imagen} />
            ))}
          </div>
        </section>

        <p className="text-center text-stone-400 text-sm" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #e7dac5' }}>
          Todos los precios en soles peruanos e incluyen IGV · Carta sujeta a cambios según disponibilidad estacional
        </p>
      </div>
    </main>
  )
}