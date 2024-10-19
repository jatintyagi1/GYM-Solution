import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../Components/Header/Navbar';
import NavCard from '../Components/Header/NavCard';
import Footer from '../Components/Footer/Footer';

// Navbar Navigation
const Home = lazy(() => import('../Pages/Home'));

// Auth Routes
const Register = lazy(() => import('../Pages/Register'))
const Login = lazy(() => import('../Pages/Login'));

// NavCard Navigation
const ShopByBrand = lazy(() => import('../NavCardPages/ShopByBrand'));
const Refurbishment = lazy(() => import('../NavCardPages/Refurbishment'));
const Project = lazy(() => import('../NavCardPages/Project'));
const Finance = lazy(() => import('../NavCardPages/Finance'));
const Warranty = lazy(() => import('../NavCardPages/Warranty'));
const ReturnPolicy = lazy(() => import('../NavCardPages/ReturnPolicy'));
const FAQs = lazy(() => import('../NavCardPages/Faqs'));
const AboutUs = lazy(() => import('../NavCardPages/AboutUs'));
const ContactUs = lazy(() => import('../NavCardPages/Contactus'));

// Page 

const Sale = lazy(() => import('../Pages/Sale/Sale'))

// NotFound Page
const NotFound = lazy(() => import('../Pages/NotFound/index'));


function Routing() {
    return (
        <>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
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

                        <Route path='/Sale' element={<Sale />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </>
    );
}

export default Routing;
