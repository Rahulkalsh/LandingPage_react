import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2">
              <img src="images/contactus.jpeg" alt="Contact Us" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2">
              <h3 className="abtus">Keep In Touch</h3>
              <p className="mt-4">
                <strong>Email Address:</strong><br />
                <a href="mailto:info@simplyenglish.ai">info@simplyenglish.ai</a>
              </p>
              <p className="mt-3">
                <strong>Phone Number:</strong><br />
                India: <a href="tel:+919599060043">9599060043</a>
              </p>
              <div className="mt-4">
                <a href="#">
                  <img src="images/googleplay.png" alt="Google Play" className="img-fluid rounded-lg" />
                </a>
                <img src="images/qr.png" alt="QR Code" width="100px" className="img-fluid ml-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
