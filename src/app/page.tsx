import Image from "next/image"

export default function Home() {
  return (
    <body>
      <title>GIV3R</title>
      <nav className="navbar">
        <Image className="title" src={"/title.png"} width={600} height={300} alt="GIV3R"/>
        <button className="home">HOME</button>
        <button className="about">ABOUT</button>
        <button className="events">EVENTS</button>
        <button className="volunteer">VOLUNTEER</button>
        <button className="login">LOGIN</button>
        <button className="register">REGISTER</button>
      </nav>
    </body>
  )
}