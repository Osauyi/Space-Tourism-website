import React, {useState} from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Crew from "./pages/crew.jsx"
import Home from "./pages/Home.jsx"
import Destination from "./pages/Destination.jsx"
import Technology from "./pages/Technology.jsx"
import Logo from "./shared/logo.svg"
import Close from "./shared/icon-close.svg"
import Open from "./shared/icon-hamburger.svg"







function App() {



  const [selectedLink, setSelectedLink] = useState("home");

  const handleLinkClick = (linkIndex) => {
    setSelectedLink(linkIndex);
  };

    function openNav() {
    document.querySelector(".links").style.width = "75%";
  }

  function closeNav() {
    document.querySelector(".links").style.width = "0";
}


document.addEventListener('mousedown',function(event){
        var domBody    = document.querySelector(".links")
        if(domBody.style.width == '75%'){
                if(!domBody.contains(event.target)){
                        document.querySelector(".links").style.width = "0";
                }
        }       
})


  return (
      <BrowserRouter>
        <header>
          <nav>
            <img alt='' src={Logo}/>
            <div className="line"></div>
              <div className="links">
              <button class="closebtn" onClick={closeNav}><img alt='' src={Close}/></button>
              <Link to="/"
              className={selectedLink === "home" ? 'navButtonsClicked' : 'navButtonsNotClicked'}
              onClick={() => handleLinkClick("home")}
              ><span>00</span> Home</Link>

              <Link to="/Destination"
              className={selectedLink === "Destination" ? 'navButtonsClicked' : 'navButtonsNotClicked'}
              onClick={() => handleLinkClick("Destination")}
              ><span>01</span> Destination</Link>

              <Link to="/Crew"
              className={selectedLink === "Crew" ? 'navButtonsClicked' : 'navButtonsNotClicked'}
              onClick={() => handleLinkClick("Crew")}
              ><span>02</span> Crew</Link>

              <Link 
              to="/Technology"
              className={selectedLink === "Technology" ? 'navButtonsClicked' : 'navButtonsNotClicked'}
              onClick={() => handleLinkClick("Technology")}
              ><span>03</span> Technology</Link>
              
              </div>
            <button class="openbtn" onClick={openNav}><img alt='' src={Open}/></button>  
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/Crew" element={<Crew /> } />
          <Route path="/Destination" element={<Destination /> } />
          <Route path="/Technology" element={<Technology /> } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
