import { useEffect, useState } from "react"

const baseStreamers = [
  {
    name: "CorreiaMB",
    platform: "Twitch",
    game: "Minecraft Survival",
    twitch: "correiamb",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/e78c7a30-e01c-40dd-a1ed-345f68c2cd19-profile_image-70x70.png", // 👈 COLE AQUI O LINK DO PNG
    link: "https://www.twitch.tv/correiamb"
  },
    {
    name: "Cartaxo",
    platform: "Twitch",
    game: "Minecraft Survival",
    twitch: "cartaxo2720",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/cc5c2048-de71-4f54-9173-e383c705fa47-profile_image-70x70.png", // 👈 COLE AQUI O LINK DO PNG
    link: "https://www.twitch.tv/cartaxo2720"
  },
  {
    name: "Feromonas",
    platform: "Twitch",
    game: "Minecraft Mods",
    twitch: "feromonas",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/dfb98a19-2543-4ee2-a676-8292f29d3498-profile_image-70x70.png", // 👈 COLE AQUI O LINK DO PNG
    link: "https://www.twitch.tv/feromonas"
  },
  {
    name: "MoveMind",
    platform: "YouTube",
    game: "Minecraft Hardcore",
    twitch: "movemind",
    avatar: "https://yt3.ggpht.com/Xgc8zlVFG2Q0M80n86nB2dliOtZqoGvIPX_vreCqmyypKUfb0oAqvvD1b4H5jl0zXLqjz0FlIg=s176-c-k-c0x00ffffff-no-rj-mo", // 👈 COLE AQUI O LINK DO PNG
    link: "https://www.youtube.com/@MoveMind_yt"
  },
  {
    name: "Wuant",
    platform: "Twitch",
    game: "Minecraft SMP",
    twitch: "wuant",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/dcd045e1-9aa9-43cb-a48d-6af37f5bfc60-profile_image-70x70.png", // 👈 COLE AQUI O LINK DO PNG
    link: "https://www.twitch.tv/wuant"
  },
  {
    name: "D4rkFrame",
    platform: "Twitch",
    game: "Minecraft PvP",
    twitch: "d4rkframe",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/92ee5302-4590-4bc3-8c78-7e780e7f873f-profile_image-70x70.png", // 👈 COLE AQUI O LINK DO PNG
    link: "https://www.twitch.tv/d4rkframe"
  },
  {
    name: "Tji",
    platform: "YouTube",
    game: "Minecraft SkyBlock",
    twitch: "tji",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_n9zfXuh5sr3ZtRgPO1w0bSpxa16dgVZiCN9M3S6xrfMl8=s176-c-k-c0x00ffffff-no-rj-mo", // 👈 COLE AQUI O LINK DO PNG
    link: "https://www.youtube.com/@tji"
  }
]

export default function Streamers() {
  const [streamers, setStreamers] = useState(baseStreamers)

  return (
    <div style={{
      minHeight: "100vh",
      padding: "30px",
      maxWidth: "900px",
      margin: "0 auto",
      background: "#0b0f19",
      color: "white",
      fontFamily: "Arial"
    }}>

      {/* TITLE */}
      <h1 style={{
        fontSize: "42px",
        fontWeight: "900",
        marginBottom: "30px",
        background: "linear-gradient(90deg,#a855f7,#3b82f6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Top Streamers PT
      </h1>

      {/* LIST */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

        {streamers.map((streamer, index) => (

          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              padding: "14px",
              borderRadius: "20px",
              background: "#111827"
            }}
          >

            {/* RANK */}
            <div style={{
              minWidth: "38px",
              height: "38px",
              borderRadius: "999px",
              background: "linear-gradient(90deg,#a855f7,#3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900"
            }}>
              #{index + 1}
            </div>

            {/* AVATAR (100% SIMPLES E PERFEITO) */}
            <img
              src={
                streamer.avatar && streamer.avatar.trim() !== ""
                  ? streamer.avatar
                  : `https://api.dicebear.com/7.x/bottts/svg?seed=${streamer.name}`
              }
              onError={(e) => {
                e.target.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${streamer.name}`
              }}
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #2b2f3a"
              }}
            />

            {/* INFO */}
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 0 }}>{streamer.name}</h2>
              <p style={{ margin: 0, color: "#9ca3af" }}>🎮 {streamer.game}</p>

              {streamer.link && (
                <a
                  href={streamer.link}
                  target="_blank"
                  style={{ color: "#60a5fa", fontSize: 13 }}
                >
                  abrir canal →
                </a>
              )}
            </div>

            {/* PLATFORM */}
            <div style={{
              padding: "8px 12px",
              borderRadius: 12,
              background: "#0f172a",
              color:
                streamer.platform === "Twitch"
                  ? "#a855f7"
                  : streamer.platform === "YouTube"
                  ? "#ef4444"
                  : "#22c55e",
              fontWeight: "700",
              fontSize: 13
            }}>
              {streamer.platform}
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}