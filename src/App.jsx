import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Servers from './pages/Servers'
import Guides from './pages/Guides'
import OBS from './pages/OBS'
import Tools from './pages/Tools'
import Community from './pages/Community'
import Streamers from './pages/Streamers'

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white"
      }}
    >

      {/* NAVBAR */}
      <nav
        className="glass"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "900",
            background: "linear-gradient(90deg,#a855f7,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Nexora
        </h1>

        <div
          style={{
            display: "flex",
            gap: "30px",
            fontWeight: "bold"
          }}
        >

          <Link to="/">Home</Link>

          <Link to="/servers">Servidores</Link>

          <Link to="/guides">Guias</Link>

          <Link to="/obs">OBS</Link>

          <Link to="/streamers">Streamers</Link>

        </div>

      </nav>

      {/* PAGES */}
      <div style={{ paddingTop: "120px" }}>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/servers" element={<Servers />} />

          <Route path="/guides" element={<Guides />} />

          <Route path="/obs" element={<OBS />} />

          <Route path='/streamers' element={<Streamers />} />
        </Routes>

      </div>

    </div>
  )
}