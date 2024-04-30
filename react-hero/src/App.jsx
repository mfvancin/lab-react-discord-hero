import logoImg from  "./assets/discord-logo-white.png"
import menuImg from "./assets/menu-icon.png"
import discordImg from "./assets/discord-background.png"

import './App.css';

function App() {
  return (
    <div className="App">

      <nav className='navbar'>
        <img src= {logoImg} className='logo'/>
        <img src={menuImg} className='menuImage'/>
      </nav>

      <div className="container">
        <h1 >IMAGINE A PLACE...</h1>
        <p className="paragraph">...where you can belong to a school club, a gaming group, or a <br />
         worlswide art community. where just you and a handful of <br />friends can spend time together. A place that makes it easy to <br />talk every day and hang out more often</p>
        <button className= "downloadBtn">Download for Mac</button>
        <br />
        <br />

        <button className="openDisord">Open Discord in your browser</button>
        <img className="background-image" src={discordImg}/>
      </div>
      
    </div>
  );
}

export default App;