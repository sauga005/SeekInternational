import React from 'react'

export const Home = () => {
return (
<>
  <div className="card card1sto mb-3 mx-2">
    <div className="row g-0 ">
      <div className="col-md-6 text_fl">
        <div className="card-body f_card01">
          <h1 className="card-title">This site is under construction. See you soon...</h1>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
          <center>
            <button className="btn btn-danger center_btn gradiant_btn">Experience With Us</button>
          </center>
        </div>
      </div>
      <div className="col-md-5 img_fl">
        <img class src="/images/71b273d0-sl-hero-consultant.png" className="img-fluid rounded-start imgMang"
          alt="..." />
        <div className="imgCompo">
          <div className="imgC0mp001">
            <img className='imgC001' src="images/com-2.png" alt="" />
          </div>
          <div className="imgC0mp002">
            <img className='imgC002' src="images/com-1.png" alt="" />
          </div>
          <div className="imgC0mp003">
            <img className='imgC003' src="images/com-3.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  </div>

  {/* Why Coose Us */}
  <div className="whyWe" data-aos="fade-up" data-aos-duration="500">
    Why Choose Us
    <hr />
  </div>
  <div className="flexbox">
    <div className="flexcard" data-aos="zoom-in-right" data-aos-duration="600">
      <img src="/images/images001.jpg" alt="" />
      <div className="flex flexcardTitle">Top Level Expertise</div>
    </div>
    <div className="flexcard" data-aos="zoom-in-left" data-aos-duration="700">
      <img src="/images/images002.jpg" alt="" />
      <div className="flex flexcardTitle">Guidance Till Settlement</div>
    </div>
    <div className="flexcard" data-aos="zoom-in-right" data-aos-duration="800">
      <img src="/images/images003.jpg" alt="" />
      <div className="flex flexcardTitle">Friendly</div>
    </div>
    <div className="flexcard" data-aos="zoom-in-left" data-aos-duration="900">
      <img src="/images/images004.jpg" alt="" />
      <div className="flex flexcardTitle">Most Reputed Colleges</div>
    </div>
  </div>

  {/* another */}

    {/* Frequently Asked Question */}

    <div className="Freq_title_txt">
      Frequently Asked Question
    <hr />
    </div>

  <div className="accordion accordion-flush" id="accordionFlushExample">

    
  <div className="freqAskBtn_1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Why Choose Us?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        We provide the most user-friendly service for you to develop your software with the best user-experience design. You can come up with an idea, design plan or we are open for discussion to help you to develop your desired software efficiently. 
      </div>
    </div>
  </div>
  </div>
  

  <div className="freqAskBtn_1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Is there any membership program available?      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        We provide the most user-friendly service for you to develop your software with the best user-experience design. You can come up with an idea, design plan or we are open for discussion to help you to develop your desired software efficiently.       </div>
    </div>
  </div>
  </div>


  <div className="freqAskBtn_1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        How to book an appointment?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        We provide the most user-friendly service for you to develop your software with the best user-experience design. You can come up with an idea, design plan or we are open for discussion to help you to develop your desired software efficiently.       </div>
    </div>
  </div>
  </div>


  <div className="freqAskBtn_1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Can you provide digital services?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        We provide the most user-friendly service for you to develop your software with the best user-experience design. You can come up with an idea, design plan or we are open for discussion to help you to develop your desired software efficiently.       </div>
    </div>
  </div>
  </div>


  <div className="freqAskBtn_1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
         What are the promotions going on?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        We provide the most user-friendly service for you to develop your software with the best user-experience design. You can come up with an idea, design plan or we are open for discussion to help you to develop your desired software efficiently.       </div>
    </div>
  </div>
  </div>

</div>

</>
)
}