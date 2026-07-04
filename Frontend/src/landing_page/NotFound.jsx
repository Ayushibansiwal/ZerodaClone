import React from 'react'
import { Link } from 'react-router';
function NotFound() {
    return (<>
        <div className="container py-5 my-5">
      <div className="row justify-content-center text-center my-5">
        <div className="col-lg-8">
          <h2
            className="fw-medium mb-3"
            style={{ color: "#424242", fontSize: "2rem" }}
          >
            404 Page not Found
          </h2>

          <p
            className="text-muted mb-4"
            style={{ fontSize: "1.2rem" }}
          >
            Sorry, the page you are looking for does not exists.
          </p>

            <Link to="/">
                <button
                    className="btn btn-primary px-5 py-2 fw-semibold"
                    style={{ fontSize: "1.1rem"}}
                >
                    let's go Home
                </button>
          </Link>
        </div>
      </div>
    </div>
    </>);
}

export default NotFound;