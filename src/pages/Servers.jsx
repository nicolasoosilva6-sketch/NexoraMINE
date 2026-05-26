import { useEffect, useState } from "react"
import minecraftLogo from "../assets/minecraft-logo.png"

const servers = [
  {
    name: "LusiadasCraft",
    ip: "mc.lusiadascraft.com",
    version: "1.21",
    gamemode: "Survival SMP",
    image: "https://api.mcsrvstat.us/icon/mc.lusiadascraft.com"
  },
  {
    name: "Hypixel",
    ip: "mc.hypixel.net",
    version: "1.21",
    gamemode: "BedWars & SkyWars",
    image: "https://api.mcsrvstat.us/icon/mc.hypixel.net"
  },
  {
    name: "Donut SMP",
    ip: "donutsmp.net",
    version: "1.21",
    gamemode: "SMP",
    image: "https://api.mcsrvstat.us/icon/donutsmp.net"
  },
  {
    name: "Hoplite",
    ip: "hoplite.gg",
    version: "1.21",
    gamemode: "Battle Royale",
    image: "https://api.mcsrvstat.us/icon/hoplite.gg"
  },
  {
    name: "ManaCube",
    ip: "play.manacube.com",
    version: "1.21",
    gamemode: "Survival & Parkour",
    image: "https://api.mcsrvstat.us/icon/play.manacube.com"
  },
  {
    name: "JartexNetwork",
    ip: "play.jartexnetwork.com",
    version: "1.21",
    gamemode: "Skyblock & Lifesteal",
    image: "https://api.mcsrvstat.us/icon/play.jartexnetwork.com"
  },
  {
    name: "PikaNetwork",
    ip: "play.pika-network.net",
    version: "1.21",
    gamemode: "Practice PvP",
    image: "https://api.mcsrvstat.us/icon/play.pika-network.net"
  },
  {
    name: "Complex Gaming",
    ip: "hub.mc-complex.com",
    version: "1.21",
    gamemode: "Pixelmon",
    image: "https://api.mcsrvstat.us/icon/hub.mc-complex.com"
  }
]

