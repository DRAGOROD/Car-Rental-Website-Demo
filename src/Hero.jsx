import Herobg1 from './assets/herobackground1.png'
import Herobg2 from './assets/herobackground2.jpeg'
import Herobg3 from './assets/herobackground3.png'
import Herobg4 from './assets/herobackground4.png'
import Herobg5 from './assets/herobackground5.png'
import Carimg from './assets/Carimg.png'

function Hero({scrollToSearch}){
  return(
    <>
      <div id="hero-container">
        <div id="hero-wrapper">
           <img src={Herobg1} className="hero-img" id="herobg1"/>
           <img src={Herobg2}  className="hero-img" id="herobg2"/>
           <img src={Herobg3}  className="hero-img" id="herobg3"/>
           <img src={Herobg4}  className="hero-img" id="herobg4"/>
           <img src={Herobg5}  className="hero-img" id="herobg5"/>
        </div>
      </div>
      <img src={Carimg} id="car-img"/>
      <div id="hero-heading">Rent<br/>Ride<br/>Repeat</div>
      <ul id="hero-details">
        <h5>Rent The Car of Your Dreams:</h5>
        <li>Affordable Price</li>
        <li>Unlimited Miles</li>
        <li>Flexable Pickup Option</li>
        <li>Much More</li>
      </ul>
     <button id="hero-cta-btn" onClick={scrollToSearch}>Book Ride 🚖</button>
    </>
  )   

}

export default Hero;