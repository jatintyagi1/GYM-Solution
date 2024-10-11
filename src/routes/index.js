import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../Components/Header/Navbar';
import NavCard from '../Components/Header/NavCard';
import Footer from '../Components/Footer/Footer';

const Home = lazy(() => import('../Pages/Home'));
const Register = lazy(() => import('../Pages/Register'))
const Login = lazy(() => import('../Pages/Login'));

const ContactUs = lazy(() => import('../Pages Upper Navbar/Contact us/Contactus'))

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
                        <Route path='/Contact-us' element={<ContactUs />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </>
    );
}

export default Routing;
