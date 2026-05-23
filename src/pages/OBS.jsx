export default function OBSGuide() {
  return (
    <div style={page}>

      {/* HEADER */}
      <div style={header}>
        <h1>🎥 Guia Completo OBS Studio</h1>
        <p style={sub}>
          Tudo o que precisas para configurar uma stream profissional do zero
        </p>
      </div>

      {/* INTRO */}
      <div style={card}>
        <h2>👋 O que é o OBS?</h2>
        <p>
          O OBS Studio é o programa mais usado no mundo para fazer streams.
          Permite transmitir para Twitch, YouTube e Kick.
        </p>
      </div>

      {/* STREAM KEY */}
      <div style={card}>
        <h2>🔑 1. Como pegar a Stream Key (Twitch)</h2>

        <p>Segue estes passos:</p>

        <ul style={list}>
          <li>Vai a twitch.tv e faz login</li>
          <li>Abre o Creator Dashboard</li>
          <li>Clica em “Settings”</li>
          <li>Vai a “Stream”</li>
          <li>Copia a “Stream Key”</li>
        </ul>

        <p>
          ⚠️ Nunca partilhes a tua Stream Key com ninguém.
        </p>
      </div>

      {/* OBS INSTALL */}
      <div style={card}>
        <h2>💻 2. Instalar OBS</h2>

        <ul style={list}>
          <li>Vai a obsproject.com</li>
          <li>Faz download para Windows/Mac</li>
          <li>Instala normalmente</li>
          <li>Abre o programa</li>
        </ul>
      </div>

      {/* INITIAL SETUP */}
      <div style={card}>
        <h2>⚙️ 3. Configuração inicial</h2>

        <ul style={list}>
          <li>Optimize for streaming</li>
          <li>Resolução: 1920x1080 ou 1280x720</li>
          <li>FPS: 60 (ou 30 se PC fraco)</li>
          <li>Encoder: Hardware (NVENC se tiveres NVIDIA)</li>
        </ul>
      </div>

      {/* SCENES */}
      <div style={card}>
        <h2>🎬 4. Cenas no OBS</h2>

        <p>Cria estas cenas básicas:</p>

        <ul style={list}>
          <li>🎮 Gameplay</li>
          <li>📷 Just Chatting</li>
          <li>⏳ Starting Soon</li>
          <li>🔴 BRB (afk)</li>
        </ul>
      </div>

      {/* SOURCES */}
      <div style={card}>
        <h2>🖼️ 5. Fontes (Sources)</h2>

        <p>Estas são as coisas que aparecem na stream:</p>

        <ul style={list}>
          <li>Game Capture (jogo)</li>
          <li>Display Capture (ecrã)</li>
          <li>Image (logo / overlays)</li>
          <li>Text (nome do streamer)</li>
        </ul>
      </div>

      {/* MICROPHONE */}
      <div style={card}>
        <h2>🎤 6. Microfone (Áudio)</h2>

        <ul style={list}>
          <li>Usa microfone separado se possível</li>
          <li>Evita eco no quarto</li>
          <li>Mantém volume equilibrado com o jogo</li>
          <li>Testa áudio antes de ir live</li>
        </ul>

        <p>
          🔥 Áudio bom é mais importante que qualidade de vídeo.
        </p>
      </div>

      {/* ALERTS */}
      <div style={card}>
        <h2>🔔 7. Alerts (seguidores e subs)</h2>

        <p>Alerts são notificações na stream quando alguém interage.</p>

        <ul style={list}>
          <li>Follow alert</li>
          <li>Sub alert</li>
          <li>Donation alert</li>
        </ul>

        <p>Ferramentas recomendadas:</p>

        <ul style={list}>
          <li>StreamElements (recomendado)</li>
          <li>Streamlabs</li>
        </ul>
      </div>

      {/* OVERLAYS */}
      <div style={card}>
        <h2>🖼️ 8. Overlays (design da stream)</h2>

        <ul style={list}>
          <li>StreamElements (grátis)</li>
          <li>OWN3D (premium)</li>
          <li>Canva (personalização)</li>
        </ul>

        <p>
          🔥 Usa overlays simples — não compliques o layout.
        </p>
      </div>

      {/* AUDIO SETTINGS */}
      <div style={card}>
        <h2>🎧 9. Configurações de áudio no OBS</h2>

        <ul style={list}>
          <li>Mic/Aux ativo</li>
          <li>Game sound separado</li>
          <li>Evitar música demasiado alta</li>
          <li>Teste de volume antes de live</li>
        </ul>
      </div>

      {/* BITRATE */}
      <div style={card}>
        <h2>📊 10. Qualidade da stream</h2>

        <ul style={list}>
          <li>Bitrate: 4500–6000</li>
          <li>720p se PC fraco</li>
          <li>1080p se PC forte</li>
          <li>60 FPS ideal</li>
        </ul>
      </div>

      {/* ERRORS */}
      <div style={card}>
        <h2>❌ 11. Erros comuns</h2>

        <ul style={list}>
          <li>Stream lagada por bitrate alto</li>
          <li>Microfone com eco</li>
          <li>Esquecer stream key</li>
          <li>Não testar antes de live</li>
        </ul>
      </div>

      {/* FINAL */}
      <div style={card}>
        <h2>💬 Final</h2>

        <p>
          Se configurares tudo isto corretamente, já tens setup de streamer profissional.
        </p>

        <p>
          Agora o mais importante é: começar a streamar.
        </p>
      </div>

      {/* FOOTER */}
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