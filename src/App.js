import Navbar from './Components/Navbar';
import Images from './Components/Images';
import Service from './Components/Services';
import Steps from './Components/Steps'
import Review from './Components/Review';
import Contact from './Components/Contact';
import About from './Components/About';

import "./style.css"
import "./style2.css"
import "./style3.css"
import "./style4.css"
import "./style5.css"
import "./style6.css"
import "./style7.css"


function App()
{
  return(
    <div id='home'>
  <Navbar></Navbar>
  <Images/>
  <Service/>
  <Steps/>
  <Review/>
  <Contact/>
  <About/>
    </div>
    
  )
}
export default (App)
