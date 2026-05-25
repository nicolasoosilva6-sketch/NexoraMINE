import obsLogo from "../assets/obs-logo.png"
import growthLogo from "../assets/crescimento-logo.png"
import designLogo from "../assets/design-logo.png"
import minecraftBg from "../assets/minecraft-bg.png"

export default function Home() {
  return (
    <div style={page}>

      {/* BACKGROUND */}
      <div style={bgImage}></div>
      <div style={bgOverlay}></div>

      {/* HERO */}
      <section style={hero}>

        <div style={heroCenter}>

          <div style={badge}>
            NEXORA ACADEMY
          </div>

          {/* LOGO CENTRADA */}
          <div style={logoWrap}>
            <img src="/nexora-logo.png" style={logo} />
          </div>

          {/* TITULO CENTRADO */}
          <h1 style={title}>
            Aprende a fazer streams profissionais
          </h1>

          <p style={subtitle}>
            Streaming Platform • OBS Studio • Twitch • YouTube • Growth
          </p>

          <p style={description}>
            A Nexora Academy ensina-te desde zero até criares streams profissionais,
            cresceres na Twitch e melhorares o teu conteúdo.
          </p>

          <div style={buttons}>
            <a href="#start" style={primaryBtn}>Começar</a>
            <a href="#guides" style={secondaryBtn}>Explorar</a>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section style={sectionWhite}>

        <h2 style={sectionTitle}>Tudo o que vais aprender</h2>

        <div style={statsGrid}>

          <div style={statBox}>
            <h3 style={statNumber}>OBS</h3>
            <p style={statLabel}>Setup profissional</p>
          </div>

          <div style={statBox}>
            <h3 style={statNumber}>LIVE</h3>
            <p style={statLabel}>Como começar streams</p>
          </div>

          <div style={statBox}>
            <h3 style={statNumber}>GROWTH</h3>
            <p style={statLabel}>Crescer audiência</p>
          </div>

          <div style={statBox}>
            <h3 style={statNumber}>BRAND</h3>
            <p style={statLabel}>Identidade visual</p>
          </div>

        </div>

      </section>

      {/* START */}
      <section style={sectionBlue}>

        <h2 style={sectionTitleWhite}>Como começar a fazer live</h2>

        <div style={bigGrid}>

          <div style={bigCard}>
            <h3>1. Instala OBS</h3>
            <p>Software principal para streaming profissional.</p>
          </div>

          <div style={bigCard}>
            <h3>2. Configura qualidade</h3>
            <p>Bitrate, FPS e resolução correta para stream estável.</p>
          </div>

          <div style={bigCard}>
            <h3>3. Escolhe plataforma</h3>
            <p>Twitch, YouTube ou TikTok LIVE.</p>
          </div>

          <div style={bigCard}>
            <h3>4. Começa a criar conteúdo</h3>
            <p>Consistência + interação = crescimento.</p>
          </div>

        </div>

      </section>

      {/* GUIDES */}
      <section style={sectionWhite}>

        <h2 style={sectionTitle}>Guias principais</h2>

        <div style={grid}>

          <div style={card}>
            <img src={obsLogo} style={cardImage} />
            <h3 style={cardTitle}>OBS Studio</h3>
            <p style={cardText}>Configurar cenas, áudio e overlays.</p>
          </div>

          <div style={card}>
            <img src={growthLogo} style={cardImage} />
            <h3 style={cardTitle}>Crescimento</h3>
            <p style={cardText}>Como crescer na Twitch e TikTok.</p>
          </div>

          <div style={card}>
            <img src={designLogo} style={cardImage} />
            <h3 style={cardTitle}>Design</h3>
            <p style={cardText}>Overlays e branding profissional.</p>
          </div>

        </div>

      </section>

    </div>
  )
}

/* ================= STYLES FIXED ================= */

const page = {
  minHeight: "100vh",
  fontFamily: "Arial",
  color: "#0f172a",
  overflowX: "hidden",
  background: "#f8fafc"
}

/* BACKGROUND */
const bgImage = {
  position: "fixed",
  inset: 0,
  backgroundImage: `url(${minecraftBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.28,
  zIndex: 0
}

const bgOverlay = {
  position: "fixed",
  inset: 0,
  background: `
    radial-gradient(circle at top, rgba(37,99,235,0.12), transparent 50%),
    linear-gradient(180deg, rgba(15,23,42,0.18), rgba(255,255,255,0.05))
  `,
  zIndex: 1
}

/* HERO CENTRADO PERFEITO */
const hero = {
  position: "relative",
  zIndex: 2,
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "60px"
}

const heroCenter = {
  maxWidth: "900px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

/* LOGO CENTRADA */
const logoWrap = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px"
}

const logo = {
  width: "360px",
  maxWidth: "90%",
  display: "block"
}

/* TEXTOS */
const badge = {
  display: "inline-block",
  padding: "10px 18px",
  borderRadius: "999px",
  background: "#dbeafe",
  color: "#1d4ed8",
  fontWeight: "700",
  marginBottom: "20px"
}

const title = {
  fontSize: "46px",
  fontWeight: "900",
  marginBottom: "10px"
}

const subtitle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1d4ed8",
  marginBottom: "10px"
}

const description = {
  fontSize: "18px",
  color: "#475569",
  marginBottom: "25px",
  maxWidth: "700px"
}

/* BUTTONS */
const buttons = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "center"
}

const primaryBtn = {
  background: "#2563eb",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  fontWeight: "700",
  textDecoration: "none"
}

const secondaryBtn = {
  background: "white",
  border: "2px solid #2563eb",
  color: "#2563eb",
  padding: "14px 24px",
  borderRadius: "10px",
  fontWeight: "700",
  textDecoration: "none"
}

/* SECTIONS */
const sectionWhite = {
  padding: "90px 50px",
  textAlign: "center",
  background: "linear-gradient(180deg, #ffffff, #f0f7ff)",
  zIndex: 2
}

const sectionBlue = {
  padding: "90px 50px",
  textAlign: "center",
  background: "linear-gradient(180deg, #0f172a, #0b1220)",
  color: "white",
  zIndex: 2
}

/* TITLES */
const sectionTitle = {
  fontSize: "34px",
  fontWeight: "900",
  marginBottom: "40px"
}

const sectionTitleWhite = {
  fontSize: "34px",
  fontWeight: "900",
  marginBottom: "40px",
  color: "white"
}

/* GRIDS */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px"
}

const bigGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px"
}

/* CARDS */
const card = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(15,23,42,0.10)",
  border: "1px solid rgba(37,99,235,0.12)"
}

const bigCard = {
  background: "linear-gradient(145deg, #0f172a, #1e293b)",
  padding: "25px",
  borderRadius: "16px",
  textAlign: "left",
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
  border: "1px solid rgba(59,130,246,0.25)",
  color: "white"
}

const cardImage = {
  width: "45px",
  marginBottom: "10px"
}

const cardTitle = {
  fontSize: "18px",
  fontWeight: "800",
  marginBottom: "6px"
}

const cardText = {
  color: "#64748b"
}

/* STATS */
const statsGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap"
}

const statBox = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "16px",
  minWidth: "150px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  border: "1px solid rgba(37,99,235,0.10)"
}

const statNumber = {
  fontSize: "22px",
  fontWeight: "900",
  color: "#2563eb"
}

const statLabel = {
  color: "#334155",
  fontWeight: "600"
}