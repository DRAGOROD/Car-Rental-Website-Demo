import { useState } from "react";
import NoResult from './assets/no-results.png'
function Searchbox(){

    let address=[
`Visakhapatnam, Andhra Pradesh, India`,
`Itanagar, Arunachal Pradesh, India`,
`Dispur, Assam, India`,
`Patna, Bihar, India`,
`Raipur, Chhattisgarh, India`,
`Panaji, Goa, India`,
`Gandhinagar, Gujarat, India`,
`Chandigarh, Haryana, India`,
`Shimla, Himachal Pradesh, India`,
`Ranchi, Jharkhand, India`,
`Bengaluru, Karnataka, India`,
`Thiruvananthapuram, Kerala, India`,
`Bhopal, Madhya Pradesh, India`,
`Mumbai, Maharashtra, India`,
`Imphal, Manipur, India`,
`Shillong, Meghalaya, India`,
`Aizawl, Mizoram, India`,
`Kohima, Nagaland, India`,
`Bhubaneswar, Odisha, India`,
`Chandigarh, Punjab, India`,
`Jaipur, Rajasthan, India`,
`Gangtok, Sikkim, India`,
`Chennai, Tamil Nadu, India`,
`Hyderabad, Telangana, India`,
`Agartala, Tripura, India`,
`Lucknow, Uttar Pradesh, India`,
`Dehradun, Uttarakhand, India`,
`Kolkata, West Bengal, India`,

]

const [showDropoff, setShowDropoff] = useState(false);
const [elNoResult, setElNoResult]=useState(false);


    return(
        <>
        <h2 id="booking-heading" className="block-el">Book a Car</h2>
    <div id="booking-container" className="block-el">
        <form id="booking-form">
           <select id="pickup-select" required>
             {address.map((v,i)=><option key={i} id="pickup-option">{v}</option>)}
           </select><hr/>
           <input type="date" name="pickup-date" className="pickup-dateIn"/>
           <input type="time" name="pickup-time" className="pickup-timeIn"/>
            <hr id="highpen"/>
             {showDropoff && (
            <>
              <select id="dropoff-select">
              {address.map((v, i) =><option key={i} id="dropoff-option">{v}</option>)}
              </select>
              <hr />
            </>
        )}
            <hr hidden/>
           <input type="date" name="dropoff-dateIn"  className="dropoff-dateIn"/>
           <input type="time" name="dropoff-timeIn"  className="dropoff-timeIn"/>
           <div type="search" id="search-btn" onClick={(x)=>setElNoResult(x.target)}>
            <svg width="40" height="40" fill="white" class="bi bi-search" viewBox="-11 -11 40 40">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
         </div>
        </form>
    </div>
    <input type="checkbox" id="dropoff-enable-option" onChange={(e) => setShowDropoff(e.target.checked)}/>
    <label>Different Location Dropoff</label>
    {elNoResult && (<img src={NoResult} alt="No Result Image" id='no-result-img'/>)}
    </>
    )
}

export default Searchbox