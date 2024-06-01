import choose from "../assests/images/choose.png" 
import sketch from "../assests/images/sketch.png" 
import crane from "../assests/images/crane.png"
import bus from "../assests/images/bus.png"
function Steps()
{
  return(
    <div class="steps">
      <div class="steps-1">
      <h1>STEPS</h1>
      </div>
      <div class="step-images">
        <div class="step-images-1">
       <img src={choose} alt=""></img>
       <h4>SELECT YOUR MATERIAL</h4>
       </div>
       <div class="step-images-1">
       <img src={sketch} alt=""></img>
       <h4>CO CREATE YOUR DESIGN</h4>
       </div>
       <div class="step-images-1">
       <img src={crane} alt=""></img>
       <h4>WE CONSTRUCT YOUR HOME</h4>
       </div>
       <div class="step-images-1">
       <img src={bus} alt=""></img>
       <h4>YOU MOVE ON</h4>
       </div>
      </div>
    </div>
  )
}
export default (Steps)