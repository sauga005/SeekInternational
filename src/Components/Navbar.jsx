import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav_show, setNav_show] = useState("nav_element topnav hide_navb");

  const [SubMenuAbout, setSubMenuAbout] = useState(false);
  const about_ss = SubMenuAbout ? "ShowSub" : "HideSub";

  const [SubMenuCoaching, setSubMenuCoaching] = useState(false);
  const Coaching_ss = SubMenuCoaching ? "ShowSub" : "HideSub";

  //onClick={() => SubMenuCoaching ? setSubMenuCoaching(false) : setSubMenuCoaching(true)}

  const [SubMenuServices, setSubMenuServices] = useState(false);
  const Services_ss = SubMenuServices ? "ShowSub" : "HideSub";

  //onClick={() => SubMenuServices ? setSubMenuServices(false) : setSubMenuServices(true)}

  

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <>
    <div className="centerixe">
    <nav id="navheader" className='NavbarHeader'>
    <Link to="/"><span className="logo"><img  className="logo_img" src="images/logo1(t).svg" alt="" /></span></Link>
        <span className="ThreeLineBar" onClick={() => setNav_show("nav_element topnav show_navb")}><i className="fa-solid fa-bars"></i></span>
        <div className={nav_show} id='myTopnav'>
          <div className="bg_opacity_on" onClick={() => setNav_show("nav_element topnav hide_navb")}></div>
          <ul>
              <li className='nav_togle'><span onClick={() => setNav_show("nav_element topnav hide_navb")}><i className="fa-solid fa-xmark"></i></span></li>
              <li className='hov_nav'><Link to="/" >Home</Link></li>
              <li className='about_h hov_nav'><Link to="/abouts">Abouts <span className="float_right" onClick={() => SubMenuAbout ? setSubMenuAbout(false) : setSubMenuAbout(true)}><i className="fa-solid fa-angle-down"></i></span></Link>
                <div className={about_ss}>
                  <div className="sub_list about_i">
                    <ul>
                      <li><Link to="/our_story">Our Story</Link></li>
                      <li><Link to="/about_abroad_studies">About Abroad Studies</Link></li>
                      <li><Link to="/why_seek_education_services">Why Seek Education Services</Link></li>
                      <li><Link to="/industry_partnerships">Industry Partnerships</Link></li>
                      <li><Link to="/our_team">Our Team</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='service_h hov_nav'><Link to="/services">Services <span className="float_right" onClick={() => SubMenuServices ? setSubMenuServices(false) : setSubMenuServices(true)}><i className="fa-solid fa-angle-down"></i></span></Link>
              <div className={Services_ss}>
                <div className="sub_list service_i">
                  <ul>
                    <li><Link to="/english_preparation">English Preparation</Link></li>
                    <li><Link to="/country_counselling">Country Counselling</Link></li>
                    <li><Link to="/application_procedures">Application Procedures </Link></li>
                    <li><Link to="/visa_guidance">Visa Guidance</Link></li>
                  </ul>
                </div>
                </div>
              </li>
              <li className='coaching_h hov_nav'><Link to="/university">University partners  <span className="float_right" onClick={() => SubMenuCoaching ? setSubMenuCoaching(false) : setSubMenuCoaching(true)}><i className="fa-solid fa-angle-down"></i></span></Link>
                <div className={Coaching_ss}>
                <div className="sub_list coaching_i">
                  <ul>
                    <li><Link to="australia_providers">Australia providers</Link></li>
                    <li><Link to="/usa_providers">USA providers</Link></li>
                    <li><Link to="/canada_providers">Canada Providers</Link></li>
                    <li><Link to="/uk_providers">UK providers</Link></li>
                  </ul>
                </div>
                </div>
              </li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contacts"><button className="btn btn_contactsus">Contacts us</button></Link></li>
          </ul>                 
        </div>
    </nav>
    <button id='gotopB' className="btn btn-danger go_TopBtn" onClick={scrollToTop} ><i className="fa-solid fa-angle-up"></i></button>
    {
        window.addEventListener("scroll", function(){
            var header = document.getElementById("navheader");
            header.classList.toggle("sticky_nav", window.scrollY > 0)

            //Go top Button
            var header = document.getElementById("gotopB");
            header.classList.toggle("sticky_topBtn", window.scrollY > 0)
        })        
    }
    </div>
    </>
  )
}
