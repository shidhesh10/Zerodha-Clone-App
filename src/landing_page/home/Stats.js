import React from 'react';

function Stats() {
    return ( 
        <div className="container">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                    <div className='mt-5'>
                        <h2 className='fs-4'>Customer-first always</h2>
                        <p className='text-muted' style={{maxWidth:"90%", lineHeight:"1.8"}}>
                            That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>

                    <div className='mt-4'>
                        <h2 className='fs-4'>No spam or gimmicks</h2>
                        <p className='text-muted' style={{maxWidth:"90%", lineHeight:"1.8"}}>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" style={{textDecoration:"none"}}>Our philosophies</a>.
                        </p>
                    </div>

                    <div className='mt-4'>
                        <h2 className='fs-4'>The Zerodha universe</h2>
                        <p className='text-muted' style={{maxWidth:"90%", lineHeight:"1.8"}}>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>

                    <div className='mt-4'>
                        <h2 className='fs-4'>Do better with money</h2>
                        <p className='text-muted' style={{maxWidth:"90%", lineHeight:"1.8"}}>
                            With initiatives like <a href="#" style={{textDecoration:"none"}}>Nudge</a> and <a href="#" style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>
                </div>
                <div className="col-6 mt-3">
                    <img src="media/images/ecosystem.png" alt="Ecosystem" style={{width:"90%"}}/>

                    <div className='text-center'>
                        <a href="#" className='mx-4' style={{textDecoration:"none"}}>
                            Explore our products <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                        <a href="#" style={{textDecoration:"none"}}>
                            Try kite demo <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;