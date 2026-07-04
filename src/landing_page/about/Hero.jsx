import React from 'react'
function Hero() {
    return (<>
        <div className="container my-5">
            <div className="row my-5 px-0 py-5">
               <h1 className='fs-3 text-center' style={{color:"#424242"}}>
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.
                </h1> 
            </div>
            <div className="row border-top">
                <div className="col-lg-6 col-md-6 my-5  px-5">
                    <p className='lh-base mt-5 text-muted'>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                    <br /><br />

                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

                    <br /><br />

                    Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-lg-6 col-md-6  my-5  px-5">
                    <p className='lh-base mt-5 text-muted'>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        <br /><br />

                        Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        <br /><br />
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                    </p>
                </div>
            </div>
            <div className="row my-5">
                <div className="row">
                    <h1 
                        className='fs-3 text-center' style={{color:"#424242"}}>
                        Made with <span style={{color:"red"}}>&hearts;</span> by AYUSHIBANSIWAL
                    </h1>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center p-3">
                        <img src="media/images/nithinKamath.jpg" alt="ayushiImage" style={{borderRadius:"100%", height:"250px"}}  className='img-fuild'/>
                        <p className='mt-3 mb-0 fs-5'>Ayushi Bansiwal</p>
                        <p className='text-muted'>Full Stack Developer</p>
                    </div>
                    <div className="col-lg-6 col-md-6 p-5">
                        <p className='lh-lg mt-3 text-muted'>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                            <br /><br />
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                            <br /><br />
                            Playing basketball is his zen.
                            <br /><br />
                            Connect on Homepage / TradingQnA / Twitter
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Hero;