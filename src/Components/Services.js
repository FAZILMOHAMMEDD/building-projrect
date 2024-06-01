import four from "../assests/images/four.jpg"
import five from "../assests/images/five.jpeg"
import six from "../assests/images/six.jpg"
import seven from "../assests/images/seven.jpg"
import eight from "../assests/images/eight.jpg"
import nine from "../assests/images/nine.jpg"
function Service()
{
  return(
    <div class="services">
      <div class="services-1">
        <h1>SERVICES</h1>
      </div>
      <div class="services-2">
        <div class="services-card">
        <img src={four} alt="paint" ></img>
          <h3>Painting</h3>
          <p>For High-Quality Painting Ready For You can Count On Us For Different Types Of Pinting</p>
        <button>Paint Service</button>
        </div>
        <div class="services-card">
        <img src={five} alt="stucco"></img>
          <h3>Stucco</h3>
          <p>For High-Quality Painting Ready For You can Count On Us For Different Types Of Pinting</p>
        <button>Stucco Service</button>
        </div>
        <div class="services-card">
        <img src={six} alt="Concetre"></img>
          <h3>Concrete Cire</h3>
          <p>For High-Quality Painting Ready For You can Count On Us For Different Types Of Pinting</p>
        <button>Concrete Service</button>
        </div>
        <div class="services-card">
        <img src={seven} alt="paint"></img>
          <h3>Spray Wall</h3>
          <p>For High-Quality Painting Ready For You can Count On Us For Different Types Of Pinting</p>
        <button>Spray Service</button>
        </div>
        <div class="services-card">
        <img src={eight} alt="paint"></img>
          <h3>Interior Design</h3>
          <p>For High-Quality Painting Ready For You can Count On Us For Different Types Of Pinting</p>
        <button>Interior Service</button>
        </div>
        <div class="services-card">
        <img src={nine} alt="paint"></img>
          <h3>Electric</h3>
          <p>For High-Quality Painting Ready For You can Count On Us For Different Types Of Pinting</p>
        <button>Electric Service</button>
        </div>
        
        

      </div>
    </div>
  )
}
export default(Service)