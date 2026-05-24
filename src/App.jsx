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

          <h1 style={logoText}>
            Nexora
          </h1>

        </div>

        {/* LINKS */}
        <div style={navCenter}>

          <Link to="/" style={navLink}>
            Home
          </Link>

          <Link to="/guides" style={navLink}>
            Guias
          </Link>

          <Link to="/servers" style={navLink}>
            Servidores
          </Link>

          <Link to="/streamers" style={navLink}>
            Streamers
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

  background: "rgba(7,11,20,0.72)",
  backdropFilter: "blur(14px)",

  borderBottom: "1px solid rgba(168,85,247,0.18)",

  boxShadow: "0 0 30px rgba(168,85,247,0.10)"
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
  gap: "18px",

  background: "rgba(17,24,39,0.68)",
  padding: "10px 18px",
  borderRadius: "999px",

  border: "1px solid rgba(168,85,247,0.18)",

  boxShadow: "0 0 20px rgba(168,85,247,0.08)"
}

const navLink = {
  color: "#e5e7eb",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "15px",

  padding: "10px 18px",
  borderRadius: "999px",

  transition: "0.2s"
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