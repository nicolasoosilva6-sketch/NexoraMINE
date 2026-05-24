export default function Home() {
  return (
    <div style={page}>

      {/* HERO */}
      <section style={hero}>

        <div style={heroContent}>

          <div style={badge}>
            Plataforma Portuguesa de Streaming & Minecraft
          </div>

          <h1 style={title}>
            Evolui no Minecraft.
            <br />
            Cresce no Streaming.
          </h1>

          <p style={description}>
            A Nexora foi criada para ajudar jogadores e streamers portugueses
            a melhorarem as suas streams, setups, conteúdo e presença online.
          </p>

          <div style={buttons}>

            <a href="/guides" style={primaryBtn}>
              Explorar Guias
            </a>

            <a
              href="https://www.twitch.tv/correiamb"
              target="_blank"
              style={secondaryBtn}
            >
              Twitch do Correia
            </a>

          </div>

        </div>

        {/* IMAGEM */}
        <div style={imageArea}>

          <div style={imageGlow}></div>

          <img
            src="https://chatgpt.com/backend-api/estuary/content?id=file_00000000dba87246928d056bf2434cb1&ts=494341&p=fs&cid=1&sig=22ec437f8d245132237536d2a01d263e8eb50b4fab6278949d02a6f3df291f55&v=0"
            alt="Nexora"
            style={heroImage}
          />

        </div>

      </section>

      {/* INFO */}
      <section style={section}>

        <div style={sectionHeader}>
          <p style={sectionMini}>
            SOBRE A NEXORA
          </p>

          <h2 style={sectionTitle}>
            Uma plataforma criada para ajudar streamers portugueses.
          </h2>
        </div>

        <div style={grid}>

          <div style={card}>
            <div style={icon}>🎥</div>

            <h3 style={cardTitle}>
              Guias completos
            </h3>

            <p style={cardText}>
              Aprende OBS, overlays, alertas, microfone,
              configurações e tudo o que precisas para começar.
            </p>
          </div>

          <div style={card}>
            <div style={icon}>🎮</div>

            <h3 style={cardTitle}>
              Comunidade Minecraft
            </h3>

            <p style={cardText}>
              Descobre servidores portugueses, streamers e recursos
              para melhorar a tua experiência no Minecraft.
            </p>
          </div>

          <div style={card}>
            <div style={icon}>🚀</div>

            <h3 style={cardTitle}>
              Crescimento
            </h3>

            <p style={cardText}>
              Aprende estratégias reais para crescer na Twitch,
              TikTok e YouTube.
            </p>
          </div>

        </div>

      </section>

      {/* SECTION 2 */}
      <section style={bigSection}>

        <div style={left}>

          <p style={sectionMini}>
            PORQUÊ A NEXORA?
          </p>

          <h2 style={bigTitle}>
            Tudo num só lugar.
          </h2>

          <p style={bigText}>
            A maioria dos novos streamers perde demasiado tempo
            à procura de informação confusa.
          </p>

          <p style={bigText}>
            A Nexora junta tudo o que realmente importa:
            guias simples, setups, overlays, bots e dicas reais.
          </p>

          <a href="/guides" style={primaryBtn}>
            Ver Guias
          </a>

        </div>

        <div style={rightBox}>

          <div style={miniCard}>
            <span>OBS Studio</span>
            <strong>Configuração Completa</strong>
          </div>

          <div style={miniCard}>
            <span>Twitch</span>
            <strong>Como Crescer</strong>
          </div>

          <div style={miniCard}>
            <span>Overlays</span>
            <strong>Sites Recomendados</strong>
          </div>

          <div style={miniCard}>
            <span>Microfone</span>
            <strong>Melhores Definições</strong>
          </div>

        </div>

      </section>

    </div>
  )
}

/* STYLES */

const page = {
  color: "white",
  minHeight: "100vh",
  fontFamily: "system-ui",
  paddingBottom: "120px"
}

const hero = {
  minHeight: "85vh",
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  alignItems: "center",
  gap: "60px",
  padding: "80px 60px"
}

const heroContent = {
  maxWidth: "700px"
}

const badge = {
  display: "inline-block",
  background: "rgba(168,85,247,0.15)",
  border: "1px solid rgba(168,85,247,0.35)",
  color: "#c084fc",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: "700",
  marginBottom: "25px"
}

const title = {
  fontSize: "78px",
  lineHeight: 1,
  fontWeight: "900",
  marginBottom: "30px",
  background: "linear-gradient(90deg,#ffffff,#d8b4fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const description = {
  fontSize: "20px",
  color: "#9ca3af",
  lineHeight: 1.8,
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
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: "800",
  boxShadow: "0 0 30px rgba(168,85,247,0.25)"
}

const secondaryBtn = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding: "16px 28px",
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: "700"
}

const imageArea = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const imageGlow = {
  position: "absolute",
  width: "450px",
  height: "450px",
  background: "rgba(168,85,247,0.18)",
  filter: "blur(100px)",
  borderRadius: "999px"
}

const heroImage = {
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  borderRadius: "30px",
  border: "1px solid rgba(168,85,247,0.25)",
  boxShadow: "0 0 40px rgba(168,85,247,0.18)"
}

const section = {
  padding: "40px 60px"
}

const sectionHeader = {
  marginBottom: "40px"
}

const sectionMini = {
  color: "#a855f7",
  fontWeight: "800",
  letterSpacing: "2px",
  marginBottom: "15px"
}

const sectionTitle = {
  fontSize: "50px",
  fontWeight: "900",
  maxWidth: "900px",
  lineHeight: 1.1
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "25px"
}

const card = {
  background: "rgba(17,24,39,0.7)",
  border: "1px solid rgba(168,85,247,0.15)",
  boxShadow: "0 0 30px rgba(168,85,247,0.08)",
  padding: "35px",
  borderRadius: "28px"
}

const icon = {
  fontSize: "42px",
  marginBottom: "20px"
}

const cardTitle = {
  fontSize: "28px",
  fontWeight: "800",
  marginBottom: "16px"
}

const cardText = {
  color: "#9ca3af",
  lineHeight: 1.8,
  fontSize: "17px"
}

const bigSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "60px",
  alignItems: "center",
  padding: "80px 60px"
}

const left = {
  maxWidth: "700px"
}

const bigTitle = {
  fontSize: "60px",
  fontWeight: "900",
  marginBottom: "25px"
}

const bigText = {
  color: "#9ca3af",
  lineHeight: 1.9,
  marginBottom: "22px",
  fontSize: "18px"
}

const rightBox = {
  display: "flex",
  flexDirection: "column",
  gap: "20px"
}

const miniCard = {
  background: "rgba(17,24,39,0.8)",
  border: "1px solid rgba(168,85,247,0.15)",
  padding: "28px",
  borderRadius: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "18px"
}