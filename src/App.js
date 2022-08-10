import './App.css';
import './Components/Css/Navbar.css';
import './Components/Css/Style.css';
import './Components/Css/Footer.css';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { VisaGuidance } from './Components/VisaGuidance';
// ..
AOS.init();

function App() {
  return (
    <div className="mainBody">
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa_guidance" element={<VisaGuidance />} />
      </Routes>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
