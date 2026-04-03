import Staricon from './assets/staricon.png'


function Review(){

    
    let clientRatingLists = [
  {
    image: "https://i.pravatar.cc/100?img=11",
    statement: "“Booked a car within minutes. Smooth ride and zero hassle pickup. Definitely using this again!”",
    name: "Arjun Mehta",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=12",
    statement: "“The car was super clean and well maintained. Customer support was quick and helpful.”",
    name: "Riya Sharma",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=13",
    statement: "“Great experience overall, but delivery was slightly delayed. Still worth it.”",
    name: "Karan Verma",
    ratings: "⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=14",
    statement: "“Affordable pricing and wide variety of cars. Loved the SUV I rented for my trip.”",
    name: "Sneha Kapoor",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=15",
    statement: "“Booking process was simple, but I wish there were more luxury options available.”",
    name: "Rahul Das",
    ratings: "⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=16",
    statement: "“Best rental service I’ve used so far. Transparent pricing and no hidden charges.”",
    name: "Neha Gupta",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=17",
    statement: "“Car performance was excellent. Perfect for long drives with family.”",
    name: "Vikram Singh",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=18",
    statement: "“Decent service. The car was good, but pickup location was a bit far.”",
    name: "Pooja Nair",
    ratings: "⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=19",
    statement: "“Loved the quick verification and instant booking. Saved me a lot of time.”",
    name: "Aman Yadav",
    ratings: "⭐⭐⭐⭐⭐"
  },
  {
    image: "https://i.pravatar.cc/100?img=20",
    statement: "“Good cars and reasonable rates. Will recommend to friends.”",
    name: "Priya Chatterjee",
    ratings: "⭐⭐⭐⭐"
  }
];
    return(
         <div id="review-container">
         <h3 id="review-heading" className="block-el">Client's <span id="polygon">Review</span></h3>
         <div id="star-container" className="block-el">
            <img src={Staricon} alt="Star Icon" className="star-icon"/>
            <img src={Staricon} alt="Star Icon" className="star-icon"/>
            <img src={Staricon} alt="Star Icon" className="star-icon"/>
            <img src={Staricon} alt="Star Icon" className="star-icon"/>
            <img src={Staricon} alt="Star Icon" className="star-icon"/>
         </div>
         <p id="review-para">Hear it from our clients: real experiences, real results, real satisfaction.</p>
         <div id="slider-container">
            {clientRatingLists.map((v,i)=>
            <div className="swiper-slid box block-el" key={i}>
                <img className='client-image' src={v.image} alt="Client Image"/>
                <p className="client-comment">{v.statement}</p>
                <h5 className="client-name">{v.name}</h5>
                <div className="client-rating">{v.ratings}</div>
            </div>)}
         </div>
         </div>
    )

}

export default Review;