import three from "../assests/images/three.png"
function Images()
{
  return(
    <div class="images">
      <div class="images-1">
     <img src={three} alt="home"></img>
     <div class="images-2">
    <button>Book Free Consultation</button>
   </div>
   <div class="images-3">
    <button>Download Portfolio</button>
   </div>
   </div>
  
    </div>
  )
}
export default (Images)