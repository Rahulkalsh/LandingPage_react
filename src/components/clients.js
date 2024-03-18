import React, { Component } from 'react';

class Clients extends Component {
  render() {
    // Array of client testimonials data
    const testimonials = [
      {
        imgSrc: "images/test2.PNG",
        name: "Arjun from Bangalore",
        quote: "SimplyEnglish played a key role in my professional growth. The refined communication skills and insightful Guided Learning Prompts helped me secure a promotion. Grateful for the app's impact on my career!"
      },
      {
        imgSrc: "images/test1.PNG",
        name: "Priya from Mumbai",
        quote: "Navigating Chat History on SimplyEnglish kept my learning organized and proved crucial for my important presentation preparation. Thanks to the app, I delivered with confidence and received positive feedback."
      },
      {
        imgSrc: "images/test4.PNG",
        name: "Raj from Delhi",
        quote: "SimplyEnglish's interactive learning was a game-changer for my business dealings. Personalized lessons and instant feedback through Voice-Enabled Learning significantly contributed to cracking a major business deal."
      },
      {
        imgSrc: "images/test3.PNG",
        name: "Aisha from Hyderabad",
        quote: "Ask Anything is my favorite feature on SimplyEnglish. It clarified my doubts during exam preparation, and the confidence gained through the app's unique features helped me clear my exam with flying colors."
      },
      {
        imgSrc: "images/test5.PNG",
        name: "Vikram from Chennai",
        quote: "As a content creator, SimplyEnglish was my go-to app for writing interactive website content. The fine-tuned language skills, courtesy of the app's features, made my content more engaging and impactful."
      },
      {
        imgSrc: "images/test6.PNG",
        name: "Neha from Kolkata",
        quote: "SimplyEnglish significantly impacted my exam preparation. The seamless Voice-Enabled Learning made practicing skills easy, and thanks to the app, I cleared my exam with confidence. Highly recommended!"
      }
    ];

    return (
      <div>
        <section className="clients">
          <div className="container mt-5">
            <h1 className="abtus mt-4 mb-5">What our clients say</h1>
            <div className="row clienthead">
              <div className="col-md-12">
                <div id="news-slider-client" className="owl-carousel">
                  {testimonials.map((testimonial, index) => (
                    <div className="col-sm-12 d-flex" key={index}>
                      <div className="testimonial">
                        <img src={testimonial.imgSrc} className="imgtest" alt={`Client ${index + 1}`} />
                        <h5 className="mt-4">{testimonial.name}</h5>
                        <p className="description mt-4">{testimonial.quote}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Clients;
