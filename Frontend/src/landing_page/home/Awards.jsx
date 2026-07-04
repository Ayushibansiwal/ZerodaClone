import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row">

        {/* Left Image */}
        <div className="col-lg-6 col-md-6 mb-4  text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>
        

        {/* Right Content */}
        <div className="col-lg-6 col-md-6 mt-3">
          <h2 className="mb-4" style={{ color: "#424242" }}>
            Largest stock broker in India
          </h2>

          <p className="text-muted mb-4">
            <strong><i>2+ million</i></strong> Zerodha clients contribute to over{" "}
            <strong><i>15%</i></strong> of all retail order volumes in India daily by
            trading and investing in:
          </p>

          <div className="row">

            <div className="col-6">
              <ul>
                <li className="mb-3">Futures & Options</li>
                <li className="mb-3">Commodity derivatives</li>
                <li className="mb-3">Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li className="mb-3">Stocks & IPOs</li>
                <li className="mb-3">Direct mutual funds</li>
                <li className="mb-3">Bonds and Govt. Securities</li>
              </ul>
            </div>

          </div>

          <div className="mt-4 text-center text-lg-start">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;