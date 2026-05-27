import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div style={page}>

      {/* BACKGROUND */}
      <div style={background}></div>
      <div style={overlay}></div>

      {/* NAVBAR */}
      <nav style={navbar}>

        <div style={navLinks}>
          <Link to="/" style={navLink}>Home</Link>
          <Link to="/guides" style={navLink}>Guides</Link>
          <Link to="/streamers" style={navLink}>Streamers</Link>
          <Link to="/about" style={navLink}>About Us</Link>

          <a
            href="https://discord.gg/z2nU9tfC"
            target="_blank"
            rel="noreferrer"
            style={discordLink}
          >
            Discord
          </a>
        </div>

        <img src="/xyntra.gif" style={logo} />

      </nav>

      {/* HERO */}
      <section style={hero}>
        <h1 style={heroTitle}>
          Welcome<br />
          Xyntra
        </h1>

        <p style={heroSubtitle}>
          The place for streamers, creators and growth.
        </p>

        <a href="#start" style={scroll}>↓</a>
      </section>

      {/* START */}
      <section id="start" style={section}>
        <h2 style={sectionTitle}>🚀 Start Here</h2>

        <div style={grid}>
          <div style={card}>
            <h3>Learn Streaming</h3>
            <p>OBS setup, bitrate, scenes and audio.</p>
          </div>

          <div style={card}>
            <h3>Grow Audience</h3>
            <p>How to get viewers and keep them.</p>
          </div>

          <div style={card}>
            <h3>Create Content</h3>
            <p>TikTok, Shorts and viral clips.</p>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section style={sectionDark}>
        <h2 style={sectionTitle}>🎮 Creator Tools</h2>

        <div style={grid}>
          <div style={cardDark}>
            <h3>OBS Setup</h3>
            <p>Best settings for smooth streams.</p>
          </div>

          <div style={cardDark}>
            <h3>Overlays</h3>
            <p>Clean Twitch & YouTube designs.</p>
          </div>

          <div style={cardDark}>
            <h3>Chat Bots</h3>
            <p>Nightbot & StreamElements commands.</p>
          </div>
        </div>
      </section>

      {/* GROWTH */}
      <section style={section}>
        <h2 style={sectionTitle}>📈 Growth System</h2>

        <div style={longBox}>
          Streaming is not luck — it is consistency, content and interaction.

          <ul>
            <li>Go live regularly (same schedule)</li>
            <li>Talk even with 0 viewers</li>
            <li>Clip every good moment</li>
            <li>Post daily on TikTok / Shorts</li>
            <li>Build community outside Twitch</li>
          </ul>
        </div>
      </section>

      {/* PRO TIPS */}
      <section style={sectionDark}>
        <h2 style={sectionTitle}>🔥 Pro Tips</h2>

        <div style={grid}>
          <div style={cardDark}>
            <h3>Audio is king</h3>
            <p>Bad audio = no viewers.</p>
          </div>

          <div style={cardDark}>
            <h3>Energy matters</h3>
            <p>Even small streams need hype.</p>
          </div>

          <div style={cardDark}>
            <h3>Consistency wins</h3>
            <p>Not talent, not luck.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ===================== */
/* STYLES FIXED         */
/* ===================== */

const page = {
  minHeight: "100vh",
  color: "white",
  fontFamily: "Inter, sans-serif",
  overflowX: "hidden"
}

const background = {
  position: "fixed",
  inset: 0,
  backgroundImage: "url('/ceu.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -2
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
  zIndex: -1
}

/* NAVBAR FIXED */
const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
  zIndex: 100
}

const navLinks = {
  display: "flex",
  gap: "20px",
  alignItems: "center"
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  padding: "8px 12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.06)"
}

/* DISCORD BUTTON */
const discordLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
  padding: "8px 14px",
  borderRadius: "12px",
  background: "linear-gradient(135deg,#5865F2,#3b4bff)",
  boxShadow: "0 0 20px rgba(88,101,242,0.35)"
}

const logo = {
  height: "45px"
}

/* HERO */
const hero = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}

const heroTitle = {
  fontSize: "90px",
  fontWeight: "900"
}

const heroSubtitle = {
  opacity: 0.8,
  marginTop: "10px"
}

const scroll = {
  marginTop: "20px",
  fontSize: "40px",
  color: "white",
  textDecoration: "none"
}

/* SECTIONS */
const section = {
  padding: "120px 40px"
}

const sectionDark = {
  padding: "120px 40px",
  background: "rgba(0,0,0,0.2)"
}

const sectionTitle = {
  fontSize: "40px",
  marginBottom: "30px"
}

/* GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px"
}

const card = {
  background: "rgba(255,255,255,0.08)",
  padding: "25px",
  borderRadius: "18px"
}

const cardDark = {
  background: "rgba(0,0,0,0.3)",
  padding: "25px",
  borderRadius: "18px"
}

const longBox = {
  background: "rgba(255,255,255,0.06)",
  padding: "30px",
  borderRadius: "20px",
  lineHeight: "1.8"
}