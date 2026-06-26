import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React SPA no recarga la página al navegar, por eso el scroll no sube solo.
// Este componente lo fuerza manualmente en cada cambio de ruta.
export default function ScrollToTop() {
    const { pathname } = useLocation() // Detecta la ruta actual

    useEffect(() => {
        window.scrollTo(0, 0) // Sube al inicio en cada navegación
    }, [pathname]) // Se ejecuta solo cuando cambia la ruta

    return null // No renderiza nada, solo ejecuta el efecto
}