export default function Home() {
  return (
    <div style={page}>

      {/* HERO */}
      <section style={hero}>

        <div style={overlay}></div>

        <div style={heroContent}>

          <div style={badge}>
            NEXORA PLATFORM
          </div>

          <h1 style={title}>
            A plataforma portuguesa
            <br />
            para streamers e Minecraft.
          </h1>

          <p style={description}>
            Guias completos de OBS, overlays, alertas, microfones,
            Twitch, TikTok, crescimento e servidores portugueses.
          </p>

          <div style={buttons}>

            <a href="/guides" style={primaryBtn}>
              Explorar Guias
            </a>

            <a
              href="/servers"
              style={secondaryBtn}
            >
              Ver Servidores
            </a>

          </div>

        </div>

        {/* IMAGEM */}
        <div style={imageContainer}>

          <div style={imageGlow}></div>

          <img
            src="/nexora-logo.png"
            alt="Nexora"
            style={heroImage}
          />

        </div>

      </section>

      {/* STATS */}
      <section style={statsSection}>

        <div style={statCard}>
          <h2 style={statNumber}>50+</h2>
          <p style={statText}>Guias disponíveis</p>
        </div>

        <div style={statCard}>
          <h2 style={statNumber}>100%</h2>
          <p style={statText}>Gratuito</p>
        </div>

        <div style={statCard}>
          <h2 style={statNumber}>PT</h2>
          <p style={statText}>Comunidade Portuguesa</p>
        </div>

      </section>

      {/* FEATURES */}
      <section style={features}>

        <div style={sectionTop}>
          <p style={miniTitle}>
            O QUE ENCONTRAS
          </p>

          <h2 style={bigTitle}>
            Tudo o que precisas
            para melhorar as tuas streams.
          </h2>
        </div>

        <div style={grid}>

          <div style={card}>
            <div style={icon}>🎥</div>

            <h3 style={cardTitle}>
              OBS Studio
            </h3>

            <p style={cardText}>
              Aprende a configurar bitrate,
              encoder, microfone, alertas,
              overlays e qualidade.
            </p>
          </div>

          <div style={card}>
            <div style={icon}>🚀</div>

            <h3 style={cardTitle}>
              Crescimento
            </h3>

            <p style={cardText}>
              Estratégias reais para crescer
              na Twitch, TikTok e YouTube.
            </p>
          </div>

          <div style={card}>
            <div style={icon}>🎮</div>

            <h3 style={cardTitle}>
              Servidores
            </h3>

            <p style={cardText}>
              Descobre servidores portugueses
              de Minecraft e streamers tugas.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

/* STYLES */

const page = {
  minHeight: "100vh",
  background: "#070b14",
  color: "white",
  fontFamily: "system-ui",
  overflow: "hidden"
}

const hero = {
  position: "relative",
  minHeight: "92vh",
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  alignItems: "center",
  padding: "60px",
  gap: "50px"
}

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(168,85,247,0.18), transparent 40%)",
  pointerEvents: "none"
}

const heroContent = {
  position: "relative",
  zIndex: 2
}

const badge = {
  display: "inline-block",
  background: "rgba(168,85,247,0.15)",
  border: "1px solid rgba(168,85,247,0.25)",
  color: "#c084fc",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: "800",
  marginBottom: "25px"
}

const title = {
  fontSize: "76px",
  lineHeight: 1,
  fontWeight: "900",
  marginBottom: "28px",
  background: "linear-gradient(90deg,#fff,#d8b4fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const description = {
  fontSize: "20px",
  color: "#9ca3af",
  lineHeight: 1.8,
  maxWidth: "700px",
  marginBottom: "35px"
}

const buttons = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap"
}

const primaryBtn = {
  background: "linear-gradient(90deg,#9333ea,#7e22ce)",
  color: "white",
  padding: "16px 28px",
  borderRadius: "18px",
  textDecoration: "none",
  fontWeight: "800",
  boxShadow: "0 0 30px rgba(168,85,247,0.35)"
}

const secondaryBtn = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "white",
  padding: "16px 28px",
  borderRadius: "18px",
  textDecoration: "none",
  fontWeight: "700"
}

const imageContainer = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const imageGlow = {
  position: "absolute",
  width: "450px",
  height: "450px",
  background: "rgba(168,85,247,0.25)",
  filter: "blur(120px)",
  borderRadius: "999px"
}

const heroImage = {
  position: "relative",
  width: "100%",
  maxWidth: "650px",
  objectFit: "contain",
  filter: "drop-shadow(0 0 40px rgba(168,85,247,0.45))"
}

const statsSection = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "25px",
  padding: "0 60px 80px"
}

const statCard = {
  background: "rgba(17,24,39,0.7)",
  border: "1px solid rgba(168,85,247,0.15)",
  borderRadius: "28px",
  padding: "35px",
  textAlign: "center",
  boxShadow: "0 0 25px rgba(168,85,247,0.08)"
}

const statNumber = {
  fontSize: "52px",
  fontWeight: "900",
  marginBottom: "10px",
  color: "#c084fc"
}

const statText = {
  color: "#9ca3af",
  fontSize: "18px"
}

const features = {
  padding: "20px 60px 120px"
}

const sectionTop = {
  marginBottom: "50px"
}

const miniTitle = {
  color: "#a855f7",
  fontWeight: "800",
  letterSpacing: "2px",
  marginBottom: "14px"
}

const bigTitle = {
  fontSize: "58px",
  fontWeight: "900",
  lineHeight: 1.1,
  maxWidth: "900px"
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "25px"
}

const card = {
  background: "rgba(17,24,39,0.75)",
  border: "1px solid rgba(168,85,247,0.15)",
  borderRadius: "30px",
  padding: "35px",
  boxShadow: "0 0 25px rgba(168,85,247,0.08)"
}

const icon = {
  fontSize: "42px",
  marginBottom: "20px"
}

const cardTitle = {
  fontSize: "30px",
  fontWeight: "900",
  marginBottom: "15px"
}

const cardText = {
  color: "#9ca3af",
  lineHeight: 1.8,
  fontSize: "17px"
}