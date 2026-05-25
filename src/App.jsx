import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Guides from "./pages/Guides"
import Servers from "./pages/Servers"
import Streamers from "./pages/Streamers"

export default function App() {
  return (
    <BrowserRouter>

      {/* BACKGROUND */}
      <div style={background}></div>

      {/* NAVBAR */}
      <nav style={navbar}>

        {/* LOGO */}
        <div style={logoContainer}>

          <img
            src="/nexora2.png"
            alt="Nexora"
            style={logoImage}
          />

        </div>

 {/* LINKS */}
<div style={navCenter}>

  <Link to="/" style={navLink}>
    🏠 Inicio
  </Link>

  <Link to="/guides" style={navLink}>
    📘 Guias
  </Link>

  <Link to="/servers" style={navLink}>
    🌐 Servidores
  </Link>

  <Link to="/streamers" style={navLink}>
    🔴 Streamers
  </Link>

</div>
        {/* BUTTON */}
        <a
          href="https://www.twitch.tv/correiamb"
          target="_blank"
          style={twitchBtn}
        >
          Twitch
        </a>

      </nav>

      {/* PAGES */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/guides" element={<Guides />} />

        <Route path="/servers" element={<Servers />} />

        <Route path="/streamers" element={<Streamers />} />

      </Routes>

    </BrowserRouter>
  )
}

/* STYLES */

const background = {
  position: "fixed",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(168,85,247,0.15), transparent 35%), #070b14",
  zIndex: -1
}

const navbar = {
  position: "sticky",
  top: 0,
  zIndex: 999,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "18px 50px",

  background: "rgba(7,11,20,0.6)",
  backdropFilter: "blur(12px)",

  border: "none",
  boxShadow: "none",
  outline: "none"
}

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "14px"
}

const logoImage = {
  width: "52px",
  height: "52px",
  objectFit: "contain",
  filter:
    "drop-shadow(0 0 18px rgba(168,85,247,0.45))"
}

const logoText = {
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
  gap: "26px",
}

const navLink = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "16px",
  opacity: 0.85,
  transition: "0.2s",
  position: "relative",
}

const twitchBtn = {
  background: "linear-gradient(90deg,#9333ea,#7e22ce)",
  color: "white",

  padding: "13px 24px",
  borderRadius: "16px",

  textDecoration: "none",
  fontWeight: "800",

  boxShadow: "0 0 25px rgba(168,85,247,0.28)"
}

