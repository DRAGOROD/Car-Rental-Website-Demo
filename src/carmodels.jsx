
import Toyota from './assets/Toyotabg.png'
import Bmw from './assets/BMWbg.png'
import Ford from './assets/Fordbg.png'
import Honda from './assets/Hondabg.png'
import Hyundai from './assets/Hyundaibg.png'
import Mahindra from './assets/Mahindrabg.png'
import Tata from './assets/Tatabg.png'
import Tesla from './assets/Teslabg.png'
import {useState} from 'react'
function carmodels({scrollToSearch}){

let carLists=[
    {
    Name: "Toyota Sedan",
    Image:Toyota,
    Model: "Camry",
    Mark: "Sedan",
    Year: 2023,
    Doors: 4,
    AC: 'YES',
    Transmission: "Automatic",
    Fuel: "Petrol",
    Rent:'₹850'
  },
  {
    Name: "Honda Sedan",
    Image:Honda,
    Model: "Civic",
    Mark: "Sedan",
    Year: 2022,
    Doors: 4,
    AC: 'YES',
    Transmission: "Manual",
    Fuel: "Petrol",
    Rent:'₹775'
  },
  {
    Name: "Hyundai SUV",
    Image:Hyundai,
    Model: "Creta",
    Mark: "SUV",
    Year: 2024,
    Doors: 4,
    AC: 'YES',
    Transmission: "Automatic",
    Fuel: "Diesel",
    Rent:'₹685'
  },
  {
    Name: "Tata SUV",
    Image:Tata,
    Model: "Nexon",
    Mark: "SUV",
    Year: 2023,
    Doors: 4,
    AC: 'YES',
    Transmission: "Manual",
    Fuel: "Electric",
    Rent:'₹595'
  },
  {
    Name: "Mahindra Thar",
    Image:Mahindra,
    Model: "Thar",
    Mark: "SUV",
    Year: 2022,
    Doors: 3,
    AC: 'YES',
    Transmission: "Manual",
    Fuel: "Diesel",
    Rent:'₹580'
  },
  {
    Name: "Ford Coupe",
    Image:Ford,
    Model: "Mustang",
    Mark: "Coupe",
    Year: 2021,
    Doors: 2,
    AC: 'YES',
    Transmission: "Automatic",
    Fuel: "Petrol",
    Rent:'₹845'
  },
  {
    Name: "BMW SUV",
    Image:Bmw,
    Model: "X5",
    Mark: "SUV",
    Year: 2024,
    Doors: 4,
    AC: 'YES',
    Transmission: "Automatic",
    Fuel: "Diesel",
    Rent:'₹985'
  },
  {
    Name: "Tesla Sedan",
    Image:Tesla,
    Model: "Model 3",
    Mark: "Sedan",
    Year: 2023,
    Doors: 4,
    AC: 'YES',
    Transmission: "Automatic",
    Fuel: "Electric",
    Rent:'₹650'
  }
]

const [selectedCar, setSelectedCar] = useState(carLists[0])

return (
    <>
    <h2 id="car-models-heading" className="block-el">Our Vehicle Fleet</h2>
    <p id='car-models-para' className="block-el">Pick from our top-quality vehicles and make your next adventure unforgettable.</p>
    <div id="car-models-section">
      <div id="car-names" className="block-el">
        {carLists.map((car, i) => (
           <div
            key={i}
            className={`names ${selectedCar.Name === car.Name ? "active" : ""}`}
            onClick={() => setSelectedCar(car)}
          >
        {car.Name}
        </div>
        ))}
      </div>

      <div id="carimg-container" className="block-el">
        <img
          src={selectedCar.Image}
          id="carmodel-img"
          alt={selectedCar.Name}
        />
      </div>

      <div id="table-container" className="block-el">
        <table id="car-table">
          <thead>
            <tr>
              <th id="thead-th" colSpan="2"><span id="rate">{selectedCar.Rent}</span> /Rent Per Day</th>
            </tr>
          </thead>
          <tbody>
            <tr className="car-details-row">
              <td className="car-details-heading">Model:</td>
             
              <td className="car-details-value">{selectedCar.Model}</td>
            </tr>
            <tr className="car-details-row">
              <td className="car-details-heading">Mark:</td>
             
              <td className="car-details-value">{selectedCar.Mark}</td>
            </tr>
            <tr className="car-details-row">
              <td className="car-details-heading">Year:</td>
              
              <td className="car-details-value">{selectedCar.Year}</td>
            </tr>
            <tr className="car-details-row">
              <td className="car-details-heading">Doors:</td>
             
              <td className="car-details-value">{selectedCar.Doors}</td>
            </tr>
            <tr className="car-details-row">
              <td className="car-details-heading">AC:</td>
              
              <td className="car-details-value">{selectedCar.AC}</td>
            </tr>
            <tr className="car-details-row">
              <td className="car-details-heading">Transmission:</td>
              
              <td className="car-details-value">{selectedCar.Transmission}</td>
            </tr>
            <tr className="car-details-row">
              <td className="car-details-heading">Fuel:</td>
             
              <td className="car-details-value">{selectedCar.Fuel}</td>
            </tr>
          </tbody>
        </table>
        <div id="reserve-btn" onClick={scrollToSearch} className="block-el">RESERVE NOW</div>
      </div>
    </div>
    </>
)

}

export default carmodels;