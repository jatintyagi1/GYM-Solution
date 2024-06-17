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
import GymDesign from './DropDownPages/ServiceDropDown/3DgymDesign';
import CommHealthClub from './DropDownPages/ServiceDropDown/CommHealthClub';
import HotelApartment from './DropDownPages/ServiceDropDown/Hotel&Apartment';
import SchoolGym from './DropDownPages/ServiceDropDown/SchoolGym';
import HomeGym from './DropDownPages/ServiceDropDown/HomeGym';
import Profile from './Components/CoreComponents/MyAccount/Profile';
import Sauna from './DropDownPages/WellnessDropDown/Sauna';
import HotTubs from './DropDownPages/WellnessDropDown/hotTubs';
import ColdPlunges from './DropDownPages/WellnessDropDown/coldPlunge';
import BoxingEquipment from './DropDownPages/FunctionalDropDown/BoxingEquipment';
import FunctionalCardio from './DropDownPages/FunctionalDropDown/FunctionalCardio';
import FunctionalTrainer from './DropDownPages/FunctionalDropDown/FunctionalTrainer';
import Rigs from './DropDownPages/FunctionalDropDown/Rigs';
import OtherEquipments from './DropDownPages/FunctionalDropDown/otherEquipments';


const Routing = () => {
  return (
    <Routes>
      {/* Lower Navbar Routes */}
    <Route path="/" element={<Home />} />
    <Route path="/cardio" element={<Cardio />} />
    <Route path="/Strength" element={<Strength />} />
    <Route path="/Weight" element={<FreeWeight />} />
    <Route path='/Functional' element={<Functional/>} />
    <Route path='/Flooring' element={<Flooring/>} />
    <Route path='/Wellness' element={<Wellness/>} />
    <Route path='/Service' element={<Service/>} />
    <Route path='/Sale' element={<Sale/>} />

    {/* Sign-up-Sign-in Routes */}
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/Sign-in' element={<Signin/>}/>
   
   {/* Upper Navbar Routes */}
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


     {/* dropdown routes of service page */}
    <Route path='/Service/3D-Gym-Design' element={<GymDesign/>}/>
    <Route path='/Service/commercial-health-club' element={<CommHealthClub/>}/>
    <Route path='/Service/hotel-&-apartment' element={<HotelApartment/>}/>
    <Route path='/service/school-gym' element={<SchoolGym/>}/>
    <Route path='/service/home-gym' element={<HomeGym/>}/>

    {/*dropdown route for wellness */}
    <Route path='/Product/Wellness/Saunas' element={<Sauna/>}/>
    <Route path='/Product/Wellness/Hot-tubs' element={<HotTubs/>}/>
    <Route path='/Product/Wellness/cold' Wellness={<ColdPlunges/>}/>

    {/* Dropdown routes for Functional */}
    <Route path='/Product/Functional/boxing-equipment' element={<BoxingEquipment/>}/>
    <Route path='/Product/Functional/functional-cardio' element={<FunctionalCardio/>}/>
    <Route path='/Product/Functional/functional-trainer' element={<FunctionalTrainer/>}/>
    <Route path='/Product/Functional/rigs' element={<Rigs/>}/>
    <Route path='/Product/Functional/other-equipments' element={<OtherEquipments/>}/>

    <Route path='/My-Profile' element={<Profile/>}/>

  </Routes>
  )
}

export default Routing;