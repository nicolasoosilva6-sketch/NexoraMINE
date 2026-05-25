import obsLogo from "../assets/obs-logo.png"
import growthLogo from "../assets/crescimento-logo.png"
import minecraftLogo from "../assets/minecraft-logo.png"
import designLogo from "../assets/design-logo.png"

export default function Home() {
  return (
    <div style={page}>

      {/* HERO */}
      <section style={hero}>

        <div style={topGlow}></div>
        <div style={leftGlow}></div>
        <div style={gridBg}></div>

        <div style={heroLeft}>

          <div style={badge}>
            Plataforma Portuguesa de Streaming & Minecraft
          </div>

          <h1 style={title}>
            Evolui no Minecraft.
            <br />
            Cresce no Streaming.
          </h1>

          <p style={description}>
            A Nexora ajuda streamers portugueses
            a criarem streams modernas com OBS,
            overlays, setups e conteúdo gaming.
          </p>

          <div style={buttons}>

            <a href="/guides" style={primaryBtn}>
              Explorar Guias
            </a>

            <a href="/servers" style={secondaryBtn}>
              Servidores
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div style={heroRight}>

          <div style={imageGlow}></div>

          <div style={imageCard}>

            <img
              src="/nexora-logo.png"
              alt="Nexora"
              style={heroImage}
            />

          </div>

        </div>

      </section>

      {/* CARDS */}
      <section style={section}>

        <div style={sectionTop}>

          <p style={miniTitle}>
            RECURSOS
          </p>

          <h2 style={sectionTitle}>
            Tudo o que precisas para streaming.
          </h2>

        </div>

        <div style={cardsGrid}>

          <div style={card}>

            <img
              src={obsLogo}
              alt=""
              style={cardImage}
            />

            <h2 style={cardTitle}>
              OBS Studio
            </h2>

            <p style={cardText}>
              Aprende bitrate, encoder,
              overlays e qualidade profissional.
            </p>

          </div>

          <div style={card}>

            <img
              src={growthLogo}
              alt=""
              style={cardImage}
            />

            <h2 style={cardTitle}>
              Crescimento
            </h2>

            <p style={cardText}>
              Aprende a crescer na Twitch,
              TikTok e YouTube.
            </p>

          </div>

          <div style={card}>

            <img
              src={minecraftLogo}
              alt=""
              style={cardImage}
            />

            <h2 style={cardTitle}>
              Minecraft
            </h2>

            <p style={cardText}>
              Descobre servidores portugueses,
              streamers e comunidades gaming.
            </p>

          </div>

        </div>

      </section>

      {/* COMMUNITY */}
      <section style={communitySection}>

        <div style={communityGlow}></div>

        <div style={communityLeft}>

          <p style={miniTitle}>
            COMUNIDADE
          </p>

          <h2 style={communityTitle}>
            Feito para streamers tugas.
          </h2>

          <p style={communityText}>
            Inspirado nos maiores websites gaming,
            a Nexora mistura design moderno,
            streaming e Minecraft numa experiência premium.
          </p>

          <div style={communityTags}>

            <div style={tag}>Twitch</div>
            <div style={tag}>OBS</div>
            <div style={tag}>Minecraft</div>
            <div style={tag}>Overlays</div>
            <div style={tag}>Streaming</div>

          </div>

        </div>

        <div style={communityRight}>

          <div style={bigCard}>

            <div style={circle}></div>

            <h2 style={bigCardTitle}>
              NEXORA
            </h2>

            <p style={bigCardText}>
              Plataforma criada para ajudar
              creators portugueses a evoluir.
            </p>

          </div>

        </div>

      </section>

      {/* EXTRA */}
      <section style={extraSection}>

        <div style={extraGlow}></div>

        <div style={extraLeft}>

          <p style={miniTitle}>
            EXPERIÊNCIA NEXORA
          </p>

          <h2 style={extraTitle}>
            Uma plataforma criada
            para streamers modernos.
          </h2>

          <p style={extraText}>
            A Nexora foi inspirada nos maiores websites
            gaming para criar uma experiência moderna,
            rápida e premium.
          </p>

          <p style={extraText}>
            Aqui encontras um ambiente focado em creators,
            Minecraft, Twitch, OBS e crescimento online.
          </p>

          <p style={extraText}>
            Tudo foi pensado para ficar limpo,
            moderno e com visual totalmente roxo.
          </p>

          <div style={featureGrid}>

            <div style={featureCard}>
              <img src={obsLogo} alt="" style={featureImage} />

              <div>
                <h3 style={featureTitle}>
                  OBS Studio
                </h3>

                <p style={featureText}>
                  Guias completos de configuração.
                </p>
              </div>
            </div>

            <div style={featureCard}>
              <img src={growthLogo} alt="" style={featureImage} />

              <div>
                <h3 style={featureTitle}>
                  Crescimento
                </h3>

                <p style={featureText}>
                  Aprende a crescer nas redes.
                </p>
              </div>
            </div>

            <div style={featureCard}>
              <img src={minecraftLogo} alt="" style={featureImage} />

              <div>
                <h3 style={featureTitle}>
                  Minecraft
                </h3>

                <p style={featureText}>
                  Comunidade portuguesa gaming.
                </p>
              </div>
            </div>

            <div style={featureCard}>
              <img
  src={designLogo}
  alt=""
  style={featureImage}
/>

              <div>
                <h3 style={featureTitle}>
                  Design Moderno
                </h3>

                <p style={featureText}>
                  Inspirado nos melhores websites.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div style={extraRight}>

          <div style={panel}>

            <div style={panelGlow}></div>

            <h2 style={panelTitle}>
              NEXORA
            </h2>

            <div style={panelLine}></div>

            <div style={panelBox}>
              <span>Streaming</span>
              <strong>OBS & Overlays</strong>
            </div>

            <div style={panelBox}>
              <span>Minecraft</span>
              <strong>Servidores PT</strong>
            </div>

            <div style={panelBox}>
              <span>Twitch</span>
              <strong>Dicas de Crescimento</strong>
            </div>

            <div style={panelBox}>
              <span>Creators</span>
              <strong>Comunidade Portuguesa</strong>
            </div>

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
  fontFamily: "Inter, sans-serif"
}

const hero = {
  position: "relative",
  minHeight: "95vh",
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  alignItems: "center",
  gap: "70px",
  padding: "90px 80px",
  overflow: "hidden",
  background:
    "linear-gradient(to bottom,#070b14,#0f172a)"
}

const gridBg = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(168,85,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.05) 1px, transparent 1px)",
  backgroundSize: "50px 50px"
}

