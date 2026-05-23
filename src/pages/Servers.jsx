const servers = [
  {
    name: "LusiadasCraft",
    ip: "mc.lusiadascraft.com",
    version: "1.21",
    players: "342 online",
    gamemode: "Survival SMP",
    image: "https://api.mcsrvstat.us/icon/mc.lusiadascraft.com"
  },

  {
    name: "CaldasCraft",
    ip: "mc.caldascraft.eu",
    version: "1.20.4",
    players: "187 online",
    gamemode: "Economy Survival",
    image: "https://api.mcsrvstat.us/icon/mc.caldascraft.eu"
  },

  {
    name: "KabuCraft",
    ip: "mc.kabucraft.net",
    version: "1.20.1",
    players: "128 online",
    gamemode: "PvP Survival",
    image: "https://api.mcsrvstat.us/icon/mc.kabucraft.net"
  }
]

export default function Servers() {

  const copyIP = (ip) => {
    navigator.clipboard.writeText(ip)
    alert("IP copiado: " + ip)
  }

  return (

    <div style={{ padding: "40px" }}>

      <h1
        style={{
          fontSize: "70px",
          fontWeight: "900",
          marginBottom: "50px",
          background: "linear-gradient(90deg,#a855f7,#3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Servidores Tugas
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "30px"
        }}
      >

        {servers.map((server, index) => (

          <div
            key={index}
            className="glass neon hover-glow"
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              background: "#111827"
            }}
          >

            {/* IMAGEM */}
            <div
              style={{
                height: "230px",
                background:
                  "linear-gradient(135deg,#111827,#1e293b)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
            >

              <img
                src={server.image}
                alt={server.name}
                style={{
                  width: "130px",
                  height: "130px",
                  imageRendering: "pixelated"
                }}
              />

              {/* ONLINE */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "#22c55e",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  fontSize: "12px"
                }}
              >
                ONLINE
              </div>

            </div>

            {/* CONTEUDO */}
            <div style={{ padding: "25px" }}>

              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: "900",
                  marginBottom: "10px"
                }}
              >
                {server.name}
              </h2>

              <p
                style={{
                  color: "#a855f7",
                  marginBottom: "20px",
                  fontWeight: "bold"
                }}
              >
                {server.gamemode}
              </p>

              <div
                className="glass"
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                  marginBottom: "12px"
                }}
              >
                🌍 {server.ip}
              </div>

              <div
                className="glass"
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                  marginBottom: "12px"
                }}
              >
                ⚡ {server.version}
              </div>

              <div
                className="glass"
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                  marginBottom: "20px"
                }}
              >
                👥 {server.players}
              </div>

              <button
                onClick={() => copyIP(server.ip)}
                className="btn-primary neon"
                style={{
                  width: "100%"
                }}
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