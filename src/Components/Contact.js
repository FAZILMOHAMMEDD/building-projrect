import hours from "../assests/images/hours.png"
import call from "../assests/images/call.png"
import mail from "../assests/images/mail.png"
function Contact()
{
  return(
    <div class="contact">
       <h1>CONTACT</h1>
       <div class="contact-container">
        <div class="contact-1">
         <img src={hours} alt="hours"></img>
         <h3>OPENING HOURS</h3>
         <p>MONDAY-FRIDAY</p>
        </div>
        <div class="contact-1">
         <img src={call} alt="call"></img>
         <h3>CALL US</h3>
         <p>123456789</p>
        </div>
        <div class="contact-1">
         <img src={mail} alt="mail"></img>
         <h3>MAIL US</h3>
         <p>ABCDEFS123@gmail.com</p>
        </div>
       </div>
    </div>
  )
}

export default(Contact)