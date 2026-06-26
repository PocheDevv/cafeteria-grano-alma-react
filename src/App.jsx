import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './pages/Inicio'
import Carta from './pages/Carta'
import Historia from './pages/Historia'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'

function App() {
  return (
    // BrowserRouter habilita el sistema de rutas en toda la app
    <BrowserRouter>
      {/* Debe ir dentro de BrowserRouter pero fuera de Routes */}
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full">
        {/* Navbar y Footer persisten en todas las páginas */}
        <Navbar />
        <div className="flex-1">
          <Routes>
            {/* Cada Route mapea una URL a su componente de página */}
            <Route path="/" element={<Inicio />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App