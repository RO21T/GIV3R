import Image from "next/image"

export default function Home() {
  return (
    <body>
      <title>GIV3R</title>
      <nav className="navbar">
      <button className="home">HOME</button>
        <button className="about">ABOUT</button>
        <button className="events">EVENTS</button>
        <Image className="title" src={"/title.png"} width={600} height={300} alt="GIV3R"/>
        <button className="volunteer">VOLUNTEER</button>
        <button className="login">LOGIN</button>
        <button className="register">REGISTER</button>
      </nav>
      <div className="image">
        <a className="tagline">Spreading smiles, without borders!</a>
        <Image className="smile" src={"/smile.png"} width={1000} height={500} alt="Smile"/>
      </div>
      <a href="#what">
        <div className="scroll"></div>
        <div className="dot"></div>
      </a>
      <div className="what" id="what">
        <p>What is<br/><b className="name">GIV3R</b>?</p>
        <hr className="line"/>
        <p className="flip">Flip to find out!</p>
      </div>
    </body>
  )
}
