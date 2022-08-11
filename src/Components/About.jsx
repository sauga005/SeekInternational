import React from 'react'
import { Link } from "react-router-dom";

export const About = (props) => {
return (
<>
    <div className="card text-bg-dark spaceToph">
        <img src="images/jason-goodman-vbxyFxlgpjM-unsplash.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
            <div className="pageContName">
                <h4 className="card-title">{props.pageTitle}</h4>
                <h5 className="card-title"><i className="fa-solid fa-house"></i> {props.LocationCom}</h5>
            </div>
        </div>
    </div>



    <div className="containerForPages ">
    {/* <!-- start event block --> */}

    <div className="light_light">
    <div data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-7 order-2 order-lg-1 margin_autoP">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Our Story 
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
                <center>
                <Link to="/our_story"><button className="btn-sm">Read More</button></Link>
                </center>
            </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative ">
                <img src="images/ugo-mendes-donelli-e4FbcDByhjI-unsplash.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>

    <div className="light_dark">
    <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom ">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="images/clay-banks-b5S4FrJb7yQ-unsplash.jpg" alt=""/>
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                About Abroad Studies 
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/about_abroad_studies"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
    </div>
    </div>


    <div className="light_light">
    <div data-aos="fade-up-right" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-7 order-2 order-lg-1 margin_autoP">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Why Seek Education Services 
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/why_seek_education_services"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative ">
                <img src="images/images002.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>


    <div className="light_dark">
    <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="images/maksym-kaharlytskyi-u13zBF4r56A-unsplash.jpg" alt=""/>
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Industry Partnerships 
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/industry_partnerships"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
    </div>
    </div>



    <div className="light_light">
    <div data-aos="fade-up-right" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-7 order-2 order-lg-1 margin_autoP">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Our Team 
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/our_team"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative ">
                <img src="images/javier-allegue-barros-i5Kx0P8A0d4-unsplash.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>




    </div>

    

    

</>
)
}