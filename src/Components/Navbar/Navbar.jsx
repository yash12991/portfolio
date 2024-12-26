import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Heading from '../Heading/Heading'
import dark from '../Assets/dark.png'
import light from '../Assets/light.png'
const Navbar = ({mode,toggleMode}) => {
 const [menu,setmenu]=useState("home")
 const getButtonStyle = (buttonName) => ({
  backgroundColor: menu === buttonName ? 'pink' : 'aqua',
  border: menu === buttonName ? '1px solid red' : '1px solid black',
});
const navbarStyle = {
  backgroundColor: mode === 'light' ? '#0183F6' : '#040D3A', // Navbar background
  
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

  return (
   
    <>

    <nav >
    <div className="header"style={navbarStyle}>
    <div className="heading"> <Heading/></div>
    

    
   
   <div className="options">
    
    <Link to="/home" ><button
  onClick={() => setmenu("home")}
  style={getButtonStyle("home")}
  aria-label="Home Page"
>
  Home
</button>
</Link>
   <Link to="/abouts"><button onClick={()=>{setmenu("About")}}style={getButtonStyle("About")}>About Me</button></Link>
<Link to="/projects"  ><button onClick={()=>{setmenu("project")}}    style={getButtonStyle("project")}>My Projects</button></Link>
<Link to="/certifications"><button onClick={()=>{setmenu("certificate")}}    style={getButtonStyle("certificate")}>Certifications</button></Link>
   <img className='dark-img' onClick={toggleMode} src={mode==='dark'?dark:light} alt="hi"  />
    </div>
  
  </div></nav></>
  )
}

export default Navbar