import React from 'react'

export const Contact = (props) => {
  return (
    <>



        <div className="card text-bg-dark spaceToph">
        <img src="images/pavan-trikutam-71CjSSB83Wo-unsplash.jpg" className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <div className="pageContName">
            <h4 className="card-title">{props.pageTitle}</h4>
            <h5 className="card-title"><i className="fa-solid fa-house"></i> {props.LocationCom}</h5>
            </div>
        </div>
        </div>



        <div id="contact" class="contact-area section-padding">
        <div class="container-sm">														
            <div class="row">
                
                <div class="col-lg-5">
                    <div class="single_address">
                        <i class="fa fa-map-marker Shadow_c"></i>
                        <h4>Our Address</h4>
                        <p>Lakhechaur Marg, New Baneshwor Kathmandu, Nepal 25201</p>
                    </div>
                    <div class="single_address">
                        <i class="fa fa-envelope Shadow_c"></i>
                        <h4>Send your message</h4>
                        <p>admission@seekinternationaledu.com</p>
                    </div>
                    <div class="single_address">
                        <i class="fa fa-phone Shadow_c"></i>
                        <h4>Phone/ Whatsapp/ Viber:</h4>
                        <p>(+977) 980-7470560</p>
                    </div>
                    <div class="single_address">
                        <i class="fa fa-clock-o Shadow_c"></i>
                        <h4>Opening Hours</h4>
                        <p> Sun – Friday – 9:30am to 5pm</p>
                    </div>					
                </div>{/* END COL */} 
                <div class="col-lg-7">	
                    <div class="contact contact_rm ">
                        <h1>
                        Show maps Soon
                        </h1>
                    </div>
                </div>{/* END COL */} 
            </div>{/* END ROW */}
        </div>{/* END CONTAINER */}	
    </div>
    </>
  )
}
