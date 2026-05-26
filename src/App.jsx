import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Guides from "./pages/Guides"
import Servers from "./pages/Servers"
import Streamers from "./pages/Streamers"

import casaIcon from "./assets/casa.png"
import livroIcon from "./assets/livro.png"
import servidoresIcon from "./assets/servidores.png"
import cameraIcon from "./assets/camera.png"

export default function App() {
  return (
    <BrowserRouter>

      {/* BACKGROUND */}
      <div style={background}></div>

      {/* NAVBAR */}
      <nav style={navbar}>

        {/* CENTER */}
        <div style={navCenter}>

          <Link to="/" style={navLink}>

            <img
              src={casaIcon}
              alt=""
              style={navIcon}
            />

            Início

          </Link>

          <Link to="/guides" style={navLink}>

            <img
              src={livroIcon}
              alt=""
              style={navIcon}
            />

            Guias

          </Link>

          <Link to="/servers" style={navLink}>

            <img
              src={servidoresIcon}
              alt=""
              style={navIcon}
            />

            Servidores

          </Link>

          <Link to="/streamers" style={navLink}>

            <img
              src={cameraIcon}
              alt=""
              style={navIcon}
            />

            Streamers

          </Link>

        </div>

        {/* RIGHT */}
        <div style={navRight}>

          <a
            href="https://discord.gg/kdJdYqeA"
            target="_blank"
            rel="noreferrer"
            style={iconBtn}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg"
              alt=""
              style={iconImage}
            />
          </a>

          <a
            href="https://twitch.tv/correiamb"
            target="_blank"
            rel="noreferrer"
            style={iconBtn}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg"
              alt=""
              style={iconImage}
            />
          </a>

          <img
            src="/nexora2.png"
            alt=""
            style={profile}
          />

        </div>

      </nav>

      {/* PAGES */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/guides"
          element={<Guides />}
        />

        <Route
          path="/servers"
          element={<Servers />}
        />

        <Route
          path="/streamers"
          element={<Streamers />}
        />

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
  justifyContent: "center",
  alignItems: "center",

  padding: "18px 45px",

  background: "rgba(7,11,20,0.72)",
  backdropFilter: "blur(12px)",

  borderBottom: "1px solid rgba(255,255,255,0.05)"
}

const navCenter = {
  display: "flex",
  alignItems: "center",
  gap: "30px"
}

const navRight = {
  position: "absolute",
  right: "45px",

  display: "flex",
  alignItems: "center",
  gap: "15px"
}

const navLink = {
  color: "white",
  textDecoration: "none",

  fontWeight: "700",
  fontSize: "15px",

  display: "flex",
  alignItems: "center",
  gap: "10px",

  transition: "0.2s",
  opacity: 0.9
}

const navIcon = {
  width: "18px",
  height: "18px",
  objectFit: "contain"
}

const iconBtn = {
  width: "42px",
  height: "42px",

  borderRadius: "14px",

  background: "rgba(17,24,39,.8)",

  border: "1px solid rgba(255,255,255,.07)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textDecoration: "none"
}

const iconImage = {
  width: "20px",
  height: "20px",
  filter: "brightness(0) invert(1)"
}

const profile = {
  width: "44px",
  height: "44px",

  borderRadius: "14px",

  objectFit: "cover",

  border: "2px solid rgba(168,85,247,.35)",

  boxShadow: "0 0 18px rgba(168,85,247,.22)"
}