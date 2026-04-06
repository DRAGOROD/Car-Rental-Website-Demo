import Contacticon from './assets/contactbg.png'
import { useState } from "react";






function Contact(){
const faqs = [
    {
      q: "1. What do I need to rent a car?",
      a: "To rent a car, you typically need a valid driver's license, a government-issued ID, and a credit or debit card. Some rentals may also require a minimum age (usually 21 or 25) depending on the vehicle type."
    },
    {
      q: "2. Can I modify or cancel my booking?",
      a: "Yes, you can easily modify or cancel your booking through our website or by contacting our support team. Cancellation policies may vary, but many bookings offer free cancellation within a specific time frame."
    },
    {
      q: "3. What is your fuel policy?",
      a: "We typically follow a “full-to-full” policy your car is provided with a full tank and should be returned the same way. If not, fuel charges may apply based on current rates."
    }
  ];
const [activeIndex, setActiveIndex] = useState(null);

return (
    <div id="contact-container">
        <div id="faq-container" className="block-el">
      <h3 id="faq-heading">Most Asked FAQ:</h3>

      {faqs.map((item, i) => (
        <div key={i}>
          <h4
            className={`faq-question ${activeIndex === i ? "active" : ""}`}
            onClick={() =>
              setActiveIndex(activeIndex === i ? null : i)
            }
          >
            {item.q} &nbsp; ▼
          </h4>

          {activeIndex === i && (
            <p className="faq-answer">{item.a}</p>
          )}
        </div>
      ))}
    </div>
        <div id="contact-card" className="block-el">
            <img src={Contacticon} alt="Contact Us Icon" id="contact-icon" loading="lazy"/>
            <h3 id="contact-card-heading">Contact Operator</h3>
            <p id="contact-card-para">Have questions? Our friendly and expert Operators are here to help.</p>
            <div id="contact-card-btn">CONTACT</div>
        </div>
    </div>
)

}

export default Contact;