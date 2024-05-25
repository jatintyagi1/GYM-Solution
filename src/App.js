import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/CoreComponents/Navbar/navbar';
import Routing from './Routes';
import Footer from './Components/CoreComponents/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routing/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
