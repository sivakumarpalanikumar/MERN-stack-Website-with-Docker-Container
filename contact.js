import {withRouter} from 'react-router';

import React from 'react'
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ymwlp4t', 'template_hvx4bjo', e.target, 'user_uSsEI98m6sPiFCZOKKJXO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


    return (
        <div>
          <div class="container-fluid details-page-bg">
                <div class="row">
  <div class="col-xs-12">
    <div class="row viewport contact-banner-container  contact-olxpeople-viewport">
      <div class="container">
        <h1 class="h1 text-center text-white m-y-axis-md p-y-axis-lg line-height-64 text-bold static-title">Contact Us</h1>
      </div>
    </div>
    
   
    <section class="row send-message-section">
      <div class="container p-top-md m-top-xs m-bottom-lg">
        <div class="row message-container">
          <div class="col-xs-12 col-xs-offset-0 col-md-8 col-md-offset-2">
            <p class="h4 text-center text-semibold">Send us a Message</p>
            <form onSubmit={sendEmail}>
              
              <div class="row p-top-md">
                <div class="col-xs-12 form-group has-error">
                  <label for="name" class="text-normal">Your Name</label>
                  <input type="text" name="name" required="" class="form-control" /><span class="help-block text-base"></span>
                  
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 form-group has-error">
                  <label for="mobile" class="text-normal">Phone Number</label>
                  <input type="text" max="10" name="mobile" required="" class="form-control" /><span class="help-block text-base"></span>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 form-group has-error">
                  <label for="email" class="text-normal">Email Id</label>
                  <input type="email" name="email" required="" class="form-control" /><span class="help-block text-base"></span>
                  
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 form-group has-error">
                  <label for="subject" class="text-normal">Subject</label>
                  <input type="text" name="subject" required="" class="form-control" /><span class="help-block text-base"></span>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 form-group has-error">
                  <label for="message" class="text-normal">Type Your Message</label><textarea name="message" rows="6" required="" class="form-control"></textarea>
                <span class="help-block text-base"></span></div>
              </div>
              <div class="row p-top-md m-top-xs">
                <div class="col-xs-12">
                  <button id="contact-form-btn" class="btn btn-fluid p-y-axis-sm b-radius-1 text-uppercase  btn-black">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

</div>


        </div>
    )
}

export default withRouter(Contact)