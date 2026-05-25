import { useState } from "react"

import twitchLogo from "../assets/twitch-logo.png"
import obsLogo from "../assets/obs-logo.png"
import nightbotLogo from "../assets/nightbot-logo.png"
import microphoneLogo from "../assets/microphone-logo.png"
import growthLogo from "../assets/crescimento-logo.png"

import youtubeLogo from "../assets/youtube-logo.png"
import tiktokLogo from "../assets/tiktok-logo.png"
import kickLogo from "../assets/kick-logo.png"
import barraLogo from "../assets/barra-logo.png"

import cameraLogo from "../assets/camera-logo.png"
import monitorLogo from "../assets/monitor-logo.png"
import cpuLogo from "../assets/cpu-logo.png"

import comandosLogo from "../assets/comandos-logo.png"
import chatLogo from "../assets/chat-logo.png"

import somLogo from "../assets/som-logo.png"
import fonesLogo from "../assets/fones-logo.png"
import mentalidadeLogo from "../assets/mentalidade-logo.png"
import claqueteLogo from "../assets/claquete-logo.png"

export default function Guides() {
  const [tab, setTab] = useState("platforms")

  return (
    <div className="page">

{/* HERO */}
<div className="hero">

  <div className="heroGlow"></div>

  <div className="heroTop">

    <img
      src="/nexora2.png"
      alt="Nexora"
      className="heroLogo"
    />

<div className="heroText">

  <h1>
    Streamer Control Panel
  </h1>

  <p>
    Dashboard completo para streamers crescerem a sério
  </p>

</div>
  </div>

</div>

      {/* TABS */}
      <div className="tabs">

        <Tab
          icon={twitchLogo}
          type="twitch"
          label="Plataformas"
          active={tab === "platforms"}
          onClick={() => setTab("platforms")}
        />

        <Tab
          icon={obsLogo}
          type="obs"
          label="OBS Setup"
          active={tab === "obs"}
          onClick={() => setTab("obs")}
        />

        <Tab
          icon={nightbotLogo}
          type="nightbot"
          label="Bots"
          active={tab === "bots"}
          onClick={() => setTab("bots")}
        />

        <Tab
          icon={microphoneLogo}
          type="mic"
          label="Áudio"
          active={tab === "audio"}
          onClick={() => setTab("audio")}
        />

        <Tab
          icon={growthLogo}
          type="growth"
          label="Crescimento"
          active={tab === "growth"}
          onClick={() => setTab("growth")}
        />

      </div>

      {/* PANEL */}
      <div className="panel">

        {/* PLATFORMS */}
        {tab === "platforms" && (
          <div className="grid">

            <Card
              title="Twitch"
              icon={twitchLogo}
              iconSize={40}
            >
              <Item>Melhor plataforma para gaming</Item>
              <Item>Raids ajudam crescimento</Item>
              <Item>Bits + subs monetização</Item>
              <Item>Comunidade muito ativa</Item>
              <Item>Categoria Minecraft enorme</Item>
              <Item>Chat rápido e interativo</Item>
              <Item>Extensões personalizadas</Item>
            </Card>

            <Card
              title="YouTube Live"
              icon={youtubeLogo}
              iconSize={40}
            >
              <Item>Lives ficam gravadas</Item>
              <Item>SEO ajuda descoberta</Item>
              <Item>Integra vídeos + shorts</Item>
              <Item>Maior crescimento longo prazo</Item>
              <Item>Monetização por ads</Item>
              <Item>Mais fácil aparecer pesquisa</Item>
              <Item>Ideal conteúdo híbrido</Item>
            </Card>

            <Card
              title="Kick / TikTok"
              tripleIcons={[kickLogo, barraLogo, tiktokLogo]}
              tripleSizes={[70, 20, 42]}
            >
              <Item>Kick paga melhor creators</Item>
              <Item>Menos concorrência</Item>
              <Item>TikTok viraliza rápido</Item>
              <Item>Clips ajudam crescer</Item>
              <Item>Lives mobile simples</Item>
              <Item>Ideal para audiência nova</Item>
              <Item>Conteúdo curto funciona bem</Item>
            </Card>

          </div>
        )}

        {/* OBS */}
        {tab === "obs" && (
          <div className="grid">

            <Card
              title="Video Setup"
              icon={cameraLogo}
              iconSize={42}
            >
              <Item>1080p 60fps recomendado</Item>
              <Item>NVENC melhor encoder</Item>
              <Item>Bitrate 6000+</Item>
              <Item>Game Capture recomendado</Item>
              <Item>Evitar dropped frames</Item>
              <Item>720p se PC fraco</Item>
              <Item>Usar canvas 1920x1080</Item>
            </Card>

            <Card
              title="Scenes"
              icon={monitorLogo}
              iconSize={42}
            >
              <Item>Starting Soon</Item>
              <Item>Gameplay Scene</Item>
              <Item>Just Chatting</Item>
              <Item>Ending Stream</Item>
              <Item>Pause / BRB</Item>
              <Item>Fullscreen webcam</Item>
              <Item>Intermission</Item>
            </Card>

            <Card
              title="Performance"
              icon={cpuLogo}
              iconSize={42}
            >
              <Item>Fechar apps pesadas</Item>
              <Item>Não usar overlays excessivas</Item>
              <Item>Monitorizar CPU usage</Item>
              <Item>Testar stream antes</Item>
              <Item>Internet estável importante</Item>
              <Item>Evitar browser sources demais</Item>
              <Item>Atualizar drivers GPU</Item>
            </Card>

          </div>
        )}

        {/* BOTS */}
        {tab === "bots" && (
          <div className="grid">

            <Card
              title="Bots"
              icon={nightbotLogo}
              iconSize={42}
            >
              <Item>Nightbot simples</Item>
              <Item>StreamElements completo</Item>
              <Item>Moobot leve</Item>
              <Item>Proteção spam automática</Item>
              <Item>Auto moderation</Item>
              <Item>Timers automáticos</Item>
              <Item>Giveaways fáceis</Item>
            </Card>

            <Card
              title="Comandos"
              icon={comandosLogo}
              iconSize={42}
            >
              <Item>!discord</Item>
              <Item>!sens</Item>
              <Item>!setup</Item>
              <Item>!socials</Item>
              <Item>!commands</Item>
              <Item>!live</Item>
              <Item>!rank</Item>
            </Card>

            <Card
              title="Interação"
              icon={chatLogo}
              iconSize={42}
            >
              <Item>Polls no chat</Item>
              <Item>Giveaways viewers</Item>
              <Item>Mensagens automáticas</Item>
              <Item>Interação constante</Item>
              <Item>Mini jogos no chat</Item>
              <Item>Viewer points</Item>
              <Item>Eventos especiais</Item>
            </Card>

          </div>
        )}

        {/* AUDIO */}
        {tab === "audio" && (
          <div className="grid">

            <Card
              title="Microfone"
              icon={microphoneLogo}
              iconSize={42}
            >
              <Item>Noise suppression</Item>
              <Item>Compressor ativo</Item>
              <Item>Noise gate configurado</Item>
              <Item>Volume equilibrado</Item>
              <Item>Sem eco na sala</Item>
              <Item>Mic perto da boca</Item>
              <Item>Teste antes da live</Item>
            </Card>

            <Card
              title="Som"
              icon={somLogo}
              iconSize={42}
            >
              <Item>Jogo mais baixo que voz</Item>
              <Item>Evitar clipping</Item>
              <Item>Música controlada</Item>
              <Item>Separate tracks OBS</Item>
              <Item>Headset recomendado</Item>
              <Item>EQ leve na voz</Item>
              <Item>Monitorizar áudio live</Item>
            </Card>

            <Card
              title="Setup Ideal"
              icon={fonesLogo}
              iconSize={42}
            >
              <Item>Headphones fechados</Item>
              <Item>Mic cardioid</Item>
              <Item>Braço articulado</Item>
              <Item>Filtro anti-pop</Item>
              <Item>Room treatment básico</Item>
              <Item>Ganhos equilibrados</Item>
              <Item>Evitar ventiladores altos</Item>
            </Card>

          </div>
        )}

{/* GROWTH */}
{tab === "growth" && (
  <div className="grid">

    <Card
      title="Crescimento"
      icon={growthLogo}
      iconSize={42}
    >
      <Item>Streams consistentes</Item>
      <Item>Horário fixo</Item>
      <Item>Falar SEMPRE</Item>
      <Item>Mesmo sem viewers</Item>
      <Item>Comunidade Discord</Item>
      <Item>Collabs ajudam muito</Item>
      <Item>Ser reconhecível</Item>
    </Card>

    <Card
      title="Conteúdo"
      icon={claqueteLogo}
      iconSize={72}
    >
      <Item>TikTok todos dias</Item>
      <Item>Shorts YouTube</Item>
      <Item>Clips engraçados</Item>
      <Item>Momentos clutch</Item>
      <Item>Highlights stream</Item>
      <Item>Trending sounds</Item>
      <Item>Conteúdo curto viraliza</Item>
    </Card>

    <Card
      title="Mentalidade"
      icon={mentalidadeLogo}
      iconSize={52}
    >
      <Item>Não desistir cedo</Item>
      <Item>Consistência ganha</Item>
      <Item>Aprender sempre</Item>
      <Item>Melhorar setup aos poucos</Item>
      <Item>Comparar menos</Item>
      <Item>Focar comunidade</Item>
      <Item>Divertir enquanto streama</Item>
    </Card>

  </div>
)}

      </div>

      {/* CSS */}
      <style>{`

        body{
          margin:0;
          background:#070b17;
          color:white;
          font-family:Inter,system-ui;
        }

        .page{
          max-width:1150px;
          margin:auto;
          padding:35px;
.heroGlow{
  position:absolute;
  width:300px;
  height:300px;
  background:#a855f7;
  filter:blur(120px);
  opacity:0.2;
  top:-100px;
  right:-100px;
}

.heroText{
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.heroTop{
  display:flex;
  align-items:flex-start;
  gap:16px;
  position:relative;
  z-index:2;
  margin-bottom:18px;
}

.heroLogo{
  width:68px;
  height:68px;
  object-fit:contain;
  filter:drop-shadow(0 0 12px rgba(168,85,247,0.35));
  margin-top:-6px;
  margin-left:10px;
  flex-shrink:0;
}

.hero h1{
  margin:0;
  font-size:42px;
  font-weight:900;
  background:linear-gradient(90deg,#a855f7,#3b82f6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

        .hero p{
          color:#9ca3af;
          margin-top:10px;
          font-size:15px;
        }

        .tabs{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          margin-bottom:20px;
        }

        .tab{
          display:flex;
          align-items:center;
          gap:12px;
          background:#111827;
          border:1px solid #1f2937;
          padding:12px 18px;
          border-radius:14px;
          cursor:pointer;
          transition:0.25s;
          color:white;
          font-weight:600;
        }

        .tab:hover{
          transform:translateY(-3px);
          border-color:#a855f7;
          box-shadow:0 0 20px rgba(168,85,247,0.3);
        }

        .activeTab{
          background:#a855f7;
          border-color:#a855f7;
        }

        .tab img{
          object-fit:contain;
        }

        .tab.twitch img{
          width:34px;
          height:34px;
        }

        .tab.nightbot img{
          width:36px;
          height:36px;
        }

        .tab.obs img{
          width:24px;
          height:24px;
        }

        .tab.mic img{
          width:24px;
          height:24px;
        }

        .tab.growth img{
          width:28px;
          height:28px;
        }

        .panel{
          background:#111827;
          border:1px solid #1f2937;
          padding:18px;
          border-radius:24px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:14px;
        }

        .card{
          background:#0b1220;
          border:1px solid #1f2937;
          border-radius:20px;
          padding:18px;
          transition:0.25s;
          position:relative;
          overflow:hidden;
        }

        .card::before{
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,rgba(168,85,247,.12),transparent);
          opacity:0;
          transition:0.3s;
        }

        .card:hover::before{
          opacity:1;
        }

        .card:hover{
          transform:translateY(-4px);
          border-color:#3b82f6;
          box-shadow:0 0 25px rgba(59,130,246,.15);
        }

        .cardHeader{
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:14px;
        }

        .cardLogo{
          object-fit:contain;
        }

        .card h3{
          margin:0;
          font-size:18px;
        }

        .item{
          color:#9ca3af;
          margin:8px 0;
          font-size:14px;
          transition:0.2s;
        }

        .item:hover{
          color:white;
          transform:translateX(4px);
        }

      `}</style>

    </div>
  )
}

