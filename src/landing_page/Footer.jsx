import React from "react";

function Footer() {
  return (
    <footer className="container ">
      {/* Top Section */}
      <div className="row my-4 ">
        {/* Logo */}
        <div className="col-lg-3 col-md-6 mb-5">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            className="img-fluid"
            style={{ width: "80%" }}
          />

          <p className="text-muted my-4 small">
            &copy; 2010 - 2026, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="col"></div>

        {/* Account */}
        <div className="col-lg-2 col-md-6 px-3 mb-5">
          <h5>Account</h5>
          <ul className="list-unstyled text-muted">
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>HUF demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
          </ul>
        </div>

        {/* Support */}
        <div className="col-lg-2 col-md-6 px-3 mb-5">
          <h5>Support</h5>
          <ul className="list-unstyled text-muted">
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>

        {/* Company */}
        <div className="col-lg-2 col-md-6 px-3 mb-5">
          <h5>Company</h5>
          <ul className="list-unstyled text-muted">
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares (CSR)</li>
            <li>Zerodha.tech</li>
            <li>Open source</li>
            <li>Referral program</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-lg-2 col-md-6 px-3 mb-5">
          <h5>Quick links</h5>
          <ul className="list-unstyled text-muted">
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Economic calendar</li>
            <li>Calculators</li>
            <li>Markets</li>
            <li>Sectors</li>
            <li>Gift Nifty</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-5 row mb-3">
        <p
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "1.8" }}
        >
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to complaints@zerodha.com, for DP related to
          dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
          <br /> <br />
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
          <br /> <br />
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
          <br /> <br />
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
          <br /> <br />
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
          <br /> <br />
          India's largest broker based on networth as per NSE. NSE broker
          factsheet
        </p>
      </div>

      {/* Bottom Links */}
        <div className="border-top py-3">
          <ul className="list-inline text-center text-muted mb-0">
            <li className="list-inline-item mx-3">NSE</li>
            <li className="list-inline-item mx-3">BSE</li>
            <li className="list-inline-item mx-3">MCX</li>
            <li className="list-inline-item mx-3">MSEI</li>
            <li className="list-inline-item mx-3">Terms & Conditions</li>
            <li className="list-inline-item mx-3">Policies & Procedures</li>
            <li className="list-inline-item mx-3">Disclosure</li>
            <li className="list-inline-item mx-3">Investor Charter</li>
            <li className="list-inline-item mx-3">Sitemap</li>
          </ul>
      </div>
      
    </footer>
  );
}

export default Footer;
