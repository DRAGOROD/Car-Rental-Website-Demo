import CarApp from './assets/carApp.png'
import AppleStoreBtn from './assets/AppleStoreBtn.png'
import GooglePlayBtn from './assets/GooglePlayBtn.png'


function Phoneapp(){

return (
    <div id="phoneapp-container">
        <div id="phoneapp-left-section" className="block-el">
    <h3 id="phoneapp-heading">Download our App and get Everything you need, right in your pocket.</h3>
    <p id="phoneapp-para">Exclusive App-Only Deals. Real-Time Availability. Easy Booking Management. Faster Check-In & Pickup. Live Notifications & Updates. Insurance Options. User Rewards & Points.</p>
    <div id="phoneapp-Btn-container" className="block-el">
    <img src={GooglePlayBtn} alt="Google Play Store Button" className='store-btn' />
    <img src={AppleStoreBtn} alt="Google Play Store Button" className='store-btn'/>
    </div>
    </div>
    <div id="phoneapp-right-section" className="block-el">
        <img src={CarApp} alt="Our App Picture" id="carapp-img"/>
    </div>
    </div>
)

}

export default Phoneapp;