export default function Servers() {

  const [data, setData] = useState([])

  const copyIP = (ip) => {
    navigator.clipboard.writeText(ip)
    alert("IP copiado: " + ip)
  }

  async function getPlayers(ip) {

    try {

      const res = await fetch(
        `https://api.mcsrvstat.us/2/${ip}`
      )

      const json = await res.json()

      return {
        online: json.players?.online ?? 0,
        status: json.online ?? false
      }

    } catch {

      return {
        online: 0,
        status: false
      }

    }

  }

  useEffect(() => {

    async function load() {

      const updated = await Promise.all(

        servers.map(async (s) => {

          const info = await getPlayers(s.ip)

          return {
            ...s,
            players: info.online,
            status: info.status
          }

        })

      )

      setData(updated)

    }

    load()

    const interval = setInterval(load, 30000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="page">

      {/* BG */}
      <div className="bgGlow"></div>

      {/* HERO */}
      <div className="hero">

        <div className="heroGlow"></div>

        <div className="heroTop">

          <img
            src={minecraftLogo}
            alt=""
            className="heroLogo"
          />

          <div>

            <p className="mini">
              SERVIDORES
            </p>

            <h1>
              Servidores Minecraft
            </h1>

            <p className="subtitle">
              Descobre servidores Survival,
              SMP, PvP, Skyblock e muito mais.
            </p>

          </div>

        </div>

      </div>

      {/* GRID */}
      <div className="grid">

        {data.map((s, i) => (

          <div
            key={i}
            className="card"
          >

            <div className="cardGlow"></div>

            {/* TOP */}
            <div className="top">

              <div className="left">

                <div className="rank">
                  #{i + 1}
                </div>

                <img
                  src={s.image}
                  alt=""
                  className="serverIcon"
                />

              </div>

              <div
                className="status"
                style={{
                  background:
                    s.status
                      ? "#2563eb"
                      : "#ef4444"
                }}
              >
                {s.status
                  ? "ONLINE"
                  : "OFFLINE"}
              </div>

            </div>

            {/* INFO */}
            <div className="content">

              <h2>
                {s.name}
              </h2>

              <p className="gamemode">
                {s.gamemode}
              </p>

              <div className="infoBox">
                🌍 {s.ip}
              </div>

              <div className="infoBox">
                ⚡ {s.version}
              </div>

              <div className="infoBox">
                👥 {s.players} online
              </div>

              <button
                onClick={() => copyIP(s.ip)}
                className="copyBtn"
              >
                Copiar IP
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* CSS */}
      <style>{`

        body{
          margin:0;
          background:#070b14;
          color:white;
          font-family:Inter,system-ui;
        }

        .page{
          position:relative;
          min-height:100vh;
          padding:40px;
          overflow:hidden;
        }

        .bgGlow{
          position:absolute;
          width:700px;
          height:700px;
          background:rgba(37,99,235,.16);
          filter:blur(150px);
          top:-250px;
          right:-250px;
          border-radius:999px;
        }

        .hero{
          position:relative;
          overflow:hidden;

          background:
          linear-gradient(
            135deg,
            #0f172a,
            #111827
          );

          border:1px solid rgba(59,130,246,.18);

          border-radius:32px;

          padding:40px;

          margin-bottom:40px;
        }

        .heroGlow{
          position:absolute;

          width:400px;
          height:400px;

          background:rgba(59,130,246,.18);

          filter:blur(120px);

          right:-150px;
          top:-150px;
        }

        .heroTop{
          position:relative;
          z-index:2;

          display:flex;
          align-items:center;
          gap:24px;
        }

        .heroLogo{
          width:95px;
          height:95px;

          object-fit:cover;

          border-radius:24px;

          box-shadow:
          0 0 30px rgba(59,130,246,.28);
        }

        .mini{
          color:#60a5fa;
          font-weight:800;
          letter-spacing:2px;
          margin-bottom:10px;
        }

        .hero h1{
          margin:0;

          font-size:64px;
          font-weight:900;

          background:
          linear-gradient(
            90deg,
            #ffffff,
            #60a5fa
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .subtitle{
          color:#cbd5e1;
          margin-top:12px;
          max-width:700px;
          line-height:1.7;
          font-size:17px;
        }

        .grid{
          position:relative;
          z-index:2;

          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(430px,1fr));

          gap:34px;
        }

        .card{
          position:relative;
          overflow:hidden;

          background:
          linear-gradient(
            135deg,
            rgba(15,23,42,.95),
            rgba(17,24,39,.92)
          );

          border:
          1px solid rgba(59,130,246,.14);

          border-radius:30px;

          padding:28px;

          min-height:430px;

          transition:.28s;
        }

        .card:hover{
          transform:translateY(-6px);

          border-color:#60a5fa;

          box-shadow:
          0 0 35px rgba(59,130,246,.18);
        }

        .cardGlow{
          position:absolute;
          inset:0;

          background:
          linear-gradient(
            135deg,
            rgba(59,130,246,.10),
            transparent
          );

          opacity:0;
          transition:.3s;
        }

        .card:hover .cardGlow{
          opacity:1;
        }

        .top{
          position:relative;
          z-index:2;

          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-bottom:28px;
        }

        .left{
          display:flex;
          align-items:center;
          gap:16px;
        }

        .rank{
          width:48px;
          height:48px;

          border-radius:16px;

          background:
          linear-gradient(
            135deg,
            #2563eb,
            #60a5fa
          );

          display:flex;
          align-items:center;
          justify-content:center;

          font-weight:900;

          box-shadow:
          0 0 20px rgba(59,130,246,.28);
        }

        .serverIcon{
          width:82px;
          height:82px;

          image-rendering:pixelated;

          border-radius:18px;

          background:#0f172a;

          padding:10px;

          border:
          1px solid rgba(255,255,255,.05);
        }

        .status{
          padding:10px 16px;

          border-radius:999px;

          font-size:12px;
          font-weight:800;

          color:white;
        }

        .content{
          position:relative;
          z-index:2;
        }

        .content h2{
          margin:0;

          font-size:36px;
          font-weight:900;

          word-break:break-word;
        }

        .gamemode{
          color:#60a5fa;

          margin-top:10px;
          margin-bottom:24px;

          font-weight:700;

          font-size:15px;
        }

        .infoBox{
          background:#0f172a;

          border:
          1px solid rgba(255,255,255,.05);

          padding:16px;

          border-radius:18px;

          margin-bottom:14px;

          color:#e2e8f0;
        }

        .copyBtn{
          width:100%;

          margin-top:14px;

          border:none;

          padding:16px;

          border-radius:18px;

          font-weight:800;

          font-size:15px;

          cursor:pointer;

          color:white;

          background:
          linear-gradient(
            90deg,
            #2563eb,
            #60a5fa
          );

          transition:.25s;
        }

        .copyBtn:hover{
          transform:scale(1.02);

          box-shadow:
          0 0 24px rgba(59,130,246,.30);
        }

        @media(max-width:800px){

          .heroTop{
            flex-direction:column;
            text-align:center;
          }

          .hero h1{
            font-size:42px;
          }

          .grid{
            grid-template-columns:1fr;
          }

          .page{
            padding:20px;
          }

        }

      `}</style>

    </div>

  )

}