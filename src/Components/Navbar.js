import one from "../assests/images/one.png"
function Navbar()
{
  return(
   <div class="navbar-container">
    <div class="navbar-1">
      <h1><img src={one} alt="Home"></img>Sky-Towers</h1>
    </div>
    <div class="navbar-2">
    <p>HOME</p> <h3>.</h3>
    <p>SERVICES</p><h3>.</h3>
    <p>STEPS</p><h3>.</h3>
    <p>REVIEWS</p><h3>.</h3>
    <p>CONTACT</p><h3>.</h3>
    <p>ABOUT US</p><h3>.</h3>
    </div>
    <div class="navbar-3">
    <button>Call Us Today</button>
    </div>
    <div class="navbar-4">
    <svg id="menuicon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    </div>
   </div>

  )
}
export default (Navbar)