import React from 'react'
import './hotelApartment.css'
import hotel_Apartment_A from './../../Assets/images/hotel_Apartment_A.png'
import hotel_Apartment_B from './../../Assets/images/hotel_Apartment_B.png'
import hotel_Apartment_C from './../../Assets/images/hotel_Apartment_C.png'
import hotel_Apartment_D from './../../Assets/images/hotel_Apartment_D.png'

const HotelApartment = () => {
  return (
    <div className='hotel-full-page-wrapper'>
      <div className='hotel-top-background-wrapper'>
        <h1 className='hotel-top-text-heading'>Hotel & Apartments</h1>
      </div>
      <div className='hotel-main-content-wrapper'>
        <p className='hotel-para-a'>The hotel and accommodation industry is working hard to welcome guests back. hotel gym design and in-room fitness solutions will be an important consideration moving forward. Gym Solutions specialises in hotel gym design and installation and recommends the hospitality industry look at two ranges exclusively imported by us – TuffStuff Strength Equipment and Gym Rax® Storage and Suspension Bays. Both engineered and manufactured in the USA, exclusively available in India through Gym Solutions.</p>
        <p className='hotel-para-b'>Built to stand the test of time, the TuffStuff Fitness International range is a great option for hotel fitness centres and apartment complexes, any place where space is at a premium and quality is in high demand.</p>
        <div className='hotel-image-container-a'>
          <img src={hotel_Apartment_A} alt='' className='hotel-image-item'></img>
        </div>
        <p className='hotel-para-c'>Since their inception 50 years ago, TuffStuff Fitness International has become recognized worldwide as a leading manufacturer of high quality consumer and commercial strength products. Their large range offers Single, Dual and Multi-Functional Stations providing the advantage of a space friendly small footprint, perfect for hotel gyms or in-room fitness.</p>
        <ul className='hotel-list-item-top-container'>
          <li>TuffStuff CalGym</li>
          <li>TuffStuff Evolution</li>
          <li>TuffStuff Apollo</li>
          <li>TuffStuff Bio-Arc</li>
          <li>TuffStuff Performance Plus</li>
        </ul>
        <div className='hotel-image-container-b'>
          <img src={hotel_Apartment_B} alt='' className='hotel-image-item'></img>
        </div>
        <p className='hotel-para-d'>We can customise equipment configurations, frame colours, and upholstery to match your brand. Equipment comes with a Commercial and Light Commercial warranty. TuffStuff’s commercial strength equipment is built to exacting standards, with full commercial-grade components including 7 and 11-gauge tubular steel, inert-gas MIG welded construction, and certified USA-made cables. Whether you are looking to outfit a world class health club or you need single equipment stations for in-room fitness, with TuffStuff you will receive unmatched product quality and exceptional support.</p>
        <p className='hotel-para-e'>The hospitality industry has realised that fitness requires a ‘less is more’ approach, opening floor plans and increasingly variable workout types. Packing a disparate amount of cardio and weights in to a room is an outdated approach. The new fitness space is about maximising exercise opportunities for the traveller, whether that is in a fitness centre or in their room.</p>
        <div className='hotel-image-container-c'>
          <img src={hotel_Apartment_C} alt='' className='hotel-image-item'></img>
        </div>
        <p className='hotel-para-f'>GymRax is fully customisable with multi-configurable storage and suspension systems that begin with a single bay and end just where you need them to.  They have also developed the world’s smallest free standing rigging footprint for functional training – the Free Anchor. Designed to eliminate the costly scanning and installation requirement of concrete bolting like other suspension systems and allowing the future portability of your Gym Rax rigging.   The storage options fit foam rollers, medicine balls, wall balls, bosu and Swiss balls, yoga mats, dumbbells, kettlebells and much more!</p>
        <div className='hotel-image-container-d'>
          <img src={hotel_Apartment_D} alt='' className='hotel-image-item'></img>
        </div>
        <p className='hotel-para-g'>Hilton’s Five Feet to Fitness™ offers a fully equipped workout space just five feet from the bed, especially pertinent in these times. Available in select hotels, Five Feet to Fitness rooms feature more than 11 different pieces of fitness equipment and accessory options, all in such a small space. A fully stocked Gym Rax functional training rig is featured within each room inclusive of an embedded touch screen kiosk providing over 200 bespoke guided exercise tutorials and over 25 workout classes designed to invigorate and motivate the guest.</p>
        <p className='hotel-para-h'>Gym Solutions do complete gym renovations so if you need flooring, painting, locker or change rooms – we can do the whole lot. Think of the time and money you will save working with one company that can provide the complete gym solution. We offer:</p>
        <ul className='hotel-list-item-lower-container'>
          <li>2D/3D Floor Plans and Design</li>
          <li>Delivery and installation</li>
          <li>Maintenance</li>
          <li>Package Prices</li>
        </ul>
        <p className='hotel-para-i'>Whether you are looking for Remanufactured, Second hand gym equipment and New Commercial Gym Equipment we are certain to provide a functional training space for your guests to enjoy, just call 02 9008 1481 or email us at info@gymsolutions.com.au</p>
      </div>
    </div>
  )
}

export default HotelApartment;