import React, { useState } from 'react'

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
        <span className="logo"><img  className="logo_img" src="images/logo1(t).svg" alt="" /></span>
        <span className="ThreeLineBar" onClick={() => setNav_show("nav_element topnav show_navb")}><i className="fa-solid fa-bars"></i></span>
        <div className={nav_show} id='myTopnav'>
          <div className="bg_opacity_on"></div>
          <ul>
              <li className='nav_togle'><span onClick={() => setNav_show("nav_element topnav hide_navb")}><i className="fa-solid fa-xmark"></i></span></li>
              <li className='hov_nav'><a href="#" >Home</a></li>
              <li className='about_h hov_nav'><a href="#">About <span className="float_right" onClick={() => SubMenuAbout ? setSubMenuAbout(false) : setSubMenuAbout(true)}><i className="fa-solid fa-angle-down"></i></span></a>
                <div className={about_ss}>
                  <div className="sub_list about_i">
                    <ul>
                      <li><a href="#">Our Story</a></li>
                      <li><a href="#">About Abroad Studies</a></li>
                      <li><a href="#">Why Seek Education Services</a></li>
                      <li><a href="#">Industry Partnerships</a></li>
                      <li><a href="#">Our Team</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='service_h hov_nav'><a href="#">Services <span className="float_right" onClick={() => SubMenuServices ? setSubMenuServices(false) : setSubMenuServices(true)}><i className="fa-solid fa-angle-down"></i></span></a>
              <div className={Services_ss}>
                <div className="sub_list service_i">
                  <ul>
                    <li><a href="#">English Preparation</a></li>
                    <li><a href="#">Country Counselling</a></li>
                    <li><a href="#">Application Procedures </a></li>
                    <li><a href="#">Visa Guidance</a></li>
                  </ul>
                </div>
                </div>
              </li>
              <li className='coaching_h hov_nav'><a href="#">Coaching <span className="float_right" onClick={() => SubMenuCoaching ? setSubMenuCoaching(false) : setSubMenuCoaching(true)}><i className="fa-solid fa-angle-down"></i></span></a>
                <div className={Coaching_ss}>
                <div className="sub_list coaching_i">
                  <ul>
                    <li><a href="#">Our Coaching</a></li>
                    <li><a href="#">PTE Coaching</a></li>
                    <li><a href="#">Take IELTS</a></li>
                    <li><a href="#">TOEFL</a></li>
                    <li><a href="#">SAT Coaching</a></li>
                    <li><a href="#">Skill Exam</a></li>
                  </ul>
                </div>
                </div>
              </li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#"><button className="btn btn_contactsus">Contacts us</button></a></li>
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
