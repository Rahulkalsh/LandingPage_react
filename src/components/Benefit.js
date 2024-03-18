import React, { Component } from 'react';

class BenefitItem extends Component {
  render() {
    const { imgSrc, title } = this.props;
    return (
      <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
        <img src={imgSrc} alt="feature-img" width="180px" className="img-fluid rounded" />
        <h3 className="text-white mt-4">{title}</h3>
      </div>
    );
  }
}

class Benefit extends Component {
  render() {
    const benefitsData = [
      { imgSrc: "images/benefit1..PNG", title: "24X7 English Tutor" },
      { imgSrc: "images/benefit2.PNG", title: "Ask Questions Any Time" },
      { imgSrc: "images/benefit3.PNG", title: "Progress Tracking" },
    ];

    return (
      <div>
        <section className="benefit">
          <div className="container">
            <h1 className="abtus text-white">Key Benefits</h1>
            <div className="row mt-5 d-flex align-items-center">
              {benefitsData.map((benefit, index) => (
                <BenefitItem key={index} imgSrc={benefit.imgSrc} title={benefit.title} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Benefit;
