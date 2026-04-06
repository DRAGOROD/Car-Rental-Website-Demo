import Aboutimg from './assets/Aboutsectionimgbg.png'
import CCicon from './assets/crosscountryiconbg.png'
import NhFees from './assets/nohiddenchargesiconbg.png'
import Supporticon from './assets/supporticonbg.png'

function Plans({scrollToContact}){

 
  return (
    <>
    <div id="black-label" className="block-el">
       <div id="label-text"> 
        <h3 id="black-label-heading">Experience the road in style with our Elite vehicles!</h3>
        <p id="black-label-para">Top Airport.Local Suppliers.<span id="black-label-para-red">24/7</span> Support</p>
        </div>
    </div>
    <div id="about-container">
      <img src={Aboutimg} alt="About Section Img" id="about-img" className="block-el" loading="lazy"/>
      <div id="about-text-container">
        <div id="about-left-text">
          <h6 id="about-left-text-1" className="block-el">Why Choose us</h6>
          <h3 id="about-left-text-2" className="block-el">Where Price Meets <br/>Perfection.</h3>
          <p id="about-left-para" className="block-el">Discover unbeatable deals designed to give you maximum value without compromise. Enjoy premium vehicles, seamless service, and a smooth rental experience at prices that make sense.</p>
          <div id="find-details-btn" onClick={scrollToContact} className="block-el">Find Details   &#62;</div>
        </div>
        <div id="about-right-cards">
          <div className="right-cards block-el" >
          <img src={CCicon} alt="About Right Image 1" className="about-right-img" loading="lazy"/>
          <h4 className="about-right-heading">Drive Across the Nation</h4>
          <p className="about-right-para">Take the road further with top-tier vehicles designed for unforgettable cross-country journeys.</p>
          </div>
          <div className="right-cards block-el">
          <img src={NhFees} alt="About Right Image 1" className="about-right-img" loading="lazy"/>
          <h4 className="about-right-heading">Zero Hidden Fees</h4>
          <p className="about-right-para">Enjoy complete peace of mind with transparent, upfront pricing no hidden fees, ever.</p>
          </div>
          <div className="right-cards block-el">
          <img src={Supporticon} alt="About Right Image 1" className="about-right-img" loading="lazy"/>
          <h4 className="about-right-heading">Always There. Always Better.</h4>
          <p className="about-right-para">We're with you every step of the way from booking to drop-off, Our dedicated support ensures you're never left stranded</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )


}

export default Plans