const topGlow = {
  position: "absolute",
  top: "-300px",
  right: "-200px",
  width: "800px",
  height: "800px",
  background: "rgba(168,85,247,0.12)",
  filter: "blur(140px)",
  borderRadius: "999px"
}

const leftGlow = {
  position: "absolute",
  bottom: "-250px",
  left: "-250px",
  width: "700px",
  height: "700px",
  background: "rgba(168,85,247,0.10)",
  filter: "blur(140px)",
  borderRadius: "999px"
}

const heroLeft = {
  position: "relative",
  zIndex: 2
}

const badge = {
  display: "inline-block",
  background: "rgba(168,85,247,0.10)",
  border: "1px solid rgba(168,85,247,0.20)",
  color: "#c084fc",
  padding: "12px 20px",
  borderRadius: "999px",
  fontWeight: "800",
  marginBottom: "28px"
}

const title = {
  fontSize: "88px",
  lineHeight: 1,
  fontWeight: "900",
  marginBottom: "30px",
  background: "linear-gradient(90deg,#ffffff,#d8b4fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const description = {
  color: "#9ca3af",
  fontSize: "21px",
  lineHeight: 1.8,
  maxWidth: "720px",
  marginBottom: "40px"
}

const buttons = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap"
}

const primaryBtn = {
  background: "linear-gradient(90deg,#9333ea,#7e22ce)",
  color: "white",
  padding: "18px 32px",
  borderRadius: "18px",
  textDecoration: "none",
  fontWeight: "800",
  boxShadow: "0 0 35px rgba(168,85,247,0.28)"
}

const secondaryBtn = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "white",
  padding: "18px 32px",
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
  width: "550px",
  height: "550px",
  background: "rgba(168,85,247,0.20)",
  filter: "blur(140px)",
  borderRadius: "999px"
}

const imageCard = {
  position: "relative",
  background: "rgba(17,24,39,0.55)",
  border: "1px solid rgba(168,85,247,0.18)",
  borderRadius: "40px",
  padding: "40px",
  boxShadow: "0 0 50px rgba(168,85,247,0.10)"
}

const heroImage = {
  width: "100%",
  maxWidth: "650px",
  objectFit: "contain",
  filter:
    "drop-shadow(0 0 40px rgba(168,85,247,0.35))"
}

const section = {
  padding: "40px 80px 120px"
}

const sectionTop = {
  marginBottom: "45px"
}

const miniTitle = {
  color: "#a855f7",
  fontWeight: "800",
  letterSpacing: "2px",
  marginBottom: "18px"
}

const sectionTitle = {
  fontSize: "58px",
  fontWeight: "900",
  maxWidth: "900px"
}

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "28px"
}

