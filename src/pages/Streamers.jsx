// Streamers.jsx

import { Link } from "react-router-dom"

const streamers = [

   {
  name: "Correia",
  platform: "Twitch",
  game: "Minecraft Survival",
  avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/e78c7a30-e01c-40dd-a1ed-345f68c2cd19-profile_image-70x70.png",
  url: "https://www.twitch.tv/correiamb"
},

{
  name: "Pato Conselhos",
  platform: "Twitch",
  game: "Minecraft PvP",
  avatar: "https://p16-common-sign.tiktokcdn-eu.com/tos-useast2a-avt-0068-euttp/ac12eac1f951b85536eb9f21b4852451~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=10399&refresh_token=1690dcf9&x-expires=1780088400&x-signature=G%2Fdt2%2Bw54sUCJwXp4n6bo4ND47o%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast2b",
  url: "https://www.tiktok.com/@patoconselhos"
},

{
  name: "TSofio",
  platform: "Twitch",
  game: "Minecraft Events",
  avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/ca843dc8-d6d9-45b3-a34f-c6a209d6a0ea-profile_image-70x70.jpeg",
  url: "https://www.twitch.tv/tsofio"
},

{
  name: "Cartaxo",
  platform: "Twitch",
  game: "Minecraft Survival",
  avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/cc5c2048-de71-4f54-9173-e383c705fa47-profile_image-70x70.png",
  url: "https://www.twitch.tv/cartaxo2720"
},

{
  name: "Franciscop",
  platform: "Twitch",
  game: "Minecraft Hardcore",
  avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/7de856f0-fd01-4c93-b03a-00122a913bcf-profile_image-70x70.jpeg",
  url: "https://www.twitch.tv/chicodascouves2212"
},

  {
    name: "TommyInnit",
    platform: "Twitch",
    game: "Minecraft Hardcore",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/48cb9093-a729-418e-ae3a-347c2b814ee6-profile_image-70x70.png",
    url: "https://www.twitch.tv/tommyinnit"
  },

  {
    name: "Dream",
    platform: "YouTube",
    game: "Minecraft Speedrun",
    avatar: "https://yt3.ggpht.com/In7JtEzLm2klae8nEa04D9OEYn_Sz8DUCEEs3lon3db0d2B7Ng4-jNRWv3C5hetujaqAj9mwBg=s176-c-k-c0x00ffffff-no-rj-mo",
    url: "https://www.youtube.com/@dream"
  },

  {
    name: "Sapnap",
    platform: "Kick",
    game: "Minecraft Events",
    avatar: "https://files.kick.com/images/user/15733617/profile_image/conversion/1faf8084-515d-4ea5-a92c-dbd0b1639dad-fullsize.webp",
    url: "https://kick.com/sapnap"
  },

  {
    name: "GeorgeNotFound",
    platform: "Twitch",
    game: "Minecraft Survival",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/ff238566-dc40-4849-8f80-8fbbcfaabbc9-profile_image-70x70.png",
    url: "https://www.twitch.tv/georgenotfound"
  },

  {
    name: "Tubbo",
    platform: "Twitch",
    game: "Minecraft SMP",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/905af69a-4fd8-42c7-b842-bf4ee4d51b3b-profile_image-70x70.png",
    url: "https://www.twitch.tv/tubbo"
  },

  {
    name: "Purpled",
    platform: "Twitch",
    game: "Minecraft Bedwars",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/5bdb1998-3fe5-4cbb-b764-7accf7f2edc8-profile_image-70x70.png",
    url: "https://www.twitch.tv/purpled"
  },

  {
    name: "Feinberg",
    platform: "Twitch",
    game: "Minecraft Speedrun",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/e83ed501-170f-454a-969a-2ed1f02f229a-profile_image-70x70.png",
    url: "https://www.twitch.tv/feinberg"
  },

  {
    name: "Fruitberries",
    platform: "Twitch",
    game: "Minecraft PvP",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/4a1b51a9-0094-4cb8-bdf4-dba7c7e64dea-profile_image-70x70.png",
    url: "https://www.twitch.tv/fruitberries"
  },

  {
  name: "Illumina",
  platform: "Twitch",
  game: "Minecraft Speedrun",
  avatar: "https://unavatar.io/twitch/illumina1337",
  url: "https://www.twitch.tv/illumina1337"
},

{
  name: "Quackity",
  platform: "Twitch",
  game: "Minecraft RP",
  avatar: "https://unavatar.io/twitch/quackity",
  url: "https://www.twitch.tv/quackity"
},

{
  name: "Philza",
  platform: "Twitch",
  game: "Hardcore Minecraft",
  avatar: "https://unavatar.io/twitch/philza",
  url: "https://www.twitch.tv/philza"
},

{
  name: "CaptainSparklez",
  platform: "YouTube",
  game: "Minecraft Modded",
  avatar: "https://unavatar.io/youtube/@CaptainSparklez",
  url: "https://www.youtube.com/@CaptainSparklez"
},

{
  name: "Technoblade",
  platform: "YouTube",
  game: "Minecraft PvP",
  avatar: "https://unavatar.io/youtube/@Technoblade",
  url: "https://www.youtube.com/@Technoblade"
},

{
  name: "SB737",
  platform: "YouTube",
  game: "Minecraft Hardcore",
  avatar: "https://unavatar.io/youtube/@SB737",
  url: "https://www.youtube.com/@SB737"
},

{
  name: "ClownPierce",
  platform: "YouTube",
  game: "Minecraft PvP",
  avatar: "https://unavatar.io/youtube/@ClownPierce",
  url: "https://www.youtube.com/@ClownPierce"
},

{
  name: "Couriway",
  platform: "Twitch",
  game: "Minecraft Speedrun",
  avatar: "https://unavatar.io/twitch/couriway",
  url: "https://www.twitch.tv/couriway"
},

{
  name: "SmallAnt",
  platform: "Twitch",
  game: "Minecraft Challenges",
  avatar: "https://unavatar.io/twitch/smallant",
  url: "https://www.twitch.tv/smallant"
},

{
  name: "Wallibear",
  platform: "YouTube",
  game: "Minecraft Bedwars",
  avatar: "https://unavatar.io/youtube/@Wallibear",
  url: "https://www.youtube.com/@Wallibear"
},

{
  name: "Parrot",
  platform: "YouTube",
  game: "Minecraft SMP",
  avatar: "https://unavatar.io/youtube/@Parrot",
  url: "https://www.youtube.com/@Parrot"
},

{
  name: "Wolfeei",
  platform: "Twitch",
  game: "Minecraft Events",
  avatar: "https://unavatar.io/twitch/wolfeei",
  url: "https://www.twitch.tv/wolfeei"
}
]

