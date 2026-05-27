// Guides.jsx

import { useState } from "react"
import { Link } from "react-router-dom"

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

import Livro from "../assets/livro.png"

export default function Guides() {

  const [tab, setTab] = useState("platforms")

  return (
    <div className="page">

      {/* BACKGROUND */}
      <div className="background"></div>
      <div className="overlay"></div>

      {/* NAVBAR */}
      <nav className="navbar">

<div className="navLinks">

  <Link to="/" className="navLink">
    Home
  </Link>

  <Link to="/guides" className="navLink">
    Guides
  </Link>

  <Link to="/streamers" className="navLink">
    Streamers
  </Link>

  <Link to="/about" className="navLink">
    About Us
  </Link>

</div>

        <div className="topLogoWrap">

          <img
            src="/xyntra.gif"
            alt=""
            className="topLogo"
          />

        </div>

      </nav>

      {/* HERO */}
      <div className="hero">

        <div className="heroGlow"></div>

        <div className="heroTop">

          <img
            src={Livro}
            alt=""
            className="heroLogo"
          />

          <div>

            <h1>
              Streamer Guides
            </h1>

            <p>
              Guias completos para streamers crescerem a sério
            </p>

          </div>

        </div>

      </div>

      {/* TABS */}
      <div className="tabs">

        <Tab
          icon={twitchLogo}
          label="Plataformas"
          active={tab === "platforms"}
          onClick={() => setTab("platforms")}
        />

        <Tab
          icon={obsLogo}
          label="OBS Setup"
          active={tab === "obs"}
          onClick={() => setTab("obs")}
        />

        <Tab
          icon={nightbotLogo}
          label="Bots"
          active={tab === "bots"}
          onClick={() => setTab("bots")}
        />

        <Tab
          icon={microphoneLogo}
          label="Áudio"
          active={tab === "audio"}
          onClick={() => setTab("audio")}
        />

        <Tab
          icon={growthLogo}
          label="Crescimento"
          active={tab === "growth"}
          onClick={() => setTab("growth")}
        />

      </div>

      {/* PANEL */}
      <div className="panel">

        {tab === "platforms" && (
          <div className="grid">

            <Card title="Twitch" icon={twitchLogo}>
              <Item>Melhor plataforma para gaming</Item>
              <Item>Raids ajudam crescimento</Item>
              <Item>Bits + subs monetização</Item>
              <Item>Comunidade muito ativa</Item>
              <Item>Categoria Minecraft enorme</Item>
              <Item>Chat rápido e interativo</Item>
              <Item>Extensões personalizadas</Item>
            </Card>

            <Card title="YouTube Live" icon={youtubeLogo}>
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

        {tab === "obs" && (
          <div className="grid">

            <Card title="Video Setup" icon={cameraLogo}>
              <Item>1080p 60fps recomendado</Item>
              <Item>NVENC melhor encoder</Item>
              <Item>Bitrate 6000+</Item>
              <Item>Game Capture recomendado</Item>
              <Item>Evitar dropped frames</Item>
              <Item>720p se PC fraco</Item>
              <Item>Usar canvas 1920x1080</Item>
            </Card>

            <Card title="Scenes" icon={monitorLogo}>
              <Item>Starting Soon</Item>
              <Item>Gameplay Scene</Item>
              <Item>Just Chatting</Item>
              <Item>Ending Stream</Item>
              <Item>Pause / BRB</Item>
              <Item>Fullscreen webcam</Item>
              <Item>Intermission</Item>
            </Card>

            <Card title="Performance" icon={cpuLogo}>
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

        {tab === "bots" && (
          <div className="grid">

            <Card title="Bots" icon={nightbotLogo}>
              <Item>Nightbot simples</Item>
              <Item>StreamElements completo</Item>
              <Item>Moobot leve</Item>
              <Item>Proteção spam automática</Item>
              <Item>Auto moderation</Item>
              <Item>Timers automáticos</Item>
              <Item>Giveaways fáceis</Item>
            </Card>

            <Card title="Comandos" icon={comandosLogo}>
              <Item>!discord</Item>
              <Item>!sens</Item>
              <Item>!setup</Item>
              <Item>!socials</Item>
              <Item>!commands</Item>
              <Item>!live</Item>
              <Item>!rank</Item>
            </Card>

            <Card title="Interação" icon={chatLogo}>
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

        {tab === "audio" && (
          <div className="grid">

            <Card title="Microfone" icon={microphoneLogo}>
              <Item>Noise suppression</Item>
              <Item>Compressor ativo</Item>
              <Item>Noise gate configurado</Item>
              <Item>Volume equilibrado</Item>
              <Item>Sem eco na sala</Item>
              <Item>Mic perto da boca</Item>
              <Item>Teste antes da live</Item>
            </Card>

            <Card title="Som" icon={somLogo}>
              <Item>Jogo mais baixo que voz</Item>
              <Item>Evitar clipping</Item>
              <Item>Música controlada</Item>
              <Item>Separate tracks OBS</Item>
              <Item>Headset recomendado</Item>
              <Item>EQ leve na voz</Item>
              <Item>Monitorizar áudio live</Item>
            </Card>

            <Card title="Setup Ideal" icon={fonesLogo}>
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

        {tab === "growth" && (
          <div className="grid">

            <Card title="Crescimento" icon={growthLogo}>
              <Item>Streams consistentes</Item>
              <Item>Horário fixo</Item>
              <Item>Falar SEMPRE</Item>
              <Item>Mesmo sem viewers</Item>
              <Item>Comunidade Discord</Item>
              <Item>Collabs ajudam muito</Item>
              <Item>Ser reconhecível</Item>
            </Card>

            <Card title="Conteúdo" icon={claqueteLogo}>
              <Item>TikTok todos dias</Item>
              <Item>Shorts YouTube</Item>
              <Item>Clips engraçados</Item>
              <Item>Momentos clutch</Item>
              <Item>Highlights stream</Item>
              <Item>Trending sounds</Item>
              <Item>Conteúdo curto viraliza</Item>
            </Card>

            <Card title="Mentalidade" icon={mentalidadeLogo}>
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

      <style>{`

        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family:Inter,system-ui;
          color:white;
          overflow-x:hidden;
        }

        .page{
          min-height:100vh;
          position:relative;
          padding:140px 35px 40px;
          max-width:1300px;
          margin:auto;
        }

        .background{
          position:fixed;
          inset:0;
          background-image:url('/ceu.png');
          background-size:cover;
          background-position:center;
          background-repeat:no-repeat;
          z-index:-3;
          transform:scale(1.05);
        }

        .overlay{
          position:fixed;
          inset:0;
          background:
          linear-gradient(
            to bottom,
            rgba(0,0,0,.45),
            rgba(7,11,23,.72)
          );
          z-index:-2;
        }

        .navbar{
          width:100%;
          height:100px;
          position:fixed;
          top:0;
          left:0;
          z-index:100;
          display:flex;
          align-items:center;
          padding:0 60px;
        }

        .navLinks{
          display:flex;
          gap:40px;
          align-items:center;
        }

        .navLink{
          text-decoration:none;
          color:#ffffff;
          font-weight:600;
          font-size:18px;
          letter-spacing:.5px;
        }

        .topLogoWrap{
          position:absolute;
          left:50%;
          top:12px;
          transform:translateX(-50%);
        }

        .topLogo{
          width:170px;
          object-fit:contain;

          filter:
          drop-shadow(0 0 30px rgba(255,255,255,.45));
        }

        .hero{
          position:relative;
          overflow:hidden;

          padding:35px;
          border-radius:35px;
          margin-bottom:30px;

          background:rgba(17,24,39,.55);

          border:1px solid rgba(255,255,255,.12);

          backdrop-filter:blur(18px);
        }

        .heroGlow{
          position:absolute;
          width:350px;
          height:350px;
          background:rgba(96,165,250,0.45);
          filter:blur(130px);
          opacity:.4;
          top:-120px;
          right:-120px;
          border-radius:50%;
        }

        .heroTop{
          display:flex;
          align-items:center;
          gap:20px;
          position:relative;
          z-index:2;
        }

        .heroLogo{
          width:90px;
          height:90px;
          object-fit:contain;
        }

        .hero h1{
          margin:0;
          font-size:50px;
          font-weight:900;
        }

        .hero p{
          margin-top:10px;
          color:#d1d5db;
          font-size:16px;
        }

        .tabs{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-bottom:24px;
        }

        .tab{
          display:flex;
          align-items:center;
          gap:12px;

          padding:14px 18px;

          border-radius:16px;

          border:1px solid rgba(255,255,255,.10);

          background:rgba(17,24,39,.7);

          color:white;

          font-weight:700;

          cursor:pointer;

          backdrop-filter:blur(10px);
        }

        .activeTab{
          background:
          linear-gradient(
            135deg,
            #2563eb,
            #3b82f6
          );
        }

        .panel{
          background:rgba(17,24,39,.68);

          border:1px solid rgba(255,255,255,.10);

          border-radius:30px;

          padding:22px;

          backdrop-filter:blur(16px);
        }

        .grid{
          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));

          gap:18px;
        }

        .card{
          background:rgba(11,18,32,.82);

          border:1px solid rgba(255,255,255,.08);

          border-radius:26px;

          padding:22px;

          backdrop-filter:blur(12px);
        }

        .cardHeader{
          display:flex;
          align-items:center;
          gap:14px;

          margin-bottom:18px;
        }

        .cardHeader h3{
          margin:0;
          font-size:20px;
        }

        .cardLogo{
          width:40px;
          height:40px;
          object-fit:contain;
        }

        .triple{
          display:flex;
          align-items:center;
          gap:4px;
        }

        .item{
          color:#d1d5db;
          margin:10px 0;
          font-size:15px;
        }

      `}</style>

    </div>
  )
}

function Tab({ label, active, onClick, icon }) {

  return (
    <button
      onClick={onClick}
      className={`tab ${active ? "activeTab" : ""}`}
    >
      <img
        src={icon}
        alt=""
        width="26"
      />

      <span>{label}</span>
    </button>
  )
}

function Card({
  title,
  children,
  icon,
  tripleIcons
}) {

  return (
    <div className="card">

      <div className="cardHeader">

        {icon && (
          <img
            src={icon}
            alt=""
            className="cardLogo"
          />
        )}

        {tripleIcons && (
          <div className="triple">

            <img src={tripleIcons[0]} alt="" width="58" />
            <img src={tripleIcons[1]} alt="" width="18" />
            <img src={tripleIcons[2]} alt="" width="38" />

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