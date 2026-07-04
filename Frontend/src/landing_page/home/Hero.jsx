import React from 'react'
function Hero() {
    return (<>
        <div className='container p-5 mb-5'>
            <div className="row justify-content-center text-center">
                <div className="col-lg-12 col-md-10">
                    <img 
                    src="media/images/homeHero.png" alt='HeroImage' 
                    className="img-fluid mb-5"></img>

                    <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                <button
                    className="btn btn-primary px-5 py-2 fw-semibold"
                    style={{ fontSize: "1.1rem"}}
                >
                    Sign up for free
                </button>

                </div>
            </div>
        </div>
    </>);
}

export default Hero;