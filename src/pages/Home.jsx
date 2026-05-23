export default function Home() {
  return (
    <div style={page}>

      {/* HEADER */}
      <div style={header}>
        <h1 style={{ margin: 0, fontSize: 28 }}>
  🌌 Nexora
</h1>

<p style={{ marginTop: 6, color: "#9ca3af", fontSize: 14 }}>
  Plataforma portuguesa para ajudar streamers a crescer do zero
</p>

        <p style={{ marginTop: 6, color: "#9ca3af", fontSize: 14 }}>
          Criado por Correia • plataforma portuguesa de ajuda a streamers de Minecraft
        </p>
      </div>

      {/* INTRO LONGA */}
      <div style={card}>
        <h2>👋 Bem-vindo ao Nexora </h2>

        <p>
          O Nexora é uma plataforma criada com o objetivo de ajudar pessoas em Portugal
          a começarem no mundo do streaming de forma simples, direta e sem complicações.
        </p>

        <p>
          Aqui não existe informação confusa ou exagerada. Tudo foi pensado para quem está a começar
          do zero e precisa de um caminho claro para crescer no Twitch, YouTube ou Kick.
        </p>

        <p>
          Este projeto foi criado por mim, o <b>CorreiaMB</b>, com base na minha experiência e na
          observação de muitos streamers que começam sem saber o que fazer.
        </p>
      </div>

      {/* WHO I AM LONG */}
      <div style={card}>
        <h2>👤 Quem sou eu (CorreiaMB)</h2>

        <p>
          Eu sou o Correia, criador deste site. Sempre gostei de Minecraft, gaming e criação de conteúdo.
          Ao longo do tempo percebi que muitas pessoas em Portugal querem começar a streamar mas não sabem como.
        </p>

        <p>
          A maioria desiste cedo porque não tem orientação. Não sabem configurar OBS, não sabem o que fazer nas streams,
          nem como crescer. Foi por isso que decidi criar o Nexora.
        </p>

        <p>
          O meu objetivo não é só criar um site, mas sim criar uma comunidade onde qualquer pessoa pode aprender
          e melhorar sem precisar de experiência prévia.
        </p>

        <a href="https://www.twitch.tv/correiamb" style={btn}>
          🔴 Segue-me na Twitch
        </a>
      </div>

      {/* WHY SITE LONG */}
      <div style={card}>
        <h2>🎯 Porque este site existe</h2>

        <p>
          Começar a streamar pode parecer simples, mas na prática existem muitas dificuldades no início.
        </p>

        <p>
          A maior parte dos novos streamers não sabe:
          como configurar o OBS, como falar durante a live,
          como manter viewers ou como crescer de forma consistente.
        </p>

        <p>
          Este site existe exatamente para resolver isso. Em vez de perderes horas em vídeos aleatórios,
          aqui tens tudo organizado num só lugar.
        </p>

        <p>
          O objetivo é tornar o processo de aprendizagem mais rápido e mais fácil.
        </p>
      </div>

      {/* WHAT YOU FIND LONG */}
      <div style={card}>
        <h2>📦 O que vais encontrar aqui</h2>

        <p>
          O StreamLab PT está dividido em várias secções importantes que te ajudam em diferentes fases da tua jornada.
        </p>

        <p>
          Cada secção foi criada para ser simples de entender e prática de usar.
        </p>

        <ul style={{ color: "#9ca3af", lineHeight: 1.9 }}>
          <li>📘 Guias completos para começar a streamar</li>
          <li>🎮 Lista de streamers portugueses para inspiração</li>
          <li>⛏️ Servidores Minecraft ativos em Portugal</li>
          <li>📈 Dicas de crescimento reais e testadas</li>
          <li>💬 Informação sobre comunidade e interação</li>
          <li>🎥 Estratégias de conteúdo para redes sociais</li>
          <li>🧠 Mentalidade correta para não desistir cedo</li>
        </ul>
      </div>

      {/* IMPORTANCE GUIDES */}
      <div style={card}>
        <h2>📘 Porque deves ir aos Guias</h2>

        <p>
          A secção de Guias é a parte mais importante do site.
          É lá que está explicado tudo passo a passo.
        </p>

        <p>
          Se estás a começar, não saltes esta parte. É onde vais aprender:
          como configurar o OBS, como fazer a tua primeira stream e como evitar erros comuns.
        </p>

        <p>
          Tudo foi escrito de forma simples para qualquer pessoa conseguir entender.
        </p>

        {/* 🔥 AQUI FOI A MUDANÇA */}
        <a href="/guides" style={btn}>
          👉 Ir para Guias
        </a>
      </div>

      {/* STREAMING REALITY */}
      <div style={card}>
        <h2>📊 A realidade do streaming</h2>

        <p>
          Muitas pessoas pensam que vão começar a streamar e ter viewers rapidamente.
          Mas a realidade é diferente.
        </p>

        <p>
          No início vais ter 0, 1 ou 2 viewers. Isso é normal.
          O crescimento acontece com consistência e tempo.
        </p>

        <p>
          O mais importante não é ter viewers logo no início, mas sim aprender a melhorar cada stream.
        </p>

        <p>
          Todos os grandes streamers começaram exatamente assim.
        </p>
      </div>

      {/* FINAL MESSAGE */}
      <div style={card}>
        <h2>💬 Mensagem final</h2>

        <p>
          Se estás a ler isto, já estás no caminho certo.
          O mais difícil é começar — e isso já fizeste.
        </p>

        <p>
          Agora o próximo passo é simples: vai aos guias e começa a aprender passo a passo.
        </p>
      </div>

      {/* FOOTER */}
      <div style={footer}>
        StreamLab PT • criado por Correia 🇵🇹 • Twitch: correiamb
      </div>

    </div>
  )
}

/* =========================
   STYLES
========================= */

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
  borderBottom: "1px solid rgba(255,255,255,0.06)"
}

const card = {
  background: "#111827",
  padding: "18px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.06)",
  marginBottom: "14px",
  lineHeight: 1.8
}

const btn = {
  display: "inline-block",
  marginTop: "10px",
  background: "#2563eb",
  color: "white",
  padding: "10px 14px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700"
}

const footer = {
  marginTop: "30px",
  paddingTop: "15px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  fontSize: "12px",
  color: "#6b7280",
  textAlign: "center"
}