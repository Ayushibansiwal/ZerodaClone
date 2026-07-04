import React from "react";

function OpenAccount() {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center text-center my-5">
        <div className="col-lg-8">
          <h2
            className="fw-medium mb-3"
            style={{ color: "#424242", fontSize: "2rem" }}
          >
            Open a Zerodha account
          </h2>

          <p
            className="text-muted mb-4"
            style={{ fontSize: "1.2rem" }}
          >
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
            and F&amp;O trades.
          </p>

          <button
            className="btn btn-primary px-5 py-2 fw-semibold"
            style={{ fontSize: "1.1rem"}}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;