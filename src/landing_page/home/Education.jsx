import React from 'react'
import { Link } from 'react-router-dom';
function Eduction() {
    return (<>
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 p-3 ">
                    <img src="media/images/education.svg" alt="EducationImage" className='img-fluid'/>
                </div>
                <div className="col-lg-6 col-md-6 mt-5 ">
                    <h2 className='mb-4 fs-3' 
                        style={{color:"#424242"}}>Free and open market education</h2>
                    <p className='lh-base my-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <Link to="" 
                    className="text-decoration-none fw-semibold" 
                    style={{
                        fontSize:"16px",
                        fontWeight:"500"}}
                    >Varsity 
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>

                    <p className='lh-base my-4'>TradingQ&A, the most active trading and investment community in <br /> India for all your market related queries.</p>

                    <Link to="" 
                    className="text-decoration-none fw-semibold" 
                    style={{
                        fontSize:"16px",fontWeight:"500"}}>
                        TradingQ&A 
                        <i className="fa-solid fa-arrow-right-long "></i>
                    </Link>
                </div>
            </div>
        </div>
    </>);
}

export default Eduction;