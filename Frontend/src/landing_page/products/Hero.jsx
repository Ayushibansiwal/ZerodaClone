import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
    return (<>
        <div className="container my-5">
            <div className="row text-center py-5">
                <h2 style={{color:"#424242"}}>Zerodha Products</h2>
                <p className='text-muted fs-4'>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <Link style={{textDecoration:"none", fontWeight:"600"}}>investment offerings <i className="fa-solid fa-arrow-right-long"></i></Link></p>
            </div>
        </div>
    </>);
}

export default Hero;