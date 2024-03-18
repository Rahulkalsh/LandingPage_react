import React, { Component } from 'react';

class Client extends Component {
  render() {
    // Array of client logos data
    const clientLogos = [
      "abhinav.PNG",
      "airtel.PNG",
      "aspire.PNG",
      "british.PNG",
      "cologate.PNG",
      "delhimetro.PNG",
      "dpworld.PNG",
      "edusky.PNG",
      "foundation.PNG",
      "g2market.PNG",
      "jcb.PNG",
      "john.PNG",
      "midways.PNG",
      "nov.PNG",
      "radington.PNG",
      "school.PNG",
      "shubham.PNG",
      "sos.PNG",
      "univer.PNG",
      "vlcc.PNG"
    ];

    return (
      <div className="clinetlogos">
        <div className="clientlogo_items">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={`images/clientlogo/${logo}`}
              alt={`Client Logo ${index}`}
              className="img-fluid"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Client;
