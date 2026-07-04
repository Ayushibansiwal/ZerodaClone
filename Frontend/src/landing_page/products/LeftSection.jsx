import React from "react";
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
  return(<>
    <div className="container my-5">
        <div className="row">
            <div className="col-lg-7 col-md-6 p-5 ">
                <img 
                    src={imageURL} 
                    alt="productImage"
                    className="img-fluid" />
            </div>
            <div className="col-lg-5 col-md-6 my-5 p-5">
                <h1  style={{color:"#424242", marginBottom:"25px"}} className="fs-3">{productName}</h1>
                <p className="text-muted lh-base"
                 style={{fontSize:"18px"}}>{productDescription}</p>

                <div className="my-3">
                    <a href={tryDemo}
                     className="me-3 text-decoration-none">Try Demo 
                      <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                    <a href={learnMore}
                     className="me-3 text-decoration-none">Learn more
                      <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                </div>
                <div className="my-3">
                    <a href={googlePlay}
                        className="me-3 mb-3">
                            <img src="media/images/googlePlayBadge.svg" alt="" />
                    </a>
                    <a href={appStore}
                     className="me-3 mb-3">
                            <img src="media/images/appstoreBadge.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  </>);
}

export default LeftSection;
