import React from "react";
import { Link } from "react-router";
function Universe() {
  return (
    <>
      <div className="container my-5 p-5">
        <div className="row my-5">
          <p className="fs-4 text-center">
            Want to know more about our technology stack? Check out the{" "}
            <Link className="fw-bold text-decoration-none">Zerodha.tech</Link>{" "}
            blog.
          </p>
        </div>

        <div className="row text-center my-5  p-5">
          <h3 className="fs-3 mb-3" style={{ color: "#424242" }}>
            The Zerodha Universe
          </h3>
          <p className="fs-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row ">
          <div className="col-lg-4 col-md-6 p-3">
            <div className="row">
              <img
                src="media/images/smallcaseLogo.png"
                alt=""
                style={{ width: "150px" }}
              />
            </div>
            <div className="row mt-2">
              <p className="text-muted text-small">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <div className="row">
              <img
                src="media/images/zerodhaFundhouse.png"
                alt=""
                className="img-fuild"
                style={{ width: "120px" }}
              />
            </div>
            <div className="row mt-2">
              <p className="text-muted">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <div className="row">
              <img
                src="media/images/sensibullLogo.svg"
                alt=""
                className="img-fuild"
                style={{ width: "120px" }}
              />
            </div>
            <div className="row mt-2">
              <p className="text-muted text-small">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4 col-md-6  p-3">
            <div className="row">
              <img
                src="media/images/streakLogo.png"
                alt=""
                className="img-fuild"
                style={{ width: "120px" }}
              />
            </div>
            <div className="row mt-2">
              <p className="text-muted text-small">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  p-3">
            <div className="row">
              <img
                src="media/images/dittoLogo.png"
                alt=""
                className="img-fuild"
                style={{ width: "120px" }}
              />
            </div>
            <div className="row mt-2">
              <p className="text-muted text-small">
                Personalized advice on life and health insurance. No spam and no
                mis-selling. Sign up for free
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  p-3">
            <div className="row">
              <img
                src="media/images/tijori.svg"
                alt=""
                className="img-fuild"
                style={{ width: "120px" }}
              />
            </div>
            <div className="row mt-2">
              <p className="text-muted text-small">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-auto">
            <button
              className="btn btn-primary px-5 py-2 fw-semibold"
              style={{ fontSize: "1.1rem" }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
