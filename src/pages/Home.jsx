export default function Home() {
  return (
    <div style={page}>

      {/* HERO */}
      <section style={hero}>

        <div style={bgGlow}></div>

        <div style={heroLeft}>

          <div style={badge}>
            Plataforma Portuguesa de Streaming
          </div>

          <h1 style={title}>
            Evolui no Minecraft.
            <br />
            Cresce no Streaming.
          </h1>

          <p style={description}>
            A Nexora ajuda streamers portugueses a melhorarem
            as suas streams, setup, overlays, OBS e presença online.
          </p>

          <div style={buttons}>

            <a href="/guides" style={primaryBtn}>
              Explorar Guias
            </a>

            <a href="/servers" style={secondaryBtn}>
              Ver Servidores
            </a>

          </div>

        </div>

        {/* IMAGEM */}
        <div style={heroRight}>

          <div style={imageGlow}></div>

          <img
            src="nexora-logo.png"
            alt="Nexora"
            style={heroImage}
          />

        </div>

      </section>

      {/* CARDS */}
      <section style={cardsSection}>

        <div style={cardsGrid}>

          <div style={card}>
            <div style={icon}>🎥</div>

            <h2 style={cardTitle}>
              OBS Studio
            </h2>

            <p style={cardText}>
              Aprende a configurar bitrate,
              overlays, alertas, qualidade,
              encoder e microfone.
            </p>
          </div>

          <div style={card}>
            <div style={icon}>🚀</div>

            <h2 style={cardTitle}>
              Crescimento
            </h2>

            <p style={cardText}>
              Aprende estratégias para crescer
              na Twitch, TikTok e YouTube.
            </p>
          </div>

          <div style={card}>
            <div style={icon}>🎮</div>

            <h2 style={cardTitle}>
              Minecraft
            </h2>

            <p style={cardText}>
              Descobre servidores portugueses,
              streamers e conteúdo gaming.
            </p>
          </div>

        </div>

      </section>

      {/* SECTION */}
      <section style={infoSection}>

        <div style={infoLeft}>

          <p style={mini}>
            SOBRE A NEXORA
          </p>

          <h2 style={infoTitle}>
            Tudo o que precisas
            para começar.
          </h2>

          <p style={infoText}>
            A Nexora junta guias completos,
            ferramentas, overlays e dicas reais
            para streamers portugueses.
          </p>

          <p style={infoText}>
            Tudo num design moderno inspirado
            nos melhores websites gaming.
          </p>

          <a href="/guides" style={primaryBtn}>
            Começar Agora
          </a>

        </div>

        <div style={infoRight}>

          <div style={miniCard}>
            <span>OBS</span>
            <strong>Configuração Completa</strong>
          </div>

          <div style={miniCard}>
            <span>Alerts</span>
            <strong>Widgets e Overlays</strong>
          </div>

          <div style={miniCard}>
            <span>Twitch</span>
            <strong>Como Crescer</strong>
          </div>

          <div style={miniCard}>
            <span>Minecraft</span>
            <strong>Servidores Portugueses</strong>
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
  overflow: "hidden",
  fontFamily: "system-ui"
}

const hero = {
  position: "relative",
  minHeight: "92vh",
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  alignItems: "center",
  gap: "60px",
  padding: "80px 70px",
  overflow: "hidden",

  background:
    "radial-gradient(circle at top, rgba(168,85,247,0.16), transparent 35%), linear-gradient(to bottom,#070b14,#0f172a)"
}

const bgGlow = {
  position: "absolute",
  top: "-200px",
  left: "-200px",
  width: "700px",
  height: "700px",
  background: "rgba(168,85,247,0.12)",
  filter: "blur(120px)",
  borderRadius: "999px"
}

const heroLeft = {
  position: "relative",
  zIndex: 2
}

const badge = {
  display: "inline-block",
  padding: "10px 18px",
  borderRadius: "999px",
  background: "rgba(168,85,247,0.12)",
  border: "1px solid rgba(168,85,247,0.25)",
  color: "#c084fc",
  fontWeight: "800",
  marginBottom: "28px"
}

const title = {
  fontSize: "82px",
  lineHeight: 1,
  fontWeight: "900",
  marginBottom: "30px",

  background: "linear-gradient(90deg,#ffffff,#d8b4fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const description = {
  fontSize: "21px",
  lineHeight: 1.8,
  color: "#9ca3af",
  maxWidth: "700px",
  marginBottom: "38px"
}

const buttons = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap"
}

const primaryBtn = {
  background: "linear-gradient(90deg,#9333ea,#7e22ce)",
  color: "white",
  padding: "17px 30px",
  borderRadius: "18px",
  textDecoration: "none",
  fontWeight: "800",
  boxShadow: "0 0 35px rgba(168,85,247,0.28)"
}

const secondaryBtn = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding: "17px 30px",
  borderRadius: "18px",
  textDecoration: "none",
  fontWeight: "700"
}

const heroRight = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const imageGlow = {
  position: "absolute",
  width: "500px",
  height: "500px",
  background: "rgba(168,85,247,0.25)",
  filter: "blur(130px)",
  borderRadius: "999px"
}

const heroImage = {
  position: "relative",
  width: "100%",
  maxWidth: "700px",
  objectFit: "contain",
  filter:
    "drop-shadow(0 0 40px rgba(168,85,247,0.45))"
}

const cardsSection = {
  padding: "20px 70px 100px"
}

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "28px"
}

const card = {
  background: "rgba(17,24,39,0.72)",
  border: "1px solid rgba(168,85,247,0.15)",
  borderRadius: "30px",
  padding: "35px",
  boxShadow: "0 0 30px rgba(168,85,247,0.08)"
}

const icon = {
  fontSize: "44px",
  marginBottom: "20px"
}

const cardTitle = {
  fontSize: "30px",
  fontWeight: "900",
  marginBottom: "16px"
}

const cardText = {
  color: "#9ca3af",
  lineHeight: 1.8,
  fontSize: "17px"
}

const infoSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "70px",
  alignItems: "center",
  padding: "20px 70px 120px"
}

const infoLeft = {
  maxWidth: "700px"
}

const mini = {
  color: "#a855f7",
  fontWeight: "800",
  letterSpacing: "2px",
  marginBottom: "18px"
}

const infoTitle = {
  fontSize: "62px",
  lineHeight: 1.1,
  fontWeight: "900",
  marginBottom: "28px"
}

const infoText = {
  color: "#9ca3af",
  lineHeight: 1.9,
  marginBottom: "22px",
  fontSize: "18px"
}

const infoRight = {
  display: "flex",
  flexDirection: "column",
  gap: "22px"
}

const miniCard = {
  background: "rgba(17,24,39,0.78)",
  border: "1px solid rgba(168,85,247,0.15)",
  padding: "28px",
  borderRadius: "24px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  boxShadow: "0 0 25px rgba(168,85,247,0.08)"
}