const card = {
  background: "rgba(17,24,39,0.72)",
  border: "1px solid rgba(168,85,247,0.15)",
  borderRadius: "32px",
  padding: "38px",
  boxShadow:
    "0 0 30px rgba(168,85,247,0.08)"
}

const cardImage = {
  width: "60px",
  height: "60px",
  objectFit: "contain",
  marginBottom: "22px"
}

const cardTitle = {
  fontSize: "32px",
  fontWeight: "900",
  marginBottom: "16px"
}

const cardText = {
  color: "#9ca3af",
  lineHeight: 1.9,
  fontSize: "17px"
}

const communitySection = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  gap: "80px",
  alignItems: "center",
  padding: "20px 80px 140px"
}

const communityGlow = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top right, rgba(168,85,247,0.12), transparent 35%)"
}

const communityLeft = {
  position: "relative",
  zIndex: 2
}

const communityTitle = {
  fontSize: "68px",
  lineHeight: 1.05,
  fontWeight: "900",
  marginBottom: "28px"
}

const communityText = {
  color: "#9ca3af",
  lineHeight: 1.9,
  fontSize: "18px",
  marginBottom: "35px",
  maxWidth: "700px"
}

const communityTags = {
  display: "flex",
  flexWrap: "wrap",
  gap: "14px"
}

const tag = {
  padding: "14px 20px",
  borderRadius: "999px",
  background: "rgba(168,85,247,0.10)",
  border: "1px solid rgba(168,85,247,0.20)",
  color: "#d8b4fe",
  fontWeight: "700"
}

const communityRight = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const bigCard = {
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  height: "420px",
  borderRadius: "40px",
  background:
    "linear-gradient(145deg, rgba(17,24,39,0.92), rgba(88,28,135,0.35))",
  border: "1px solid rgba(168,85,247,0.20)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
}

const circle = {
  position: "absolute",
  width: "340px",
  height: "340px",
  background: "rgba(168,85,247,0.18)",
  borderRadius: "999px",
  filter: "blur(80px)"
}

const bigCardTitle = {
  position: "relative",
  zIndex: 2,
  fontSize: "82px",
  fontWeight: "900",
  background: "linear-gradient(90deg,#ffffff,#d8b4fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const bigCardText = {
  position: "relative",
  zIndex: 2,
  color: "#cbd5e1",
  marginTop: "18px",
  fontSize: "18px",
  textAlign: "center",
  maxWidth: "320px",
  lineHeight: 1.8
}

const extraSection = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "80px",
  alignItems: "center",
  padding: "60px 80px 180px"
}

const extraGlow = {
  position: "absolute",
  bottom: "-300px",
  left: "-200px",
  width: "900px",
  height: "900px",
  background: "rgba(168,85,247,0.10)",
  filter: "blur(160px)",
  borderRadius: "999px"
}

const extraLeft = {
  position: "relative",
  zIndex: 2
}

const extraTitle = {
  fontSize: "74px",
  lineHeight: 1.05,
  fontWeight: "900",
  marginBottom: "30px"
}

const extraText = {
  color: "#9ca3af",
  lineHeight: 2,
  fontSize: "18px",
  marginBottom: "22px"
}

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "40px"
}

const featureCard = {
  display: "flex",
  gap: "18px",
  alignItems: "center",
  background: "rgba(17,24,39,0.72)",
  border: "1px solid rgba(168,85,247,0.15)",
  borderRadius: "24px",
  padding: "24px"
}

const featureImage = {
  width: "40px",
  height: "40px",
  objectFit: "contain"
}

const featureIcon = {
  fontSize: "32px"
}

const featureTitle = {
  fontSize: "20px",
  fontWeight: "800",
  marginBottom: "6px"
}

const featureText = {
  color: "#9ca3af"
}

const extraRight = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const panel = {
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  padding: "45px",
  borderRadius: "36px",
  background: "rgba(17,24,39,0.78)",
  border: "1px solid rgba(168,85,247,0.18)",
  overflow: "hidden"
}

const panelGlow = {
  position: "absolute",
  top: "-150px",
  right: "-100px",
  width: "350px",
  height: "350px",
  background: "rgba(168,85,247,0.14)",
  filter: "blur(120px)",
  borderRadius: "999px"
}

const panelTitle = {
  position: "relative",
  zIndex: 2,
  fontSize: "64px",
  fontWeight: "900",
  marginBottom: "20px",
  background: "linear-gradient(90deg,#ffffff,#d8b4fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const panelLine = {
  width: "100%",
  height: "1px",
  background: "rgba(168,85,247,0.20)",
  marginBottom: "30px"
}

const panelBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(168,85,247,0.12)",
  padding: "20px 24px",
  borderRadius: "20px",
  marginBottom: "18px"
}