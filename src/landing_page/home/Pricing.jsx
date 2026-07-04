import React from "react";
import { Link } from 'react-router-dom';
function Pricing() {
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        {/* Left Section */}
        <div className="col-lg-6 col-md-6 mb-4">
          <h3 className="mb-3" style={{ color: "#424242" }}>
            Unbeatable pricing
          </h3>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <Link to="" className="text-decoration-none fw-semibold" style={{fontSize:"16px",fontWeight:"500"}}>
            See pricing
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </Link>
        </div>
        
        {/* Right */} 
        <div className="col-lg-6 col-md-6 px-3 ">
           
          <div className="row">
             
            <div className="col-md-4 d-flex align-items-end p-0 position-relative ">
               
              <img
                src="media/images/pricing0.svg"
                alt=""
                className="img-fuild"
              /> 
              <p
                style={{
                  fontSize: "10px",
                  left: "100px",
                  transform: "translateY(-50%)",
                }}
                className="text-muted position-absolute"
              >
                Free account opening 
              </p> 
            </div> 
            <div className="col-md-4 d-flex align-items-end position-relative p-0">
               
              <img
                src="media/images/pricing0.svg"
                alt=""
                className="img-fuild"
              /> 
              <p
                style={{
                  fontSize: "10px",
                  left: "90px",
                  transform: "translateY(-50%)",
                }}
                className="text-muted position-absolute mb-0"
              >
                Free equity delivery and direct mutual funds 
              </p> 
            </div> 
            <div className="col-md-4 d-flex align-items-end p-0 ">
              <img
                src="media/images/intradayTrades.svg"
                alt=""
                className="img-fuild"
              /> 
              <p style={{ fontSize: "10px" }} className="text-muted"> 
                Intraday and F&O 
              </p> 
            </div> 
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Pricing;
