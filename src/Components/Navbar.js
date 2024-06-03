
import { useState } from 'react'
import one from '../assests/images/one.png'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar()
{
var[ismobile,setmobile]=useState(false)
function handle()
{
  setmobile(!ismobile)
}

  return(
   <div className="navbar-container">
    <div className="navbar-1">
      <h1><img src={one} alt="Home"></img>Sky-Towers</h1>
    </div>
    <div className={ismobile?"nav-links":"navbar-2"}>
    <p><a href="#home">HOME</a></p> 
    <p><a href="#servies">SERVICES</a></p>
    <p><a href="#step">STEPS</a></p>
    <p><a href="#review">REVIEWS</a></p>
    <p><a href="#contact">CONTACT</a></p>
    <p><a href="#about">ABOUT</a></p>
    </div>
    <div className="navbar-3">
    <button style={{padding:"10px",backgroundColor:"green",color:"white"}}>call us Today</button>
    </div>
    <div onClick={handle} className='hulk' >
{ismobile?<p>x</p>:<GiHamburgerMenu />}
    </div>
   </div>

  )
}
export default (Navbar)
