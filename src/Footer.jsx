

function Footer(){

return (
    <div id="footer-container">
        <div id="fColumn-1">
            <h3>CAR <span id="thin-text">Rental</span></h3>
            <p>We have the perfect car for your needs, get in touch with us today.</p>
            <address>
                <p><a className="address-info" href="tel:5555599999">&#9742; (555)-5599-999</a></p>
                <p><a className="address-info" href="mailto:jitmishra40@gmail.com">&#9993; MyEmail@Gmail.com</a></p>
                <p>&#169; made by Joy Misra</p>
            </address>
            </div>
            <div id="fColumn-2">
                <h3>COMPANY</h3>
               <p><a>Delhi</a></p>
                <p><a>Careers</a></p>
               <p><a>Mobile</a></p>
               <p><a>Blog</a></p>
               <p><a>How We Work</a></p>
            </div>
            <div id="fColumn-3">
                <h3>Working Hours</h3>
                <p>Mon-Fri 10:00AM-10:00PM</p>
                <p>Sat: 9AM-8PM</p>
                <p>Sun:Closed</p>
            </div>
            <div id="fColumn-4">
                <h3>SUBSCRIPTION</h3>
                <p id="fc4-para">Subscribe with your email address<br/> for our latest News and Updates</p>
                <input type="email" placeholder="Enter Email Here..."/>
                <div id="submit-btn">SUBMIT</div>
            </div>
    </div>
)

}

export default Footer;