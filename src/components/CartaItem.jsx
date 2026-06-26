export default function CartaItem({ nombre, descripcion, precio, etiqueta, imagen }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-coffee-100 flex flex-col group hover:shadow-xl transition-all duration-300">
      {imagen && (
        <div style={{ height: '220px', overflow: 'hidden' }}>
          <img
            src={imagen}
            alt={nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <div style={{ padding: '28px 32px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '12px' }}>
          <h3 className="font-bold text-stone-800" style={{ fontSize: '17px', lineHeight: '1.4' }}>{nombre}</h3>
          <span className="text-coffee-700 font-bold" style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>S/ {precio}</span>
        </div>
        {etiqueta && (
          <span className="self-start text-xs bg-coffee-100 text-coffee-700 font-semibold rounded-full" style={{ padding: '4px 14px', marginBottom: '12px' }}>
            {etiqueta}
          </span>
        )}
        <p className="text-stone-500 text-sm" style={{ lineHeight: '1.8', marginTop: 'auto' }}>{descripcion}</p>
      </div>
    </div>
  )
}
