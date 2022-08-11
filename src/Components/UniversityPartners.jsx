
import React from 'react'
import { Link } from "react-router-dom";

export const UniversityPartners = (props) => {
  return (
    <>
        <div className="card text-bg-dark spaceToph">
        <img src="images/pang-yuhao-_kd5cxwZOK4-unsplash.jpg" className="card-img" alt="..."/>
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
                Australia providers
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
                <center>
                <Link to="/australia_providers"><button className="btn-sm">Read More</button></Link>
                </center>
            </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative ">
                <img src="images/dan-freeman-7Zb7kUyQg1E-unsplash.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>

    <div className="light_dark">
    <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom ">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="images/ferdinand-stohr-PeFk7fzxTdk-unsplash.jpg" alt=""/>
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                USA providers
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/usa_providers"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
    </div>
    </div>


    <div className="light_light">
    <div data-aos="fade-up-right" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-7 order-2 order-lg-1 margin_autoP">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Canada Providers
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/canada_providers"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
        <div className="col-lg-5 order-1 order-lg-2">
            <div className="position-relative ">
                <img src="images/jason-hafso-C2keINMOhIE-unsplash.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>


    <div className="light_dark">
    <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="images/mike-benna-E5LYZPRuG2A-unsplash.jpg" alt=""/>
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                UK providers
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>                
                <center>
                <Link to="/uk_providers"><button className="btn-sm">Read More</button></Link>
                </center>

        </div>
    </div>
    </div>



    </div>
    </>
  )
}
