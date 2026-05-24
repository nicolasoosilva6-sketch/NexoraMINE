import { useState } from "react"

const platformIcons = {
  Twitch: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg",
  YouTube: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
  TikTok: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
}

const baseStreamers = [
  { name: "CorreiaMB", platform: "Twitch", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/e78c7a30-e01c-40dd-a1ed-345f68c2cd19-profile_image-70x70.png", link: "https://www.twitch.tv/correiamb" },
  { name: "Cartaxo", platform: "Twitch", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/cc5c2048-de71-4f54-9173-e383c705fa47-profile_image-70x70.png", link: "https://www.twitch.tv/cartaxo2720" },
  { name: "Franciscop", platform: "Twitch", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/7de856f0-fd01-4c93-b03a-00122a913bcf-profile_image-70x70.jpeg", link: "https://www.twitch.tv/chicodascouves2212" },
  { name: "Pato_Conselhos", platform: "TikTok", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹", avatar: "https://www.petz.com.br/blog/wp-content/uploads/2022/03/animais-que-botom-ovo-2.jpg", link: "https://www.tiktok.com/@patoconselhos?is_from_webapp=1&sender_device=pc" },
  { name: "Feromonas", platform: "Twitch", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁  𝗠𝗼𝗱𝘀", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/dfb98a19-2543-4ee2-a676-8292f29d3498-profile_image-70x70.png", link: "https://www.twitch.tv/feromonas" },
  { name: "Dream", platform: "YouTube", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝗠𝗣", avatar: "https://yt3.ggpht.com/In7JtEzLm2klae8nEa04D9OEYn_Sz8DUCEEs3lon3db0d2B7Ng4-jNRWv3C5hetujaqAj9mwBg=s176-c-k-c0x00ffffff-no-rj-mo", link: "https://www.youtube.com/@dream" },
  { name: "GeorgeNotFound", platform: "YouTube", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝗠𝗣", avatar: "https://yt3.googleusercontent.com/ytc/AIdro_m1rQBE9mRK7nnv532ja0Djt3DazkS7PwoHlEuvexK81Qs=s176-c-k-c0x00ffffff-no-rj-mo", link: "https://www.youtube.com/@GeorgeNotFound" },
  { name: "TommyInnit", platform: "Twitch", game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝗠𝗣", avatar: "https://yt3.googleusercontent.com/ytc/AIdro_nKI4I6HlD1WXXXLig8UdltE92jpUSW6ng8P0cUUPUhKzw=s176-c-k-c0x00ffffff-no-rj-mo", link: "https://www.twitch.tv/tommyinnit" },
  { name: "FitMC", platform: "YouTube", game: "𝟮𝗯𝟮𝘁 𝗔𝗻𝗮𝗿𝗰𝗵𝘆", avatar: "https://yt3.ggpht.com/f4O0l4jsK6dMTJD5ef32aGAhLu6ql4e4fT_AxxH59WICj11wPeI2ZHuGvI1F-ftvvS09VXA95A=s176-c-k-c0x00ffffff-no-rj-mo", link: "https://www.youtube.com/@FitMC" }
]

export default function Streamers() {
  const [streamers] = useState(baseStreamers)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("ALL")

  const filtered = streamers.filter(s =>
    (filter === "ALL" || s.platform === filter) &&
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      maxWidth: "950px",
      margin: "0 auto",
      background: "#0a0f1f",
      color: "white",
      fontFamily: "monospace"
    }}>

      {/* TITLE */}
      <h1 style={{
        fontSize: "44px",
        fontWeight: "900",
        marginBottom: "25px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        background: "linear-gradient(90deg,#a855f7,#3b82f6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        𝗦𝗧𝗥𝗘𝗔𝗠𝗘𝗥𝗦
      </h1>

      {/* SEARCH */}
      <input
        placeholder="search streamer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "12px",
          marginBottom: "15px",
          background: "#111827",
          color: "white",
          border: "1px solid #2b2f3a",
          outline: "none"
        }}
      />

      {/* FILTER */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        {["ALL", "Twitch", "YouTube", "TikTok"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "6px 12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: filter === f ? "#a855f7" : "#111827",
              color: "white",
              transition: "0.2s"
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {filtered.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px",
              borderRadius: "18px",
              background: "#111827",
              cursor: "pointer",
              transition: "0.25s",
              boxShadow: "0 0 0 rgba(0,0,0,0)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)"
              e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.25)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"
            }}
          >

            {/* RANK */}
            <div style={{
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(90deg,#a855f7,#3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900"
            }}>
              #{i + 1}
            </div>

            {/* AVATAR */}
            <img
              src={s.avatar}
              onError={(e) => {
                e.target.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${s.name}`
              }}
              style={{
                width: 65,
                height: 65,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #2b2f3a"
              }}
            />

            {/* INFO */}
            <div style={{ flex: 1 }}>
              <h2 style={{
                margin: 0,
                letterSpacing: "1px"
              }}>
                {s.name}
              </h2>

              <p style={{
                margin: 0,
                color: "#9ca3af",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase"
              }}>
                GAME MODE: {s.game}
              </p>

              <a href={s.link} target="_blank" style={{
                color: "#60a5fa",
                fontSize: 12,
                textDecoration: "none"
              }}>
                OPEN CHANNEL →
              </a>
            </div>

            {/* PLATFORM ICON */}
            <div style={{
              padding: "10px",
              borderRadius: "12px",
              background: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img
                src={platformIcons[s.platform]}
                style={{ width: 20, height: 20, filter: "invert(1)" }}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}