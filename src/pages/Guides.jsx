import { useState } from "react"

export default function Guides() {
  const [tab, setTab] = useState("platforms")

  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
        <h1> Streamer Control Panel</h1>
        <p>Dashboard completo para crescimento real no streaming</p>
      </div>

      {/* NAV TABS */}
      <div className="tabs">
        <Tab label="🌐 Plataformas" active={tab==="platforms"} onClick={()=>setTab("platforms")} />
        <Tab label="🎥 OBS Setup" active={tab==="obs"} onClick={()=>setTab("obs")} />
        <Tab label="🤖 Bots" active={tab==="bots"} onClick={()=>setTab("bots")} />
        <Tab label="🎤 Áudio" active={tab==="audio"} onClick={()=>setTab("audio")} />
        <Tab label="📈 Crescimento" active={tab==="growth"} onClick={()=>setTab("growth")} />
      </div>

      {/* CONTENT */}
      <div className="panel">

        {/* PLATAFORMAS */}
        {tab === "platforms" && (
          <div className="grid">

            <Card title="Twitch">
              <Item>Streaming principal gaming</Item>
              <Item>Subs + Bits monetização</Item>
              <Item>Chat ativo em tempo real</Item>
              <Item>Raid + community growth</Item>
              <Item>Emotes personalizados</Item>
              <Item>Extensões interativas</Item>
              <Item>Categoria Minecraft forte</Item>
            </Card>

            <Card title="YouTube Live">
              <Item>Long-term growth</Item>
              <Item>Integra Shorts + vídeos</Item>
              <Item>SEO ajuda descoberta</Item>
              <Item>Lives ficam gravadas</Item>
              <Item>Monetização ads</Item>
              <Item>Comunidade estável</Item>
              <Item>Ideal para conteúdo híbrido</Item>
            </Card>

            <Card title="Kick / TikTok / Outros">
              <Item>Kick: menos concorrência</Item>
              <Item>TikTok: crescimento viral</Item>
              <Item>Facebook Gaming: nicho casual</Item>
              <Item>Trovo: público gaming</Item>
              <Item>Restream: multi-stream</Item>
              <Item>OBS multi output</Item>
              <Item>Expande alcance global</Item>
            </Card>

          </div>
        )}

        {/* OBS */}
        {tab === "obs" && (
          <div className="grid">

            <Card title="Video Setup">
              <Item>1080p 60fps ideal</Item>
              <Item>720p se PC fraco</Item>
              <Item>Bitrate 6000–8000</Item>
              <Item>Encoder NVENC (NVIDIA)</Item>
              <Item>FPS constante sem drops</Item>
              <Item>Game Capture recomendado</Item>
              <Item>Scenes organizadas</Item>
            </Card>

            <Card title="Scenes (Essencial)">
              <Item>Starting Soon</Item>
              <Item>Live Scene</Item>
              <Item>BRB (afk)</Item>
              <Item>Ending Screen</Item>
              <Item>Just Chatting</Item>
              <Item>Game Scene</Item>
              <Item>Intermission</Item>
            </Card>

            <Card title="Performance">
              <Item>CPU load controlado</Item>
              <Item>Evitar browser sources pesadas</Item>
              <Item>Reduz overlays pesados</Item>
              <Item>Teste antes de live</Item>
              <Item>Monitorização FPS</Item>
              <Item>Audio sync correto</Item>
              <Item>Stable bitrate</Item>
            </Card>

          </div>
        )}

        {/* BOTS */}
        {tab === "bots" && (
          <div className="grid">

            <Card title="Bots principais">
              <Item>Nightbot simples</Item>
              <Item>StreamElements completo</Item>
              <Item>Moobot leve</Item>
              <Item>Moderação automática</Item>
              <Item>Spam protection</Item>
              <Item>Timers automáticos</Item>
              <Item>Chat commands</Item>
            </Card>

            <Card title="Comandos úteis">
              <Item>!discord</Item>
              <Item>!socials</Item>
              <Item>!live</Item>
              <Item>!setup</Item>
              <Item>!sens</Item>
              <Item>!rank</Item>
              <Item>!commands</Item>
            </Card>

            <Card title="Engagement">
              <Item>Polls no chat</Item>
              <Item>Giveaways automáticos</Item>
              <Item>Alerts no chat</Item>
              <Item>Auto messages</Item>
              <Item>Viewer interaction</Item>
              <Item>Cooldown commands</Item>
              <Item>Community events</Item>
            </Card>

          </div>
        )}

        {/* AUDIO */}
        {tab === "audio" && (
          <div className="grid">

            <Card title="Microfone">
              <Item>Noise suppression</Item>
              <Item>Compressor ativo</Item>
              <Item>Noise gate setup</Item>
              <Item>Gain equilibrado</Item>
              <Item>Sem eco na sala</Item>
              <Item>Mic cardioid recomendado</Item>
              <Item>Teste antes de live</Item>
            </Card>

            <Card title="Mix de som">
              <Item>Game volume mais baixo</Item>
              <Item>Voice prioridade</Item>
              <Item>Music controlada</Item>
              <Item>No clipping audio</Item>
              <Item>Separate tracks OBS</Item>
              <Item>EQ leve na voz</Item>
              <Item>Monitoramento headset</Item>
            </Card>

          </div>
        )}

        {/* GROWTH */}
        {tab === "growth" && (
          <div className="grid">

            <Card title="Conteúdo diário">
              <Item>TikTok clips todos os dias</Item>
              <Item>YouTube Shorts</Item>
              <Item>Clips engraçados</Item>
              <Item>Momentos clutch</Item>
              <Item>Highlights da live</Item>
              <Item>Trending sounds</Item>
              <Item>Consistency total</Item>
            </Card>

            <Card title="Estratégia real">
              <Item>3–6 streams por semana</Item>
              <Item>Horários fixos</Item>
              <Item>Interagir SEMPRE</Item>
              <Item>Collabs com outros streamers</Item>
              <Item>Comunidade Discord</Item>
              <Item>Reutilizar conteúdo</Item>
              <Item>Não parar mesmo sem viewers</Item>
            </Card>

          </div>
        )}

      </div>

      {/* STYLE */}
      <style>{`
        body {
          margin: 0;
          background: #0b0f19;
          color: white;
          font-family: system-ui;
        }

        .page {
          max-width: 1100px;
          margin: auto;
          padding: 30px;
        }

        .header h1 {
          font-size: 34px;
          background: linear-gradient(90deg,#a855f7,#3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tabs {
          display: flex;
          gap: 10px;
          margin: 20px 0;
          flex-wrap: wrap;
        }

        .tabs button {
          background: #111827;
          color: white;
          border: 1px solid #2b2f3a;
          padding: 10px 14px;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.2s;
        }

        .tabs button:hover {
          transform: translateY(-2px);
          border-color: #a855f7;
        }

        .panel {
          background: #111827;
          padding: 16px;
          border-radius: 16px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }

        .card {
          background: #0b0f19;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid #1f2937;
          transition: 0.2s;
        }

        .card:hover {
          transform: scale(1.02);
          border-color: #3b82f6;
        }

        .item {
          color: #9ca3af;
          font-size: 13px;
          margin: 4px 0;
        }
      `}</style>

    </div>
  )
}

/* COMPONENTS */

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? "#a855f7" : "#111827",
        borderColor: active ? "#a855f7" : "#2b2f3a"
      }}
    >
      {label}
    </button>
  )
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

function Item({ children }) {
  return <div className="item">• {children}</div>
}