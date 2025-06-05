import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const linkClass = (path) =>
    `p-4 hover:bg-gray-700 ${location.pathname === path ? 'bg-gray-700' : ''}`

  return (
    <nav className="bg-gray-800 text-white md:w-48 md:min-h-screen flex md:flex-col fixed bottom-0 w-full justify-around md:static">
      <Link to="/" className={linkClass('/')}>Dashboard</Link>
      <Link to="/settings" className={linkClass('/settings')}>Configuración</Link>
      <Link to="/login" className={linkClass('/login')}>Login</Link>
    </nav>
  )
}