/* COMPONENTS */

function Tab({ label, active, onClick, icon, type }) {
  return (
    <button
      onClick={onClick}
      className={`tab ${active ? "activeTab" : ""} ${type}`}
    >
      <img src={icon} alt="" />
      <span>{label}</span>
    </button>
  )
}

function Card({
  title,
  children,
  icon,
  tripleIcons,
  iconSize = 30,
  tripleSizes = [30, 30, 30]
}) {
  return (
    <div className="card">

      <div className="cardHeader">

        {icon && (
          <img
            src={icon}
            alt=""
            className="cardLogo"
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              objectFit: "contain"
            }}
          />
        )}

        {tripleIcons && (
          <div
            className="tripleLogos"
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >

            <img
              src={tripleIcons[0]}
              alt=""
              style={{
                width: tripleSizes[0],
                height: tripleSizes[0],
                objectFit: "contain",
                marginRight: "-8px"
              }}
            />

            <img
              src={tripleIcons[1]}
              alt=""
              style={{
                width: tripleSizes[1],
                height: tripleSizes[1],
                objectFit: "contain",
                marginLeft: "-8px",
                marginRight: "-8px"
              }}
            />

            <img
              src={tripleIcons[2]}
              alt=""
              style={{
                width: tripleSizes[2],
                height: tripleSizes[2],
                objectFit: "contain",
                marginLeft: "7px"
              }}
            />

          </div>
        )}

        <h3>{title}</h3>

      </div>

      {children}

    </div>
  )
}

function Item({ children }) {
  return (
    <div className="item">
      • {children}
    </div>
  )
}