import { useState } from "react"
import minecraftLogo from "../assets/minecraft-logo.png"

const platformIcons = {
  Twitch:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg",
  YouTube:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
  TikTok:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
}

const baseStreamers = [
  {
    name: "CorreiaMB",
    platform: "Twitch",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹",
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e78c7a30-e01c-40dd-a1ed-345f68c2cd19-profile_image-70x70.png",
    link: "https://www.twitch.tv/correiamb"
  },

  {
    name: "Cartaxo",
    platform: "Twitch",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹",
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cc5c2048-de71-4f54-9173-e383c705fa47-profile_image-70x70.png",
    link: "https://www.twitch.tv/cartaxo2720"
  },

  {
    name: "Franciscop",
    platform: "Twitch",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹",
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7de856f0-fd01-4c93-b03a-00122a913bcf-profile_image-70x70.jpeg",
    link: "https://www.twitch.tv/chicodascouves2212"
  },

  {
    name: "Pato_Conselhos",
    platform: "TikTok",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹",
    avatar:
      "https://www.petz.com.br/blog/wp-content/uploads/2022/03/animais-que-botom-ovo-2.jpg",
    link:
      "https://www.tiktok.com/@patoconselhos?is_from_webapp=1&sender_device=pc"
  },

  {
    name: "Feromonas",
    platform: "Twitch",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗠𝗼𝗱𝘀",
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/dfb98a19-2543-4ee2-a676-8292f29d3498-profile_image-70x70.png",
    link: "https://www.twitch.tv/feromonas"
  },

  {
    name: "Dream",
    platform: "YouTube",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝗠𝗣",
    avatar:
      "https://yt3.ggpht.com/In7JtEzLm2klae8nEa04D9OEYn_Sz8DUCEEs3lon3db0d2B7Ng4-jNRWv3C5hetujaqAj9mwBg=s176-c-k-c0x00ffffff-no-rj-mo",
    link: "https://www.youtube.com/@dream"
  },

  {
    name: "GeorgeNotFound",
    platform: "YouTube",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝗠𝗣",
    avatar:
      "https://yt3.googleusercontent.com/ytc/AIdro_m1rQBE9mRK7nnv532ja0Djt3DazkS7PwoHlEuvexK81Qs=s176-c-k-c0x00ffffff-no-rj-mo",
    link: "https://www.youtube.com/@GeorgeNotFound"
  },

  {
    name: "TommyInnit",
    platform: "Twitch",
    game: "𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁 𝗦𝗠𝗣",
    avatar:
      "https://yt3.googleusercontent.com/ytc/AIdro_nKI4I6HlD1WXXXLig8UdltE92jpUSW6ng8P0cUUPUhKzw=s176-c-k-c0x00ffffff-no-rj-mo",
    link: "https://www.twitch.tv/tommyinnit"
  },

  {
    name: "FitMC",
    platform: "YouTube",
    game: "𝟮𝗯𝟮𝘁 𝗔𝗻𝗮𝗿𝗰𝗵𝘆",
    avatar:
      "https://yt3.ggpht.com/f4O0l4jsK6dMTJD5ef32aGAhLu6ql4e4fT_AxxH59WICj11wPeI2ZHuGvI1F-ftvvS09VXA95A=s176-c-k-c0x00ffffff-no-rj-mo",
    link: "https://www.youtube.com/@FitMC"
  }
]

