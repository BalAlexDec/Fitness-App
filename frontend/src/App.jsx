import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import Settings from './pages/Settings.jsx'
import Login from './pages/Login.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row min-h-screen md:pl-48 pb-16 md:pb-0">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
