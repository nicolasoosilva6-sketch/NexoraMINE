import { useEffect, useState } from "react"

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
  },
  {
    name: "MineBerry",
    ip: "play.mineberry.org",
    version: "1.21",
    gamemode: "Earth SMP",
    image: "https://api.mcsrvstat.us/icon/play.mineberry.org"
  },
  {
    name: "BlocksMC",
    ip: "play.blocksmc.com",
    version: "1.21",
    gamemode: "BedWars",
    image: "https://api.mcsrvstat.us/icon/play.blocksmc.com"
  },
  {
    name: "MCHub",
    ip: "mchub.com",
    version: "1.21",
    gamemode: "Prison & Skyblock",
    image: "https://api.mcsrvstat.us/icon/mchub.com"
  },
  {
    name: "Purple Prison",
    ip: "purpleprison.net",
    version: "1.21",
    gamemode: "Prison",
    image: "https://api.mcsrvstat.us/icon/purpleprison.net"
  },
  {
    name: "FadeCloud",
    ip: "fadecloud.com",
    version: "1.21",
    gamemode: "Skyblock",
    image: "https://api.mcsrvstat.us/icon/fadecloud.com"
  },
  {
    name: "MineCadia",
    ip: "play.minecadia.com",
    version: "1.21",
    gamemode: "Factions",
    image: "https://api.mcsrvstat.us/icon/play.minecadia.com"
  },
  {
    name: "Vulengate",
    ip: "mc.vulengate.com",
    version: "1.21",
    gamemode: "MMORPG",
    image: "https://api.mcsrvstat.us/icon/mc.vulengate.com"
  },
  {
    name: "InsanityCraft",
    ip: "play.insanitycraft.net",
    version: "1.21",
    gamemode: "Survival",
    image: "https://api.mcsrvstat.us/icon/play.insanitycraft.net"
  },
  {
    name: "Wild Prison",
    ip: "play.wildprison.net",
    version: "1.21",
    gamemode: "Prison",
    image: "https://api.mcsrvstat.us/icon/play.wildprison.net"
  },
  {
    name: "MineSuperior",
    ip: "hub.mcs.gg",
    version: "1.21",
    gamemode: "Survival",
    image: "https://api.mcsrvstat.us/icon/hub.mcs.gg"
  },
  {
  name: "BlossomCraft",
  ip: "play.blossomcraft.org",
  version: "1.21",
  gamemode: "Survival & Skyblock",
  image: "https://api.mcsrvstat.us/icon/play.blossomcraft.org"
  },
  {
    name: "AkumaMC",
    ip: "play.akumamc.net",
    version: "1.21",
    gamemode: "Prison",
    image: "https://api.mcsrvstat.us/icon/play.akumamc.net"
  },
  {
    name: "CubeCraft",
    ip: "play.cubecraft.net",
    version: "1.21",
    gamemode: "EggWars",
    image: "https://api.mcsrvstat.us/icon/play.cubecraft.net"
  },
  {
    name: "Minemen Club",
    ip: "minemen.club",
    version: "1.21",
    gamemode: "PvP Practice",
    image: "https://api.mcsrvstat.us/icon/minemen.club"
  }
];

export default function Servers() {

  const [data, setData] = useState([])

  const copyIP = (ip) => {
    navigator.clipboard.writeText(ip)
    alert("IP copiado: " + ip)
  }

  async function getPlayers(ip) {
    try {
      const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`)
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

    <div style={page}>

      {/* BG */}
      <div style={bgGlow}></div>

      {/* TITLE */}
      <div style={topSection}>

        <p style={mini}>
          SERVIDORES 
        </p>

        <h1 style={title}>
          Servidores
        </h1>

        <p style={subtitle}>
          Descobre servidores de Minecraft,
          comunidades gaming e experiências survival.
        </p>

      </div>

      {/* GRID */}
      <div style={grid}>

        {data.map((s, i) => (

          <div key={i} style={card}>

            {/* IMAGE */}
            <div style={imageBox}>

              <div style={imageGlow}></div>

              <img
                src={s.image}
                alt={s.name}
                style={img}
              />

              <div
                style={{
                  ...online,
                  background: s.status ? "#22c55e" : "#ef4444"
                }}
              >
                {s.status ? "ONLINE" : "OFFLINE"}
              </div>

            </div>

            {/* CONTENT */}
            <div style={content}>

              <h2 style={name}>
                {s.name}
              </h2>

              <p style={gamemode}>
                {s.gamemode}
              </p>

              <div style={box}>
                🌍 {s.ip}
              </div>

              <div style={box}>
                ⚡ {s.version}
              </div>

              <div style={box}>
                👥 {s.players} online
              </div>

              <button
                onClick={() => copyIP(s.ip)}
                style={button}
              >
                Copiar IP
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

/* =========================
   STYLES NEXORA
========================= */

const page = {
  position: "relative",
  minHeight: "100vh",
  padding: "50px",
  background: "#070b14",
  color: "white",
  overflow: "hidden",
  fontFamily: "Inter, sans-serif"
}

const bgGlow = {
  position: "absolute",
  top: "-300px",
  right: "-200px",

  width: "800px",
  height: "800px",

  background: "rgba(168,85,247,0.12)",

  filter: "blur(150px)",

  borderRadius: "999px"
}

const topSection = {
  position: "relative",
  zIndex: 2,
  marginBottom: "60px"
}

const mini = {
  color: "#a855f7",
  fontWeight: "800",
  letterSpacing: "2px",
  marginBottom: "18px"
}

const title = {
  fontSize: "78px",
  fontWeight: "900",
  marginBottom: "20px",

  background: "linear-gradient(90deg,#ffffff,#d8b4fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const subtitle = {
  color: "#9ca3af",
  fontSize: "20px",
  maxWidth: "700px",
  lineHeight: 1.8
}

const grid = {
  position: "relative",
  zIndex: 2,

  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
  gap: "32px"
}

const card = {
  background: "rgba(17,24,39,0.78)",

  borderRadius: "32px",

  overflow: "hidden",

  border: "1px solid rgba(168,85,247,0.20)",

  boxShadow:
    "0 0 25px rgba(168,85,247,0.12)"
}

const imageBox = {
  position: "relative",

  height: "240px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background:
    "linear-gradient(135deg,#111827,#1e293b)",

  overflow: "hidden"
}

const imageGlow = {
  position: "absolute",

  width: "240px",
  height: "240px",

  background: "rgba(168,85,247,0.16)",

  filter: "blur(70px)",

  borderRadius: "999px"
}

const img = {
  position: "relative",
  zIndex: 2,

  width: "130px",
  height: "130px",

  imageRendering: "pixelated"
}

const online = {
  position: "absolute",
  top: "16px",
  right: "16px",

  padding: "8px 14px",

  borderRadius: "999px",

  fontWeight: "800",
  fontSize: "12px",

  color: "white"
}

const content = {
  padding: "28px"
}

const name = {
  fontSize: "34px",
  fontWeight: "900",
  marginBottom: "12px"
}

const gamemode = {
  color: "#a855f7",
  marginBottom: "22px",
  fontWeight: "800"
}

const box = {
  background: "#0f172a",

  padding: "15px",

  borderRadius: "18px",

  marginBottom: "14px",

  border: "1px solid rgba(255,255,255,0.04)"
}

const button = {
  width: "100%",

  marginTop: "10px",

  background:
    "linear-gradient(90deg,#2563eb,#3b82f6)",

  color: "white",

  padding: "15px",

  borderRadius: "16px",

  fontWeight: "800",

  border: "none",

  cursor: "pointer",

  fontSize: "15px"
}