import {withRouter} from 'react-router';

import React from 'react'
import {
    
    Link
  } from "react-router-dom";

function Career() {
    return (
        <div>
        <div class="container-fluid details-page-bg">
        <div row>
        <div class="col-xs-12">
    <div class="row p-y-axis-md bg-black p-bottom-lg m-bottom-sm">
        <div class="container p-x-axis-md m-y-axis-xs p-y-axis-xs hero-banner wow animate_animated animate__fadeIn">
        
        <h2 class="h2 text-extra-large m-y-axis-0 text-white flex-all-center text-semibold banner-text">Our Mission</h2><br/><br/>
        <h3 class="h3 text-extra-large m-y-axis-0 text-white flex-all-center text-semibold banner-text">We, as a team intent to stand as a pillars for our clients growth by providing our maximum support to ensure their safe and secure journey towards their progress in all possible ways   </h3>
        
        </div>
    </div>  
    </div>
    </div>
    
    <div class="row p-y-axis-md">
      <div class="container p-x-axis-md">
        <div class="row viewport contact-banner-container  contact-olxpeople-viewport" style={{backgroundImage:'url("https://static.wixstatic.com/media/c837a6_a56caf65f5424508937c5d7a4ced1619~mv2.jpg")'}}>
          <div class="m-top-md m-bottom-sm col-xs-12 col-md-4  text-gray-light" >
             <h2>Opportunities</h2>
          </div>
          <div class="col-xs-12 col-md-8 p-y-axis-md m-y-axis-sm hero-banner text-center-mobile">
          <p class="h4 m-y-axis-0 flex-center text-gray-light m-top-md">The demand for cyber security employees is increasing at more than 3 times the pace of the rest of the IT job market, and 12 times the pace of the general job market. Current cybersecurity staffing shortages number between 20,000 and 40,000. This personnel shortage will likely remain for years, or possibly even decades into the future.

It is safe to say that graduates with a Master’s degree in Cybersecurity will have a considerable amount of career opportunities for many years to come. As long as the Internet is around, the need for cybersecurity professionals will be as well. This type of job security provides a peace of mind that is more valuable than financial compensation alone.</p>
          </div>
        </div>
      </div>
    </div>  

    <div class="row p-y-axis-md">
      <div class="container p-x-axis-md">
        <div class="row viewport contact-banner-container  contact-olxpeople-viewport" style={{backgroundImage:'url("https://static.wixstatic.com/media/c837a6_e166632dd5264456b9b5beba3bd949dd~mv2.jpg")'}}>
          <div class="m-top-md m-bottom-sm col-xs-12 col-md-8  text-gray-light" >
             <p class="h4">Do you want to be one of us ?<br/><br/>
Cyron Security provides various cyber security solutions under one roof. If you're expertise in Threat Analyst, Red Teamer, Blue Teamer, SOC Analyst, Pentester, Malware Analyst, Web Application Developer and UI/UX Designer any of the above mentioned Categories, Join us with the confidence of learning and nourishing your knowledge under the guidance of experienced professionals and a healthy workspace is guaranteed<br/><br/>
Pursue Your Dreams<br/><br/> 
we as a good team and Secure Our Clients</p>
                <div class="row p-y-axis-md">
              <div class="col-xs-12 text-center"><Link className="track-clevertap btn btn-md btn-success text-semibold hire-candidates-btn text-uppercase m-x-axis-sm" to="/service">Contact us</Link></div>
              </div>
          </div>
          <div class="col-xs-12 col-md-4 p-y-axis-md m-y-axis-sm hero-banner text-center-mobile">
          <h2 class="m-y-axis-0 flex-center text-gray-light m-top-md">Are you an industrial
expert?</h2>         
        </div>
        </div>
      </div>
    </div>  

        </div>       
        </div>
    )
}

export default withRouter(Career)