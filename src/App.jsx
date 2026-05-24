import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Guides from "./pages/Guides"
import Servers from "./pages/Servers"
import Streamers from "./pages/Streamers"

export default function App() {
  return (
    <BrowserRouter>

      {/* BACKGROUND */}
      <div style={bg}></div>

      {/* NAVBAR */}
      <nav style={navbar}>

        {/* LOGO */}
        <div style={logoBox}>
          <div style={logoGlow}></div>

          <h1 style={logo}>
            Nexora
          </h1>
        </div>

        {/* LINKS */}
        <div style={navCenter}>

          <Link to="/" style={link}>
            Home
          </Link>

          <Link to="/guides" style={link}>
            Guias
          </Link>

          <Link to="/servers" style={link}>
            Servidores
          </Link>

          <Link to="/streamers" style={link}>
            Streamers
          </Link>

        </div>

        {/* BOTAO */}
        <a
          href="https://www.twitch.tv/correiamb"
          target="_blank"
          style={button}
        >
          Twitch
        </a>

      </nav>

      {/* PAGINAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/streamers" element={<Streamers />} />
      </Routes>

    </BrowserRouter>
  )
}

/* =========================
   STYLES
========================= */

const bg = {
  position: "fixed",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(168,85,247,0.15), transparent 40%), #070b14",
  zIndex: -1
}

const navbar = {
  position: "sticky",
  top: 0,
  zIndex: 999,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "18px 40px",

  background: "rgba(10,15,25,0.75)",
  backdropFilter: "blur(12px)",

  borderBottom: "1px solid rgba(168,85,247,0.18)",

  boxShadow: "0 0 30px rgba(168,85,247,0.08)"
}

const logoBox = {
  position: "relative",
  display: "flex",
  alignItems: "center"
}

const logoGlow = {
  position: "absolute",
  width: "100px",
  height: "100px",
  background: "rgba(168,85,247,0.20)",
  filter: "blur(45px)",
  borderRadius: "999px"
}

const logo = {
  position: "relative",
  fontSize: "34px",
  fontWeight: "900",
  margin: 0,

  background: "linear-gradient(90deg,#c084fc,#9333ea)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const navCenter = {
  display: "flex",
  alignItems: "center",
  gap: "18px",

  background: "rgba(17,24,39,0.65)",
  padding: "10px 18px",
  borderRadius: "999px",

  border: "1px solid rgba(168,85,247,0.18)"
}

const link = {
  color: "#e5e7eb",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "15px",

  padding: "10px 16px",
  borderRadius: "999px",

  transition: "0.2s"
}

const button = {
  background: "linear-gradient(90deg,#9333ea,#7e22ce)",
  color: "white",

  padding: "12px 20px",
  borderRadius: "14px",

  textDecoration: "none",
  fontWeight: "800",

  boxShadow: "0 0 20px rgba(168,85,247,0.25)"
}