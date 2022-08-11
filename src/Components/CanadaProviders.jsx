import React from 'react'

export const CanadaProviders = (props) => {
  return (
    <>
    <div class="card text-bg-dark spaceToph">
    <img src="images/jason-hafso-C2keINMOhIE-unsplash.jpg" class="card-img" alt="..."/>
    <div class="card-img-overlay">
        <div className="pageContName">
        <h4 class="card-title">{props.pageTitle}</h4>
        <h5 class="card-title"><i class="fa-solid fa-house"></i> {props.LocationCom}</h5>
        </div>
    </div>
    </div>


    <div class="container-sm backPPPP">
            
            <div className="imgContainerPage">
                <img src="images/ahmed-abbas-rL-UGnNVy-Q-unsplash.jpg" alt="" />
            </div>
            <div className="TextContainerForPages">
                <h3>Saugat</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam accusantium necessitatibus in maxime sed nam est corrupti laudantium ex facere ipsum dolore, distinctio obcaecati dolorum consectetur, ea numquam ipsam repellendus.</p>
            </div>
        </div>
    </>
  )
}
