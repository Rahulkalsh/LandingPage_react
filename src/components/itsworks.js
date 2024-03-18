import React, { Component } from 'react';

class Works extends Component {
  render() {
    const worksSteps = [
      { imgSrc: "images/signup1.PNG", text: "Sign Up" },
      { imgSrc: "images/learn1.PNG", text: "Choose what you would like to learn" },
      { imgSrc: "images/prompt1.PNG", text: "Leverage the guided prompts" },
      { imgSrc: "images/ask1.PNG", text: "Type your own prompts to ask anything" },
      { imgSrc: "images/review1.PNG", text: "Review chat history" }
    ];

    return (
      <div>
        <section className="simplyenglish">
          <div className="container">
            <h1 className="abtus">How it Works</h1>
            <div className="row mt-5 align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <ul>
                  {worksSteps.map((step, index) => (
                    <li key={index} className="d-flex align-items-center mb-3">
                      <img src={step.imgSrc} alt="" className="img-fluid mr-3" width="69px" />
                      {step.text}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-4">
                  <img src="images/watchvideo.png" alt="" className="img-fluid" style={{ width: '50%' }} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-2 text-center">
                <img src="images/howitsworks.png" alt="How It Works" className="img-fluid rounded" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Works;
