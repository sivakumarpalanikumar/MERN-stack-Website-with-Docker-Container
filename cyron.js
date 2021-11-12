import {withRouter} from 'react-router';

import React from 'react'
import {
    
    Link
  } from "react-router-dom";
function Cyron() {
    return (
        <div>
        <div class="container-fluid details-page-bg ">
        <div row>
        <div class="col-xs-12 ">
    <div class="row p-y-axis-md bg-black p-bottom-lg m-bottom-sm">
        <div class="container p-x-axis-md m-y-axis-xs p-y-axis-xs hero-banner wow animate__animated animate__fadeInRight">
        
        <h2 class="h2 text-extra-large m-y-axis-0 text-white flex-all-center text-semibold banner-text ">Protect Your Assets And Brands 
From Hackers</h2><br/><br/>
<h3 class="h3 text-extra-large m-y-axis-0 text-white flex-all-center text-semibold banner-text">Find out About </h3>
        
        </div>
    </div>  
    </div>
    </div>
      
    <div class="col-xs-12 "></div>
    <div class="row p-y-axis-md bg-black p-bottom-lg m-bottom-sm">
    <div class="container p-x-axis-md m-y-axis-xs p-y-axis-xs hero-banner wow animate__animated animate__fadeInRight">
     
      <div class="col-xs-12"><Link className="btn btn-xs btn-black btn-invert b-radius-1 text-base m-top-xs text-semibold p-x-axis-sm track-clevertap" to="/service"><span class="p-x-axis-xs">More</span></Link></div>
    </div>
    </div>
    

    <section class="row p-y-axis-lg bg-modern-gray">
  <div class="col">
    <div class="container m-b-100 ">
      <div class="row">
        <div class="col-lg-4 col-sm-12 m-t-75 m-b-85  ">
          <h4 class="m-y-axis-0 text-white  Platform-Medium-Web font-size-40 line-height-1-dot-4">Let Your Data Take Your Business to Higher Grounds</h4>
        </div>
        <div class="col-lg-4 col-sm-10 m-y-axis-lg p-y-axis-md b-t-1-white m-b-100 m-l-minus-30 m-20-sm"><img src="data:image/png;base64,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" alt="Temporary Staffing Icon" loading="auto" class="img-responsive m-top-md m-bottom-lg"/>
          <h4 class="text-white  m-top-sm line-height-30 font-weight-500">Business Security</h4>
          <h4 class="text-medium text-card-gray  m-top-sm line-height-1-dot-75">We are Vital in Protecting Client Data and information keeping shared data secure and ensuring reliable access</h4>
        </div>
        <div class="col-lg-4 col-sm-10 m-y-axis-lg p-y-axis-md m-l-30 b-t-1-white m-b-100 m-20-sm"><img src="https://cdn.imgbin.com/19/18/2/imgbin-penetration-test-logo-software-testing-security-utensilios-SZ8xqj5sdtdV6vxkxXUKY0WuX.jpg" alt="Permanent Recruitment Icon" loading="auto" class="img-responsive m-top-md m-bottom-lg"/>
          <h4 class="text-white  m-top-sm line-height-30 font-weight-500">Security Operations Center ( SOC )</h4>
          <h4 class="text-medium text-card-gray  m-top-sm line-height-1-dot-75">Dedicated team with deep cloud expertise & experience in handling managed security service. A Security Operations Center is the core of an Organization's Cyber Security</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-12 m-t-75 m-b-85">
          <h3 class="m-y-axis-0 text-white  Platform-Medium-Web font-size-40 line-height-1-dot-4"><br/></h3>
        </div>
        <div class="col-lg-4 col-sm-10 m-y-axis-lg p-y-axis-md b-t-1-white m-b-100 m-l-minus-30 m-20-sm"><img src="data:image/png;base64,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" alt="Temporary Staffing Icon" loading="auto" class="img-responsive m-top-md m-bottom-lg"/>
          <h4 class="text-white  m-top-sm line-height-30 font-weight-500">Secure Up</h4>
          <h4 class="text-medium text-card-gray  m-top-sm line-height-1-dot-75">Having an Anti Virus & a firewall is just not sufficient – Your IT needs lot more. 
Become a Defensive & a Proactive organization, with: SecureUp</h4>
        </div>
        <div class="col-lg-4 col-sm-10 m-y-axis-lg p-y-axis-md m-l-30 b-t-1-white m-b-100 m-20-sm"><img width="200" src="https://cdn.logojoy.com/wp-content/uploads/2018/07/03152651/securityicon3.png" alt="Permanent Recruitment Icon" loading="auto" class="img-responsive m-top-md m-bottom-lg"/>
          <h4 class="text-white  m-top-sm line-height-30 font-weight-500">Cyber Forensics</h4>
          <h4 class="text-medium text-card-gray m-top-sm line-height-1-dot-75">Expert witness and Cyber Security Services that the experts use. Cell Triangulation,Breach, Critical Response, Education & testimony  </h4></div>
      </div>

    </div>
  </div>
</section>
<div class="row p-y-axis-md bg-white b-top-gray-lightest">
      <div class="col-xs-12 text-center"><Link className="track-clevertap btn btn-md btn-success text-semibold hire-candidates-btn text-uppercase m-x-axis-sm" to="/service">Learn</Link></div>
    </div>

    <div class="row p-y-axis-md">
      <div class="container p-x-axis-md">
        <div class="row viewport contact-banner-container  contact-olxpeople-viewport" style={{backgroundImage:'url("https://static.wixstatic.com/media/c837a6_41aece62e57346379d12018aece18ea2~mv2.jpg")'}}>
          <div class="m-top-md m-bottom-sm col-xs-12 col-md-4  text-semibold" >
             <h2>Unprecedented Velocity. Impeccable Reliability.</h2>
          </div>
          <div class="col-xs-12 col-md-8 p-y-axis-md m-y-axis-sm hero-banner text-center-mobile">
            <p class="h2 m-y-axis-0 flex-center text-semibold m-top-md">Startups’ favourite HR service provider in India</p>
           <p class="h3 m-y-axis-0 flex-center text-gray-light m-top-md">We promise to create a secured environments for your companies to grow and cherish, for that we ensure to protect your valuable information and prevent your company from data breaches and cyber attacks and also we provide law based cyber crime consulting. ​
We collaborate with multiple companies and we ensure to provide services at best quality. we will provide all cyber security solutions under one roof. We guarantee you that all your queries will be dealt by qualified professions with supreme supervision.</p>
          </div>
        </div>
      </div>
    </div>  
    <div class="row p-y-axis-md bg-white b-top-gray-lightest">
      <div class="col-xs-12 text-center"><Link className="track-clevertap btn btn-md btn-success text-semibold hire-candidates-btn text-uppercase m-x-axis-sm" to="/service">Learn More</Link></div>
    </div>
    <div class="row">
  <div class="col-xs-12">
    <div class="row viewport contact-banner-container  contact-olxpeople-viewport" style={{backgroundImage:'url("https://static.wixstatic.com/media/c837a6_d11c6c437c0f4feb9de8591b42ead168~mv2.jpg")'}}>
      <div class="container">
        <h1 class="h1 text-center text-white m-y-axis-md p-y-axis-lg line-height-64 text-bold static-title">We care about your privacy</h1>
      </div>
    </div>
    </div>
    </div>

    <div class="row p-y-axis-md">
      <div class="container p-x-axis-md">
        <div class="row viewport contact-banner-container  contact-olxpeople-viewport" style={{backgroundImage:'url("https://static.wixstatic.com/media/c837a6_41aece62e57346379d12018aece18ea2~mv2.jpg")'}}>
          <div class="m-top-md m-bottom-sm col-xs-12 col-md-4  text-semibold" >
             <h2>Are You Ready to Accelerate Your Business?</h2>
          </div>
          <div class="col-xs-12 col-md-8 p-y-axis-md m-y-axis-sm hero-banner text-center-mobile">
          <p class="h3 m-y-axis-0 flex-center text-gray-light m-top-md">Want to secure your company?
we are ready to build the fortress to ensure your Company's Security.</p>
          </div>
        </div>
      </div>
    </div>  

    <div class="row p-y-axis-md bg-white b-top-gray-lightest">
      <div class="col-xs-12 text-center"><Link className="track-clevertap btn btn-md btn-success text-semibold hire-candidates-btn text-uppercase m-x-axis-sm" to="/service">Get started</Link></div>
    </div>

   

        </div>  
        </div>
    )
}

export default withRouter(Cyron)