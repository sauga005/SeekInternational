import './App.css';
import './Components/Css/Navbar.css';
import './Components/Css/Style.css';
import './Components/Css/Footer.css';
import './Components/Css/Gallery.css';
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
import { Gallery } from './Components/Gallery';
import { UniversityPartners } from './Components/UniversityPartners'
import { AustraliaProviders } from './Components/AustraliaProviders'
import { USAProviders } from './Components/USAProviders'
import { CanadaProviders } from './Components/CanadaProviders'
import { UKProviders } from './Components/UKProviders'
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
        <Route path="/gallery" element={<Gallery pageTitle="Gallery" LocationCom="Home > Gallery"/>} />
        <Route path="/services" element={<Services pageTitle="Services" LocationCom="Home > Services"/>} />

        <Route path="/university" element={<UniversityPartners pageTitle="University" LocationCom="Home > University Partners"/>} />
        <Route path="/australia_providers" element={<AustraliaProviders pageTitle="Australia Providers" LocationCom="Home > Australia Providers"/>} />
        <Route path="/usa_providers" element={<USAProviders pageTitle="USA Providers" LocationCom="Home > USA Providers"/>} />
        <Route path="/canada_providers" element={<CanadaProviders pageTitle="Canada Providers" LocationCom="Home > Canada Providers"/>} />
        <Route path="/uk_providers" element={<UKProviders pageTitle="UK Providers" LocationCom="Home > UK Providers"/>} />
        
      </Routes>
      <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
