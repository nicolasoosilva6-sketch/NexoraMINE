import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="page">

      {/* BACKGROUND */}
      <div className="background"></div>
      <div className="overlay"></div>

      {/* NAVBAR */}
      <nav className="navbar">

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

    <a
      href="https://discord.gg/z2nU9tfC"
      target="_blank"
      rel="noreferrer"
      className="discordBtn"
    >
      Discord
    </a>

  </div>

  <div className="topLogoWrap">
    <img
      src="/xyntra.gif"
      className="topLogo"
      alt="logo"
    />
  </div>

</nav>

      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroBox">
          <h1>About Xyntra</h1>
          <p>
            A platform built to help streamers grow, learn and create better content.
            From beginners to advanced creators.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">

        <div className="statCard">
          <h2>🎯 Focus</h2>
          <p>Streamer growth & content creation</p>
        </div>

        <div className="statCard">
          <h2>⚡ Style</h2>
          <p>Modern, clean & cinematic design</p>
        </div>

        <div className="statCard">
          <h2>🚀 Goal</h2>
          <p>Help small creators become big creators</p>
        </div>

        <div className="statCard">
          <h2>🌍 Community</h2>
          <p>Gaming, Minecraft & content creators</p>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="featureCard">
          <h2>📚 What we provide</h2>
          <ul>
            <li>Streaming guides (OBS, bots, setup)</li>
            <li>Content creation tips</li>
            <li>Minecraft & gaming inspiration</li>
            <li>Growth strategies</li>
            <li>Social media tips (TikTok / Shorts)</li>
          </ul>
        </div>

        <div className="featureCard">
          <h2>🎥 Creator tools</h2>
          <ul>
            <li>OBS configuration help</li>
            <li>Audio & mic setup guides</li>
            <li>Scene ideas for streams</li>
            <li>Chat bot commands</li>
            <li>Overlay & branding ideas</li>
          </ul>
        </div>

        <div className="featureCard">
          <h2>📈 Growth system</h2>
          <ul>
            <li>Consistency planning</li>
            <li>Content scheduling</li>
            <li>Viral clip strategies</li>
            <li>Community building</li>
            <li>Audience engagement tips</li>
          </ul>
        </div>

      </section>

      {/* ROADMAP */}
      <section className="roadmap">

        <h2>🛠 Roadmap</h2>

        <div className="roadmapGrid">

          <div className="roadItem">✔ Guides system</div>
          <div className="roadItem">✔ Streamers page</div>
          <div className="roadItem">✔ About page</div>

          <div className="roadItem">⏳ Dashboard system</div>
          <div className="roadItem">⏳ User accounts</div>
          <div className="roadItem">⏳ Login system</div>
          <div className="roadItem">⏳ Profile page</div>
          <div className="roadItem">⏳ Avatar system</div>
          <div className="roadItem">⏳ Community posts</div>
          <div className="roadItem">⏳ Stream tools</div>

        </div>

      </section>

      {/* STYLE */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Inter, system-ui;
          color: white;
        }

        .page {
          min-height: 100vh;
          padding: 140px 40px;
          max-width: 1300px;
          margin: auto;
        }

        .background {
          position: fixed;
          inset: 0;
          background-image: url('/ceu.png');
          background-size: cover;
          background-position: center;
          z-index: -3;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,.55), rgba(7,11,23,.85));
          z-index: -2;
        }

.navbar{
  width:100%;
  height:80px;

  position:fixed;
  top:0;
  left:0;

  z-index:100;

  display:flex;
  align-items:center;
  justify-content:space-between;

  padding:0 40px;
}

.navLinks{
  display:flex;
  gap:20px;
  align-items:center;
}

.navLink{
  color:white;
  text-decoration:none;
  font-weight:600;

  padding:8px 12px;

  border-radius:10px;

  background:rgba(255,255,255,0.06);

  transition:.2s;
}

.navLink:hover{
  background:rgba(255,255,255,0.12);
}

.discordBtn{
  color:white;
  text-decoration:none;
  font-weight:700;

  padding:8px 14px;

  border-radius:12px;

  background:
  linear-gradient(
    135deg,
    #5865F2,
    #3b4bff
  );

  box-shadow:
  0 0 20px rgba(88,101,242,.35);
}

.topLogoWrap{
  position:absolute;
  right:40px;
  top:50%;

  transform:translateY(-50%);
}

.topLogo{
  height:45px;
  object-fit:contain;

  filter:
  drop-shadow(0 0 18px rgba(255,255,255,.35));
}

        .hero {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .heroBox {
          background: rgba(17,24,39,.6);
          border: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(16px);
          padding: 60px;
          border-radius: 30px;
          text-align: center;
          max-width: 900px;
        }

        .heroBox h1 {
          font-size: 60px;
          margin: 0;
        }

        .heroBox p {
          margin-top: 15px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .statCard {
          background: rgba(17,24,39,.6);
          border: 1px solid rgba(255,255,255,.1);
          padding: 25px;
          border-radius: 20px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .featureCard {
          background: rgba(17,24,39,.6);
          border: 1px solid rgba(255,255,255,.1);
          padding: 25px;
          border-radius: 20px;
        }

        .featureCard ul {
          padding-left: 18px;
          color: #cbd5e1;
        }

        .roadmap {
          text-align: center;
        }

        .roadmapGrid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
          gap: 15px;
        }

        .roadItem {
          background: rgba(17,24,39,.6);
          padding: 15px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,.1);
        }

      `}</style>

    </div>
  )
}