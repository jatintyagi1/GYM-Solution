import React from 'react'
import '../Styles/NavCardPage/warranty.css'
import Brand_3 from './../Assets/images/Brand_3.png';
import Brand_9 from './../Assets/images/Brand_9.png'
import Brand_6 from './../Assets/images/Brand_6.png'
import Brand8 from './../Assets/logo/Brand8.png'
import True_Logo from './../Assets/images/True_Logo.png'
import Gym_rax from './../Assets/images/Gym_rax.png'

const Warranty = () => {
  return (
    <div className='warranty-upper-container-full-wrapper'>
      <h1 className='warranty-upper-top-text-warranty'>WARRANTY</h1>
      <div className='warranty-upper-container-wrapper'>
        <h2 className='text-warranties'>Warranties</h2>
        <p>Gym Solutions does provide varies warranties depending on the condition of the equipment as we sell New, Used & Remanufactured gym equipment, each sold with their own warranty and terms & conditions.</p>
        <p>We advise asking your sales assistant about the warranty on any equipment purchases for peace of mind.</p>
        <p>All used equipment will be sold with one of the following options below:</p>
        <p>6 Month Warranty - Gym Solutions 6 months parts & labour warranty</p>
        <p>As Is - Equipment sold in an “as is” state does not include any warranty. Any product sold as is, does get checked & tested upon purchase to ensure full working order.</p>
      </div>
      <div className='warranty-middle-container-wrapper'>
        <h2 className='warranty-text-new-products'>New Product</h2>
        <div className='warranty-middle-left-container'>
          <img src={Brand_3} alt=''></img>
          <ul className='warranty-list-items-container'>
            <li>Structural frame parts and weldments: 10 years</li>
            <li>All surface areas to include painted and plated surfaces: 1 year</li>
            <li>Structural moving parts, weight stack plates and components, bearings, bushings, pulleys and seat adjustments: 3 years</li>
            <li>All other parts (including handles, end caps, cables, selector pins, and shrouds): 1 year</li>
            <li>Upholstery pads, roller pads, grips, and straps: 6 months</li>
          </ul>

        </div>
        <div className='warranty-middle-center-container'>
          <img src={Brand_9} alt=''></img>
          <ul className='warranty-list-items-container'>
            <li>Structural frame parts and weldments: 10 years</li>
            <li>All surface areas to include painted and plated surfaces: 1 year</li>
            <li>Structural moving parts, weight stack plates and components, bearings, bushings, pulleys and seat adjustments: 3 years</li>
            <li>All other parts (including handles, end caps, cables, selector pins, and shrouds): 1 year</li>
            <li>Upholstery pads, roller pads, grips, and straps: 6 months</li>
          </ul>
        </div>
        <div className='warranty-middle-right-container'>
          <img src={Brand_6} alt=''></img>
          <ul className='warranty-list-items-container'>
            <li>Structural frame parts and weldments: 10 years</li>
            <li>All surface areas to include painted and plated surfaces: 1 year</li>
            <li>Structural moving parts, weight stack plates and components, bearings, bushings, pulleys and seat adjustments: 3 years</li>
            <li>All other parts (including handles, end caps, cables, selector pins, and shrouds): 1 year</li>
            <li>Upholstery pads, roller pads, grips, and straps: 6 months</li>
          </ul>
        </div>
      </div>

      <div className='warranty-lower-container-wrapper'>
        <div className='warranty-lower-left-container'>
          <img src={Brand8} alt=''></img>
          <ul className='warranty-lower-list-wrapper'>
            <li>10 Years: Frames, welds, cams, linear shafts and weight plates.</li>
            <li>5 Years: Pivot bearings, pulleys, bushings, gas shocks and guide rods.</li>
            <li>1 Year: Linear bearings, belts and pull pin components.</li>
            <li>6 Months: Upholstery, cables, finish and rubber grips.</li>
          </ul>
        </div>
        <div className='warranty-lower-center-container'>
          <img src={Gym_rax} alt=''></img>
          <ul className='warranty-lower-list-wrapper'>
            <li>10-Years: Structural framing (excluding powder coat, paint)</li>
            <li>5-Years: Freedom Mount</li>
            <li>5-Years: Monkey, pull-up bars, wall ball targets, max channel and wall bar set</li>
            <li>1-Year: Rax shelving, bins, and pegs</li>
            <li>1-Year: Powder Coat, Paint</li>
          </ul>

        </div>
        <div className='warranty-lower-right-container'>
          <img src={True_Logo} alt=''></img>
          <ul className='warranty-lower-list-wrapper'>
            <li>Treadmills:</li>
            <li>Frames - Lifetime</li>
            <li>Motor - 5 Years</li>
            <li>Parts - 3 Years</li>
            <li>Labour - 3 Years</li>
            <li>Elipticals & Bikes:</li>
            <li>Frames - Lifetime</li>
            <li>Parts - 5 Years</li>
            <li>Labour - 2 Years</li>
            <li>Palisade Climber:</li>
            <li>Frames - Lifetime</li>
            <li>Parts - 3 Years</li>
            <li>Labour - 3 Years</li>
          </ul>
        </div>
        <p className='warranty-bootom-text-link'>For More information about warranty <span>Click Here</span></p>
      </div>
    </div>
  )
}
export default Warranty;