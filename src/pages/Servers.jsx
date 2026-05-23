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
    name: "CaldasCraft",
    ip: "mc.caldascraft.eu",
    version: "1.20.4",
    gamemode: "Economy Survival",
    image: "https://api.mcsrvstat.us/icon/mc.caldascraft.eu"
  },
  {
    name: "KabuCraft",
    ip: "mc.kabucraft.net",
    version: "1.20.1",
    gamemode: "PvP Survival",
    image: "https://api.mcsrvstat.us/icon/mc.kabucraft.net"
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
      const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`)
      const json = await res.json()
      return json.players?.online ?? 0
    } catch {
      return 0
    }
  }

  useEffect(() => {

    async function load() {
      const updated = await Promise.all(
        servers.map(async (s) => ({
          ...s,
          players: await getPlayers(s.ip)
        }))
      )

      setData(updated)
    }

    load()
    const interval = setInterval(load, 30000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div style={page}>

      {/* TITULO */}
      <h1 style={title}>
        Servidores Tugas
      </h1>

      {/* GRID */}
      <div style={grid}>

        {data.map((s, i) => (

          <div key={i} style={card}>

            {/* HEADER IMAGE */}
            <div style={imageBox}>

              <img src={s.image} style={img} />

              <div style={online}>
                ONLINE
              </div>

            </div>

            {/* CONTENT */}
            <div style={{ padding: 25 }}>

              <h2 style={name}>{s.name}</h2>

              <p style={gamemode}>{s.gamemode}</p>

              <div style={box}>🌍 {s.ip}</div>
              <div style={box}>⚡ {s.version}</div>
              <div style={box}>👥 {s.players} online</div>

              <button onClick={() => copyIP(s.ip)} style={button}>
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
  padding: "40px",
  minHeight: "100vh",
  background: "#0b0f19",
  color: "white",
  fontFamily: "system-ui"
}

const title = {
  fontSize: "70px",
  fontWeight: "900",
  marginBottom: "50px",
  background: "linear-gradient(90deg,#a855f7,#9333ea)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
  gap: "30px"
}

const card = {
  borderRadius: "30px",
  overflow: "hidden",
  background: "#111827",

  border: "1px solid rgba(168, 85, 247, 0.6)",
  boxShadow: "0 0 15px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)"
}

const imageBox = {
  height: "230px",
  background: "linear-gradient(135deg,#111827,#1e293b)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
}

const img = {
  width: "130px",
  height: "130px",
  imageRendering: "pixelated"
}

const online = {
  position: "absolute",
  top: "15px",
  right: "15px",
  background: "#22c55e",
  padding: "8px 14px",
  borderRadius: "999px",
  fontWeight: "bold",
  fontSize: "12px"
}

const name = {
  fontSize: "34px",
  fontWeight: "900",
  marginBottom: "10px"
}

const gamemode = {
  color: "#a855f7",
  marginBottom: "20px",
  fontWeight: "bold"
}

const box = {
  background: "#0f172a",
  padding: "14px",
  borderRadius: "16px",
  marginBottom: "12px"
}

const button = {
  width: "100%",
  background: "#2563eb",
  color: "white",
  padding: "12px",
  borderRadius: "12px",
  fontWeight: "700",
  border: "none",
  cursor: "pointer"
}