import React from 'react'
import './middle.css'
import Pain from './../../../Assets/images/Pain.png'
import Beast_Mode from './../../../Assets/images/Beast_Mode.png'
import Stronger from './../../../Assets/images/Stronger.png'
import Booty_Builder from './../../../Assets/images/Booty_Builder.png'
import Gym_Package from './../../../Assets/images/Gym_Package.png'



const Middle = () => {
    return (
        <div className='outer-whole-wrapper'>
            <div className='upper-wrapper'>
                <h1 className='upper-text'>GYMRAX STORAGE | SUSPENSION | BRIDGE</h1>
                <div className='upper-image-container'>
                    <img src={Pain} alt='storage'></img>
                    <img src={Beast_Mode} alt='suspension'></img>
                    <img src={Stronger} alt='bridge'></img>
                </div>
            </div>
            <div className='middle-wrapper'>
                <h1 className='middle-text'>BOOTY BUILDER I THE PREFERRED HIP THRUST MACHINE</h1>
                <div className='middle-image-container'>
                    <img src={Booty_Builder} alt=''></img>
                </div>
            </div>
            <div className='lower-image-wrapper'>
                <h1 className='lower-text'>GYM PACKAGES</h1>
                <div className='lower-image-container'>
                  <img src={Gym_Package} alt=''></img>
                </div>

            </div>
        </div>
    )
}

export default Middle;