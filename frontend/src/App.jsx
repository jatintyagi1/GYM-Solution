import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import NavCard from './components/Header/NavCard';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const ContactUs = lazy(() => import('./pages/ContactUs'))

function App() {
  return (
    <BrowserRouter>
    <NavCard />
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