export default function Streamers() {

  return (
    <div className="page">

      <div className="background"></div>
      <div className="overlay"></div>

      {/* NAVBAR */}

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
            alt=""
            className="topLogo"
          />

        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="heroBox">

          <h1>
            Minecraft Streamers
          </h1>

          <p>
            Discover creators from Twitch, YouTube and Kick
          </p>

        </div>

      </section>

      {/* GRID */}

      <section className="streamersGrid">

        {streamers.map((streamer) => (

          <a
            key={streamer.name}
            href={streamer.url}
            target="_blank"
            rel="noreferrer"
            className="streamerCard"
          >

            <img
              src={streamer.avatar}
              alt={streamer.name}
              className="avatar"
            />

            <h2>
              {streamer.name}
            </h2>

            <span className="platform">
              {streamer.platform}
            </span>

            <p>
              {streamer.game}
            </p>

          </a>

        ))}

      </section>

      <style>{`

        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family:Inter,system-ui;
          overflow-x:hidden;
          color:white;
        }

        .page{
          min-height:100vh;
          position:relative;
          padding-bottom:60px;
        }

        .background{
          position:fixed;
          inset:0;
          background-image:url('/ceu.png');
          background-size:cover;
          background-position:center;
          background-repeat:no-repeat;
          z-index:-3;
          transform:scale(1.05);
        }

        .overlay{
          position:fixed;
          inset:0;
          background:
          linear-gradient(
            to bottom,
            rgba(0,0,0,.45),
            rgba(7,11,23,.82)
          );
          z-index:-2;
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
  
        .hero{
          padding-top:160px;
          padding-bottom:70px;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .heroBox{
          width:90%;
          max-width:1100px;

          background:rgba(17,24,39,.55);

          border:1px solid rgba(255,255,255,.12);

          border-radius:35px;

          padding:45px;

          backdrop-filter:blur(18px);

          text-align:center;
        }

        .heroBox h1{
          margin:0;
          font-size:64px;
          font-weight:900;
        }

        .heroBox p{
          margin-top:15px;
          color:#d1d5db;
          font-size:18px;
        }

        .streamersGrid{
          width:90%;
          max-width:1400px;
          margin:auto;

          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(260px,1fr));

          gap:24px;
        }

        .streamerCard{
          background:rgba(11,18,32,.82);

          border:1px solid rgba(255,255,255,.08);

          border-radius:30px;

          padding:28px;

          text-decoration:none;

          color:white;

          text-align:center;

          backdrop-filter:blur(14px);

          transition:.25s;
        }

        .streamerCard:hover{
          transform:translateY(-8px);
          border-color:#3b82f6;
          box-shadow:
          0 0 30px rgba(59,130,246,.18);
        }

        .avatar{
          width:130px;
          height:130px;
          border-radius:999px;
          object-fit:cover;

          margin-bottom:22px;

          border:4px solid rgba(255,255,255,.12);
        }

        .streamerCard h2{
          margin:0;
          font-size:28px;
          font-weight:800;
        }

        .platform{
          display:inline-block;

          margin-top:10px;
          margin-bottom:12px;

          padding:8px 16px;

          border-radius:999px;

          background:
          linear-gradient(
            135deg,
            #2563eb,
            #3b82f6
          );

          font-size:14px;
          font-weight:700;
        }

        .streamerCard p{
          color:#d1d5db;
          font-size:15px;
          line-height:1.5;
        }

      `}</style>

    </div>
  )
}