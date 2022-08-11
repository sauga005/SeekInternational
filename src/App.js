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
import { About } from './Components/About';
import { OurStory } from './Components/OurStory';
import { AboutAbroadStudies } from './Components/AboutAbroadStudies';
import { WhySeekEducationServices } from './Components/WhySeekEducationServices';
import { OurTeam } from './Components/OurTeam ';
import { IndustryPartnerships } from './Components/IndustryPartnerships ';
import { Contact } from './Components/Contact';
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

        <Route path="/abouts" element={<About pageTitle="Abouts" LocationCom="Home > Abouts"/>} />
        <Route path="/our_story" element={<OurStory pageTitle="Our Story" LocationCom="Home > Abouts > Our Story"/>} />
        <Route path="/about_abroad_studies" element={<AboutAbroadStudies pageTitle="About Abroad Studies" LocationCom="Home > Abouts > About Abroad Studies"/>} />
        <Route path="/why_seek_education_services" element={<WhySeekEducationServices pageTitle="Why Seek Education Services" LocationCom="Home > Abouts > Why Seek Education Services"/>} />
        <Route path="/our_team" element={<OurTeam pageTitle="OurTeam" LocationCom="Home > Abouts > OurTeam"/>} />
        <Route path="/industry_partnerships" element={<IndustryPartnerships pageTitle="Industry Partnerships" LocationCom="Home > Abouts > Industry Partnerships"/>} />

        <Route path="/contacts" element={<Contact pageTitle="Contact" LocationCom="Home > Contact"/>} />


        
      </Routes>
      <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
