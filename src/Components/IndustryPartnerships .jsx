import React from 'react'

export const IndustryPartnerships  = (props) => {
  return (
    <>
    <div className="card text-bg-dark spaceToph">
    <img src="images/maksym-kaharlytskyi-u13zBF4r56A-unsplash.jpg" className="card-img" alt="..."/>
    <div className="card-img-overlay">
        <div className="pageContName">
        <h4 className="card-title">{props.pageTitle}</h4>
        <h5 className="card-title"><i className="fa-solid fa-house"></i> {props.LocationCom}</h5>
        </div>
    </div>
    </div>


    <div className="container-sm backPPPP">
            
            <div className="imgContainerPage">
                <img src="images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg" alt="" />
            </div>
            <div className="TextContainerForPages">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam accusantium necessitatibus in maxime sed nam est corrupti laudantium ex facere ipsum dolore, distinctio obcaecati dolorum consectetur, ea numquam ipsam repellendus.</p>
            </div>
        </div>
    </>
  )
}
