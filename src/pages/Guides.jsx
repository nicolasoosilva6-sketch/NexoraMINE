export default function Guides() {
  return (
    <div style={page}>

      {/* HEADER */}
      <div style={header}>
        <h1>📘 Guias Completos de Streaming</h1>
        <p style={sub}>
          Tudo o que precisas para começares, configurando tudo como um streamer a sério
        </p>
      </div>

      {/* 1 PLATFORM */}
      <div style={card}>
        <h2>🌐 1. Plataformas de streaming</h2>

        <p>Estas são as principais plataformas onde podes fazer live:</p>

        <ul style={list}>
          <li><b>Twitch</b> — melhor para gaming e comunidade</li>
          <li><b>YouTube Live</b> — bom para crescer com vídeos + lives</li>
          <li><b>Kick</b> — menos concorrência, crescimento mais fácil</li>
        </ul>

        <p>
          👉 Recomendação: começa na Twitch.
        </p>
      </div>

      {/* 2 OBS */}
      <div style={card}>
        <h2>🎥 2. OBS Studio (setup completo)</h2>

        <p>O OBS é o programa principal para fazer streams.</p>

        <ul style={list}>
          <li>Download: obsproject.com</li>
          <li>Resolution: 1920x1080 ou 1280x720</li>
          <li>FPS: 60 se o PC aguentar</li>
          <li>Encoder: hardware (NVENC recomendado)</li>
          <li>Bitrate: 4500–6000</li>
        </ul>

        <p>
          🔥 Dica: usa “Game Capture” para jogos (mais leve e melhor qualidade).
        </p>
      </div>

      {/* 3 BOTS */}
      <div style={card}>
        <h2>🤖 3. Bots para chat (essencial)</h2>

        <p>Os bots ajudam a automatizar o chat e criar comandos.</p>

        <ul style={list}>
          <li><b>Nightbot</b> — simples e rápido</li>
          <li><b>StreamElements</b> — mais completo</li>
          <li><b>Moobot</b> — alternativo leve</li>
        </ul>

        <p>
          Usos:
        </p>

        <ul style={list}>
          <li>Comandos (!discord, !socials)</li>
          <li>Auto mensagens no chat</li>
          <li>Moderação automática</li>
        </ul>
      </div>

      {/* 4 OVERLAYS */}
      <div style={card}>
        <h2>🖼️ 4. Overlays (design da stream)</h2>

        <p>Overlays são o visual da tua stream.</p>

        <ul style={list}>
          <li><b>StreamElements</b> — overlays grátis</li>
          <li><b>OWN3D</b> — overlays premium</li>
          <li><b>Canva</b> — personalização simples</li>
        </ul>

        <p>
          🔥 Usa sempre overlays simples — não compliques.
        </p>
      </div>

      {/* 5 ALERTS */}
      <div style={card}>
        <h2>🔔 5. Alerts (seguidores / subs)</h2>

        <p>Alerts são as notificações na stream:</p>

        <ul style={list}>
          <li>Follow alert</li>
          <li>Donation alert</li>
          <li>Subscription alert</li>
        </ul>

        <p>
          Ferramentas:
        </p>

        <ul style={list}>
          <li>StreamElements (recomendado)</li>
          <li>Streamlabs</li>
        </ul>
      </div>

      {/* 6 AUDIO */}
      <div style={card}>
        <h2>🎤 6. Áudio (MUITO importante)</h2>

        <ul style={list}>
          <li>Microfone limpo (sem eco)</li>
          <li>Volume equilibrado com o jogo</li>
          <li>Evitar música demasiado alta</li>
        </ul>

        <p>
          ⚠️ Áudio mau destrói uma stream mesmo com bom conteúdo.
        </p>
      </div>

      {/* 7 CONTENT */}
      <div style={card}>
        <h2>📹 7. Conteúdo que funciona</h2>

        <ul style={list}>
          <li>Minecraft SMP / Survival</li>
          <li>Valorant competitivo</li>
          <li>Fortnite ranked</li>
          <li>Just Chatting (quando tiveres comunidade)</li>
        </ul>
      </div>

      {/* 8 GROWTH */}
      <div style={card}>
        <h2>📈 8. Como crescer a sério</h2>

        <ul style={list}>
          <li>3–5 streams por semana</li>
          <li>Clips para TikTok TODOS os dias</li>
          <li>Falar sempre na live</li>
          <li>Interagir com chat mesmo vazio</li>
        </ul>
      </div>

      {/* 9 TOOLS */}
      <div style={card}>
        <h2>🧰 9. Ferramentas úteis</h2>

        <ul style={list}>
          <li>OBS Studio — streaming</li>
          <li>StreamElements — overlays + alerts</li>
          <li>Nightbot — chat bot</li>
          <li>Canva — design</li>
          <li>CapCut — edição de clips</li>
        </ul>
      </div>

      {/* FINAL */}
      <div style={card}>
        <h2>💬 Final</h2>

        <p>
          Se seguires isto tudo, já estás acima de 90% dos novos streamers.
        </p>

        <p>
          O segredo não é sorte — é consistência.
        </p>
      </div>

      <div style={footer}>
        StreamLab PT • criado por Correia 🇵🇹
      </div>

    </div>
  )
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  background: "#0b0f19",
  color: "#e5e7eb",
  fontFamily: "system-ui",
  padding: "30px",
  maxWidth: "900px",
  margin: "0 auto"
}

const header = {
  marginBottom: 20,
  paddingBottom: 15,
  borderBottom: "1px solid #1f2937"
}

const sub = {
  color: "#9ca3af"
}

const card = {
  background: "#111827",
  padding: "18px",
  borderRadius: "16px",
  marginBottom: "12px"
}

const list = {
  paddingLeft: "20px",
  margin: 0,
  color: "#9ca3af",
  lineHeight: 1.8
}

const footer = {
  marginTop: 30,
  textAlign: "center",
  fontSize: 12,
  color: "#6b7280"
}