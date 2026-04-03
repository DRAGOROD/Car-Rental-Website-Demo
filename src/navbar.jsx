import CarRentalLogo from './assets/Rentallogowb.png'

import Hero from './Hero';
import Carmodel from './carmodels';
import Plans from './Plans';
import Review from './Review';
import Contact from './Contact';
import Searchbox from './Booking-Search-box.jsx'

import { useRef } from 'react';

function navbar(){

  let heroRef=useRef(null);
  let searchRef=useRef(null);
  let aboutRef=useRef(null);
  let carModelRef=useRef(null);
  let reviewRef=useRef(null);
  let contactRef=useRef(null);

function scrollToContact(){
  contactRef.current.scrollIntoView({behavior:"smooth"})
}

function ScrollToSearch(){
  searchRef.current.scrollIntoView({ behavior: "smooth" })
}

return (
    <div>
<div id="nav-container">
    <img src={CarRentalLogo} alt="Website Car Logo" id="website-logo"/>
    <nav>
        <ul id="nav-options">
            <li className="options"><a onClick={()=>heroRef.current.scrollIntoView({behavior: "smooth"})}>Home</a></li>
            <li className="options"><a onClick={()=>aboutRef.current.scrollIntoView({behavior: "smooth"})}>About</a></li>
            <li className="options"><a onClick={()=>carModelRef.current.scrollIntoView({behavior: "smooth"})}>Car Models</a></li>
            <li className="options"><a onClick={()=>reviewRef.current.scrollIntoView({behavior: "smooth"})}>Testimonials</a></li>
            <li className="options"><a onClick={()=>contactRef.current.scrollIntoView({behavior: "smooth"})}>Contact</a></li>
        </ul>
    </nav>
    <button id="login-btn">LOGIN / SIGNUP</button>
</div>
  <div ref={heroRef}>
    <Hero scrollToSearch={ScrollToSearch}/>
  </div>
  <div ref={searchRef}>
      <Searchbox/>
  </div>
  <div ref={aboutRef}>
    <Plans scrollToContact={scrollToContact}/>
  </div>
  <div ref={carModelRef}>
    <Carmodel scrollToSearch={ScrollToSearch}/>
  </div>
  <div ref={reviewRef}>
    <Review/>
  </div>
  <div ref={contactRef}>
    <Contact/>
  </div>
</div>
)

}

export default navbar;