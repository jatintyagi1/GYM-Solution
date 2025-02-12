import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
