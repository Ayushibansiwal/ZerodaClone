import React from 'react'
import { Link } from 'react-router-dom';
function Stats() {
    return (  
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">

                    <h2>Trust with confidence</h2>
                
                    <div className='row mt-5 mb-4'>
                        <h3 style={{color:"#424242"}}
                        className='fs-4 lh-sm'>Customer-first always</h3>
                        <p className='text-muted pr-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>

                    <div className='row mb-4'>
                        <h3 style={{color:"#424242"}} className='lh-sm fs-4'>No spam or gimmicks</h3>
                        <p className='text-muted pr-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <Link to="#" className='text-decoration-none'>Our philosophies.</Link></p>
                    </div>

                    <div className='row mb-4'>
                        <h3 style={{color:"#424242"}} className='lh-sm fs-4'>The Zerodha universe</h3>
                        <p className='text-muted pr-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>

                    <div className='row mb-4'>
                        <h3 style={{color:"#424242"}} className='lh-sm fs-4'>Do better with money</h3>
                        <p className='text-muted pr-5'>With initiatives like <Link to="#" className='text-decoration-none'>Nudge</Link> and <Link to="#" className='text-decoration-none'>Kill Switch</Link>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
            </div>
            <div className="mt-5 col-lg-6 col-md-6 mb-4">
                <img 
                    src="media/images/ecosystem.png" 
                    alt="StatsImage" 
                    className='img-fluid'
                />
                <div className='row text-center'>
                    <Link to="#" className='text-decoration-none mb-2'>Exlpre our products 
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <Link to="#" className='text-decoration-none'>
                        Try Kite demo
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Stats;