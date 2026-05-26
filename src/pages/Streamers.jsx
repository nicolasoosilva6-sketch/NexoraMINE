import { useState } from "react"

import minecraftLogo from "../assets/minecraft-logo.png"
import cameraLogo from "../assets/camera.png"

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

      {/* BG */}
      <div className="bgGlow"></div>

      {/* HERO */}
      <div className="hero">

        <div className="heroGlow"></div>

        <div className="heroTop">

          <img
            src={cameraLogo}
            alt=""
            className="heroLogo"
          />

          <div>

            <p className="mini">
              STREAMERS
            </p>

            <h1>
              Minecraft Streamers
            </h1>

            <p className="subtitle">
              Descobre streamers de Minecraft,
              SMP, Survival e creators tugas.
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
            icon:
              "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg"
          },

          {
            name: "YouTube",
            icon:
              "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
          },

          {
            name: "TikTok",
            icon:
              "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
          }

        ].map((f) => (

          <button
            key={f.name}
            onClick={() => setFilter(f.name)}
            className={
              filter === f.name
                ? "activeFilter"
                : ""
            }
          >

            <img
              src={f.icon}
              alt=""
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

            {/* TOP */}
            <div className="top">

              <div className="left">

                <div className="rank">
                  #{i + 1}
                </div>

                <img
                  src={s.avatar}
                  alt=""
                  className="avatar"
                  onError={(e) => {
                    e.target.src =
                      `https://api.dicebear.com/7.x/bottts/svg?seed=${s.name}`
                  }}
                />

              </div>

              <div className="platform">

                <img
                  src={platformIcons[s.platform]}
                  alt=""
                />

              </div>

            </div>

            {/* CONTENT */}
            <div className="content">

              <h2>
                {s.name}
              </h2>

              <p className="game">
                {s.game}
              </p>

              <button className="watchBtn">
                OPEN CHANNEL
              </button>

            </div>

          </a>

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
          background:rgba(59,130,246,.12);
          filter:blur(160px);
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
            rgba(15,23,42,.92),
            rgba(17,24,39,.85)
          );

          border:
          1px solid rgba(59,130,246,.12);

          border-radius:32px;

          padding:40px;

          margin-bottom:30px;

          backdrop-filter:blur(12px);
        }

        .heroGlow{
          position:absolute;

          width:420px;
          height:420px;

          background:rgba(59,130,246,.14);

          filter:blur(120px);

          right:-140px;
          top:-140px;
        }

        .heroTop{
          position:relative;
          z-index:2;

          display:flex;
          align-items:center;
          gap:24px;
        }

        .heroLogo{
          width:90px;
          height:90px;

          object-fit:contain;

          filter:
          drop-shadow(
            0 0 25px rgba(59,130,246,.35)
          );
        }

        .mini{
          color:#60a5fa;

          font-weight:800;

          letter-spacing:2px;

          margin-bottom:10px;

          font-size:14px;
        }

        .hero h1{
          margin:0;

          font-size:62px;
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

          font-size:16px;
        }

        .searchBox{
          margin-bottom:18px;
        }

        .searchBox input{
          width:100%;

          padding:18px;

          border-radius:18px;

          border:
          1px solid rgba(59,130,246,.10);

          background:
          rgba(15,23,42,.75);

          color:white;

          outline:none;

          font-size:15px;

          box-sizing:border-box;

          backdrop-filter:blur(10px);
        }

        .searchBox input:focus{
          border-color:#60a5fa;

          box-shadow:
          0 0 20px rgba(59,130,246,.18);
        }

        .filters{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          margin-bottom:28px;
        }

        .filters button{
          background:
          rgba(15,23,42,.78);

          border:
          1px solid rgba(59,130,246,.10);

          color:white;

          padding:12px 18px;

          border-radius:16px;

          cursor:pointer;

          font-weight:700;

          transition:.25s;

          display:flex;
          align-items:center;
          gap:10px;
        }

        .filters button:hover{
          border-color:#60a5fa;

          transform:translateY(-2px);
        }

        .filters button img{
          width:18px;
          height:18px;
          object-fit:contain;
        }

        .filters button:first-child img{
          width:22px;
          height:22px;
        }

        .activeFilter{
          background:
          linear-gradient(
            90deg,
            #2563eb,
            #60a5fa
          ) !important;

          border-color:#60a5fa !important;
        }

        .grid{
          position:relative;
          z-index:2;

          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(420px,1fr));

          gap:28px;
        }

        .card{
          position:relative;
          overflow:hidden;

          background:
          linear-gradient(
            135deg,
            rgba(15,23,42,.94),
            rgba(17,24,39,.90)
          );

          border:
          1px solid rgba(59,130,246,.10);

          border-radius:30px;

          padding:28px;

          text-decoration:none;

          transition:.28s;

          backdrop-filter:blur(12px);
        }

        .card:hover{
          transform:translateY(-6px);

          border-color:#60a5fa;

          box-shadow:
          0 0 30px rgba(59,130,246,.15);
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

          margin-bottom:26px;
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
          0 0 18px rgba(59,130,246,.25);
        }

        .avatar{
          width:82px;
          height:82px;

          border-radius:50%;

          object-fit:cover;

          border:
          2px solid rgba(255,255,255,.06);
        }

        .platform{
          width:52px;
          height:52px;

          border-radius:16px;

          display:flex;
          align-items:center;
          justify-content:center;

          background:
          rgba(15,23,42,.75);

          border:
          1px solid rgba(59,130,246,.10);
        }

        .platform img{
          width:26px;
          height:26px;
        }

        .content{
          position:relative;
          z-index:2;
        }

        .content h2{
          margin:0;

          font-size:34px;
          font-weight:900;

          color:white;

          word-break:break-word;
        }

        .game{
          color:#60a5fa;

          margin-top:10px;
          margin-bottom:24px;

          font-weight:700;

          font-size:15px;
        }

        .watchBtn{
          width:100%;

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

        .watchBtn:hover{
          transform:scale(1.02);

          box-shadow:
          0 0 24px rgba(59,130,246,.28);
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