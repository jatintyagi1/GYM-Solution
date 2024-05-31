import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cardio from './Pages/Cardio/Cardio'
import Strength from './Pages/Strength/Strength'
import FreeWeight from './Pages/Free Weight/FreeWeight'
import Functional from './Pages/Functional/Functional'
import Flooring from './Pages/Functional/Functional'
import Wellness from './Pages/Wellness/Wellnes'
import Service from './Pages/Services/Service'
import Sale from './Pages/Sale/Sale'
import ShopByBrand from './Pages Upper Navbar/ShopByBrand/ShopByBrand';
import Refurbishment from './Pages Upper Navbar/Refurbishment/Refurbishment'
import Project from './Pages Upper Navbar/Project/Project'
import Video from './Pages Upper Navbar/Video/Video'
import Finance from'./Pages Upper Navbar/Finance/Finance'
import Warranty from './Pages Upper Navbar/Warranty/Warranty'
import ReturnPolicy from './Pages Upper Navbar/ReturnPolicy/ReturnPolicy';
import Faqs from './Pages Upper Navbar/FAQs/Faqs';
import Aboutus from './Pages Upper Navbar/About us/Aboutus'
import BlogNews from './Pages Upper Navbar/Blog&News/Blog&News';
import Contactus from './Pages Upper Navbar/Contact us/Contactus'
import Cart from './Pages Upper Navbar/Cart/Cart'
import SignUp from './Components/Signup/signup';
import Signin from './Components/Signin/signin';


const Routing = () => {
  return (
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path="/cardio" element={<Cardio />} />
    <Route path="/Strength" element={<Strength />} />
    <Route path="/Weight" element={<FreeWeight />} />
    <Route path='/Functional' element={<Functional/>} />
    <Route path='/Flooring' element={<Flooring/>} />
    <Route path='/Wellness' element={<Wellness/>} />
    <Route path='/Service' element={<Service/>} />
    <Route path='/Sale' element={<Sale/>} />

    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/Sign-in' element={<Signin/>}/>
   
    <Route path='/Shop-By-Brand' element={<ShopByBrand/>}/>
    <Route path='/Refurbishment' element={<Refurbishment/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/Video' element={<Video/>}/>
    <Route path='/Finance' element={<Finance/>}/>
    <Route path='/Warranty' element={<Warranty/>}/>
    
    <Route path='/Return-Policy' element={<ReturnPolicy/>}/>
    <Route path='/FAQS' element={<Faqs/>}/>
    <Route path='/About-us' element={<Aboutus/>}/>
    <Route path='/Blog-News' element={<BlogNews/>}/>
    <Route path='/Contact-us' element={<Contactus/>}/>
    <Route path='/Cart' element={<Cart/>}/>
  </Routes>
  )
}

export default Routing;