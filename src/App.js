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
import { Services } from './Components/Services';
import ScrollToTop from './Components/Scroll _top';
import { EnglishPreparation } from './Components/EnglishPreparation';
import { CountryCounselling } from './Components/CountryCounselling';
import { ApplicationProcedures } from './Components/ApplicationProcedures';
// ..
AOS.init();

function App() {
  return (
    <div className="mainBody">
      <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa_guidance" element={<VisaGuidance pageTitle="Visa Guidance" LocationCom="Home > Services > Visa Guidance"/>} />
        <Route path="/english_preparation" element={<EnglishPreparation pageTitle="English Preparation" LocationCom="Home > Services > English Preparation"/>} />
        <Route path="/country_counselling" element={<CountryCounselling pageTitle="Country Counselling" LocationCom="Home > Services > Country Counselling"/>} />
        <Route path="/application_procedures" element={<ApplicationProcedures pageTitle="Application Procedures" LocationCom="Home > Services > Application Procedures"/>} />
        <Route path="/services" element={<Services pageTitle="Services" LocationCom="Home > Services"/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