export default function Streamers() {
  const [streamers] = useState(baseStreamers)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("ALL")

  const filtered = streamers.filter(
    (s) =>
      (filter === "ALL" || s.platform === filter) &&
      s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page">

      {/* HERO */}
      <div className="hero">

        <div className="heroGlow"></div>

        <div className="heroTop">

          <img
            src="/nexora2.png"
            alt=""
            className="heroLogo"
          />

          <div>
            <h1>STREAMERS</h1>

            <p>
              Descobre streamers de Minecraft, SMP, Survival e creators tugas.
            </p>
          </div>

        </div>

      </div>

      {/* SEARCH */}
      <div className="searchBox">
        <input
          placeholder="Pesquisar streamer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

{/* FILTERS */}
<div className="filters">

  {[
    {
      name: "ALL",
      icon: minecraftLogo
    },
    {
      name: "Twitch",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg"
    },
    {
      name: "YouTube",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
    },
    {
      name: "TikTok",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
    }
  ].map((f) => (

    <button
      key={f.name}
      onClick={() => setFilter(f.name)}
      className={filter === f.name ? "activeFilter" : ""}
    >

      <img
        src={f.icon}
        alt=""
        className={f.name === "ALL" ? "minecraftFilter" : ""}
      />

      {f.name}

    </button>

  ))}

</div>

      {/* GRID */}
      <div className="grid">

        {filtered.map((s, i) => (

          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            className="card"
          >

            <div className="cardGlow"></div>

            {/* RANK */}
            <div className="rank">
              #{i + 1}
            </div>

            {/* AVATAR */}
            <img
              src={s.avatar}
              alt=""
              className="avatar"
              onError={(e) => {
                e.target.src =
                  `https://api.dicebear.com/7.x/bottts/svg?seed=${s.name}`
              }}
            />

            {/* INFO */}
            <div className="info">

              <h2>{s.name}</h2>

              <p>{s.game}</p>

              <span>
                OPEN CHANNEL →
              </span>

            </div>

            {/* PLATFORM */}
            <div className="platform">

              <img
                src={platformIcons[s.platform]}
                alt=""
              />

            </div>

          </a>

        ))}

      </div>

      {/* CSS */}
      <style>{`

        body{
          margin:0;
          background:#070b17;
          color:white;
          font-family:Inter,system-ui;
        }

        .page{
          min-height:100vh;
          max-width:1150px;
          margin:auto;
          padding:35px;
        }

        .hero{
          position:relative;
          overflow:hidden;
          background:linear-gradient(135deg,#111827,#0f172a);
          border:1px solid #1f2937;
          border-radius:28px;
          padding:38px;
          margin-bottom:24px;
        }

        .heroGlow{
          position:absolute;
          width:350px;
          height:350px;
          background:#a855f7;
          opacity:0.18;
          filter:blur(120px);
          top:-120px;
          right:-120px;
        }

        .heroTop{
          position:relative;
          z-index:2;
          display:flex;
          align-items:center;
          gap:22px;
        }

        .heroLogo{
          width:82px;
          height:82px;
          object-fit:cover;
          border-radius:50%;
          box-shadow:0 0 22px rgba(168,85,247,.35);
        }

        .hero h1{
          margin:0;
          font-size:48px;
          font-weight:900;
          letter-spacing:2px;
          background:linear-gradient(90deg,#a855f7,#3b82f6);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero p{
          margin-top:8px;
          color:#9ca3af;
          font-size:15px;
        }

        .searchBox{
          margin-bottom:18px;
        }

        .searchBox input{
          width:100%;
          padding:16px 18px;
          border-radius:18px;
          border:1px solid #1f2937;
          background:#111827;
          color:white;
          outline:none;
          font-size:15px;
          box-sizing:border-box;
          transition:.25s;
        }

        .searchBox input:focus{
          border-color:#a855f7;
          box-shadow:0 0 20px rgba(168,85,247,.25);
        }

        .filters{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          margin-bottom:24px;
        }

.filters button{
  background:#111827;
  border:1px solid #1f2937;
  color:white;
  padding:12px 18px;
  border-radius:14px;
  cursor:pointer;
  font-weight:700;
  transition:.25s;
  display:flex;
  align-items:center;
  gap:10px;
}

.filters button img{
  width:18px;
  height:18px;
  object-fit:contain;
}

.filters button:first-child img{
  width:22px;
  height:22px;
  border-radius:6px;
}

        .activeFilter{
          background:#a855f7 !important;
          border-color:#a855f7 !important;
        }

        .grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(420px,1fr));
  gap:18px;
}

        .card{
          position:relative;
          overflow:hidden;
          background:#111827;
          border:1px solid #1f2937;
          border-radius:24px;
          padding:22px;
          display:flex;
          align-items:center;
          gap:18px;
          text-decoration:none;
          transition:.28s;
        }

        .card:hover{
          transform:translateY(-5px);
          border-color:#a855f7;
          box-shadow:0 0 28px rgba(168,85,247,.22);
        }

        .cardGlow{
          position:absolute;
          inset:0;
          background:linear-gradient(
            135deg,
            rgba(168,85,247,.14),
            transparent
          );
          opacity:0;
          transition:.3s;
        }

        .card:hover .cardGlow{
          opacity:1;
        }

        .rank{
          min-width:44px;
          height:44px;
          border-radius:14px;
          background:linear-gradient(135deg,#a855f7,#3b82f6);
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:900;
          font-size:14px;
          box-shadow:0 0 18px rgba(168,85,247,.35);
          z-index:2;
        }

        .avatar{
          width:72px;
          height:72px;
          border-radius:50%;
          object-fit:cover;
          border:2px solid #272f42;
          z-index:2;
        }

        .info{
          flex:1;
          z-index:2;
        }

        .info h2{
          margin:0;
          font-size:21px;
          font-weight:800;
          color:white;
        }

        .info p{
          margin:6px 0 10px;
          color:#9ca3af;
          font-size:13px;
          letter-spacing:1px;
        }

        .info span{
          color:#60a5fa;
          font-size:13px;
          font-weight:700;
        }

        .platform{
  min-width:30px;
  width:30px;
  height:30px;

        .platform img{
  width:30px;
  height:30px;

        @media(max-width:700px){

          .heroTop{
            flex-direction:column;
            text-align:center;
          }

          .hero h1{
            font-size:38px;
          }

          .card{
            flex-direction:column;
            align-items:flex-start;
          }

          .platform{
            width:52px;
          }

        }

      `}</style>

    </div>
  )
}