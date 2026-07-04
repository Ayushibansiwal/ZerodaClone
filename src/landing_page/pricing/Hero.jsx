import React from "react";

function Hero() {
  const freeBadge = (
    <span
      style={{
        backgroundColor: "#4caf50",
        fontSize: "11px",
        fontWeight: "500",
        padding: "6px 10px",
        color:"#fff",
        borderRadius:"3px"
      }}
    >
      FREE
    </span>
  );

  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="row text-center py-5">
        <h2 style={{ color: "#424242" }}>Charges</h2>
        <p className="fs-5 text-muted">
          List of all charges and taxes
        </p>
      </div>

      {/* Cards */}
      <div className="row text-center gy-5 mb-5">
        <div className="col-lg-4 col-md-6">
          <img
            src="media/images/pricingMF.svg"
            alt="Free equity delivery"
            className="img-fluid mb-4"
            style={{ width: "80%" }}
          />

          <h3 className="fs-4">Free equity delivery</h3>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div className="col-lg-4 col-md-6">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday trades"
            className="img-fluid mb-4"
            style={{ width: "80%" }}
          />

          <h3 className="fs-4">Intraday and F&O trades</h3>

          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency and commodity. Flat ₹20 on
            all option trades.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mx-md-auto">
          <img
            src="media/images/pricingMF.svg"
            alt="Mutual funds"
            className="img-fluid mb-4"
            style={{ width: "80%" }}
          />

          <h3 className="fs-4">Free direct MF</h3>

          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions and DP charges.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="row">
        <div className="col">
          <h3
            className="mb-4"
            style={{ color: "#424242" }}
          >
            Charges for account opening
          </h3>

        <div className="border rounded">
            <table className="table mb-0 table-striped bTable">
            <thead>
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Individual account</td>
                <td>{freeBadge}</td>
              </tr>

              <tr>
                <td>Minor account</td>
                <td>{freeBadge}</td>
              </tr>

              <tr>
                <td>NRI account</td>
                <td>₹500</td>
              </tr>

              <tr>
                <td>HUF account</td>
                <td>
                  {freeBadge} <span className="ms-2">(online) / ₹500 (offline)</span>
                </td>
              </tr>

              <tr>
                <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                <td>₹500</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;