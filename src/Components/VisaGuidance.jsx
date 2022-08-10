import React from 'react'

export const VisaGuidance = (props) => {
    
  return (
    <>
    
    <div class="card text-bg-dark spaceToph">
        <img src="images/mohd-azrin-Vb8237UGAmI-unsplash.jpg" class="card-img" alt="..."/>
        <div class="card-img-overlay">
            <div className="pageContName">
            <h4 class="card-title">{props.pageTitle}</h4>
            <h5 class="card-title">{props.LocationCom}</h5>
            </div>
        </div>
        </div>
    <div className="containerForPages">
    {/* <!-- start event block --> */}

<div className="light_light">
    <div data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-7 order-2 order-lg-1 margin_autoP">
            <div class="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                    Mock tests
                    <hr />
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2">
            <div class="position-relative ">
                <img src="images/ben-mullins-oXV3bzR7jxI-unsplash.jpg" alt=""/>
            </div>
        </div>
    </div>
</div>

    
<div className="light_dark">
    <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" class="row align-items-center event-block no-gutters margin-40px-bottom">
        <div class="col-lg-5 col-sm-12">
            <div class="position-relative">
                <img src="images/school-supplies-g91443fa5e_1280.jpg" alt=""/>
            </div>
        </div>
        <div class="col-lg-7 col-sm-12">
            <div class="padding-60px-lr cardZag_COntainer md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                Provided Materials

                    <hr />
                </h5>
                <p>Welcome to NIEC’s mocktest tests for TOEFL, IELTS, PTE, SAT 1, ACT, GRE and GMAT</p>
            </div>
        </div>
    </div>
</div>

    

    

</div>  
                 

    </>
  )
}
