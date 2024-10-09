import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const Register = lazy(() => import('../Pages/Register'))
const Login = lazy(() => import('../Pages/Login'));
const NotFound = lazy(() => import('../Pages/NotFound/index'));


function Routing() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default Routing;
