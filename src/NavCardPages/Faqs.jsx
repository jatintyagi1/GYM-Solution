import React from 'react'
import '../Styles/NavCardPage/faqs.css';

const Faqs = () => {
  return (
    <div className='full-page-wrapper'>
        
        <div className='question-wrapper'> 
        <h1 className='faqs-text'>FAQS</h1>   
        <h4 className='question'>Do you only sell used gym equipment?</h4>
        <p className='answer'>No! At Gym Solutions, we specialise in new, used & remanufactured commercial gym equipment. If you’re after a particular piece of equipment, new or used, and can’t find it on our website, please get in touch and we’ll more than likely be able to source this.</p>
        <h4 className='question'>Where do you get your used equipment?</h4>
        <p className='answer'>We purchase end of lease equipment that might have been rented commercially as well as equipment from gyms, hotels, schools, etc. Our experience and expertise allow us to bring in the pre-loved equipment, repair, maintain and clean this to ensure it looks and feels as good as new for our customers.</p>
        <h4 className='question'>Can I come in and see the equipment?</h4>
        <p className='answer'>Yes! We have a warehouse situated in Botany, NSW where you will be able to come in and check out our range/showroom before you buy. You can also pick up from this location.</p>
        <h4 className='question'>Do you ship Australia wide?</h4>
        <p className='answer'>We sure do. Shipping prices depend on a number of factors but we’re able to provide you with a quote on this before you purchase. Simply call or send us an email.</p>
        <h4 className='question'>Can you repair my equipment?</h4>
        <p className='answer'>Our team have the expertise to fix almost any piece of equipment. We’ll be able to talk you through this and provide you with some guidance on pricing.</p>
        <h4 className='question'>I’m after a unique piece of equipment, can you help?</h4>
        <p className='answer'>We are able to source equipment from a range of suppliers so please let us know what you require, and our team will do their best to assist.</p>
        <h4 className='question'>Do you provide a warranty on used equipment?</h4>
        <p className='answer'>Most of our used equipment comes with a 6 month parts & labour warranty, we do recommend asking your sales assistant about the warranty of any used piece you are buying for peace of mind.</p>    
        </div>
    </div>
  )
}

export default Faqs;