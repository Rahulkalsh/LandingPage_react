import React, { Component } from 'react';

class CaseStudyItem extends Component {
  render() {
    const { imgSrc, title } = this.props;
    return (
      <div className="col-sm-12 d-flex">
        <div className="">
          <img src={imgSrc} alt="" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-text">{title}</h5>
          </div>
        </div>
      </div>
    );
  }
}

class CaseStudy extends Component {
  render() {
    const caseStudies = [
      { imgSrc: "images/craft.PNG", title: "Craft A+ Essays: Elevate your grades with Simply English's writing expertise." },
      { imgSrc: "images/communication.PNG", title: "From Lines of Code to Lines of Communication: Simply English Unleashes Your Potential" },
      { imgSrc: "images/speak.PNG", title: "Speak with Heart: Simply English—Moms, speaking the language of their children with ease" },
      { imgSrc: "images/powerful.jpeg", title: "Powerful Vision, Persuasive Words: Simply English for Business Leaders." },
    ];

    return (
      <div>
        <section className="casestudy">
          <div className="container mt-5">
            <h1 className="abtus mt-4">Case Study</h1>
            <div className="row mt-5 mb-3">
              <div className="col-md-12">
                <div id="news-slider" className="owl-carousel">
                  {caseStudies.map((study, index) => (
                    <div className="" key={index}>
                      <CaseStudyItem imgSrc={study.imgSrc} title={study.title} />
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

export default CaseStudy;
