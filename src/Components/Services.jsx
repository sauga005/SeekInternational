import React from 'react'
import { Link } from "react-router-dom";

export const Services = (props) => {
return (
<>
    <div className="card text-bg-dark spaceToph">
        <img src="images/alfons-morales-YLSwjSy7stw-unsplash.jpg" className="card-img" alt="..." />
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
                English Preparation
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
                <center>
                <Link to="/english_preparation"><button className="btn-sm">Read More</button></Link>
                </center>
            </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative ">
                <img src="images/photo-1524178232363-1fb2b075b655.jpeg" alt=""/>
            </div>
        </div>
    </div>
    </div>

    <div className="light_dark">
    <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom ">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="images/z-TrhLCn1abMU-unsplash.jpg" alt=""/>
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Country Counselling
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/country_counselling"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
    </div>
    </div>


    <div className="light_light">
    <div data-aos="fade-up-right" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-7 order-2 order-lg-1 margin_autoP">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Application Procedures
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/application_procedures"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative ">
                <img src="images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>


    <div className="light_dark">
    <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="images/mohd-azrin-Vb8237UGAmI-unsplash.jpg" alt=""/>
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Visa Guidance
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/visa_guidance"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
    </div>
    </div>



    </div>

    

    

</>
)
}