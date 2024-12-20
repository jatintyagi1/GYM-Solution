import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Header/Navbar';
import NavCard from './Components/Header/NavCard';
import Footer from './Components/Footer/Footer';

const Home = lazy(() => import('./Pages/Home'));

// Auth Routes
const Register = lazy(() => import('./Pages/Register'))
const Login = lazy(() => import('./Pages/Login'));

// NavCard Navigation
const ShopByBrand = lazy(() => import('./NavCardPages/ShopByBrand'));
const Refurbishment = lazy(() => import('./NavCardPages/Refurbishment'));
const Project = lazy(() => import('./NavCardPages/Project'));
const Finance = lazy(() => import('./NavCardPages/Finance'));
const Warranty = lazy(() => import('./NavCardPages/Warranty'));
const ReturnPolicy = lazy(() => import('./NavCardPages/ReturnPolicy'));
const FAQs = lazy(() => import('./NavCardPages/Faqs'));
const AboutUs = lazy(() => import('./NavCardPages/AboutUs'));
const ContactUs = lazy(() => import('./NavCardPages/Contactus'));

// Page 

const Cardio = lazy(() => import('./Pages/Cardio/index'))
const Functional = lazy(() => import('./Pages/Functional/Functional'))
const Wellness = lazy(() => import('./Pages/Wellness/index'))
const Flooring = lazy(() => import('./Pages/Flooring/index'));
const Service = lazy(() => import('./Pages/Services'));
const Sale = lazy(() => import('./Pages/Sale/Sale'));

// NotFound Page
const NotFound = lazy(() => import('./Pages/NotFound/index'));


// Auth Routes
const Profile = lazy(() => import('./Components/Profile/Profile'))


function App() {
  return (
    <Router>
      <NavCard />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path='/Shop-By-Brand' element={<ShopByBrand />} />
        <Route path='/Refurbishment' element={<Refurbishment />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Finance' element={<Finance />} />
        <Route path='/Warranty' element={<Warranty />} />
        <Route path='/Return-Policy' element={<ReturnPolicy />} />
        <Route path='/FAQs' element={<FAQs />} />
        <Route path='/About-us' element={<AboutUs />} />
        <Route path='/Contact-us' element={<ContactUs />} />

        <Route path='/cardio' element={<Cardio />} />
        <Route path='/Functional' element={<Functional />} />
        <Route path='/Wellness' element={<Wellness />} />
        <Route path='/Flooring' element={<Flooring />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Sale' element={<Sale />} />


        <Route path='/profile' element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
