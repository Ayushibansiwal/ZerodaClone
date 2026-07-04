import React from 'react'
function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (<>
        <div className="container my-5">
        <div className="row">
            <div className="col-lg-5 col-md-6 my-5 p-5 d-flex flex-column justify-content-center">
                <h1  style={{color:"#424242", marginBottom:"25px"}} className="fs-3">{productName}</h1>
                <p className="text-muted lh-base"
                 style={{fontSize:"18px"}}>{productDescription}</p>

                <div className="my-3">
                    <a href={learnMore}
                     className="me-3 text-decoration-none">Learn more
                      <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                </div>
            </div>
            <div className="col-lg-7 col-md-6 p-5 ">
                <img 
                    src={imageURL} 
                    alt="productImage"
                    className="img-fluid" />
            </div>
        </div>
    </div>
    </>);
}

export default RightSection;