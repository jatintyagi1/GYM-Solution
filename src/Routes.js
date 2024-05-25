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

const Routing = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardio" element={<Cardio />} />
    <Route path="/Strength" element={<Strength />} />
    <Route path="/Free-Weight" element={<FreeWeight />} />
    <Route path='Functional' element={<Functional/>} />
    <Route path='Flooring' element={<Flooring/>} />
    <Route path='Wellness' element={<Wellness/>} />
    <Route path='Service' element={<Service/>} />
    <Route path='Sale' element={<Sale/>} />
    <Route path='Shop-By-Brand' element={<ShopByBrand/>}/>
  </Routes>
  )
}

export default Routing;