import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="Education" style={{width:"80%"}}/>
                </div>
                <div className="col-6 mt-5">
                    <div className='mb-3'>
                        <h2 className='fs-4'>Free and open market education</h2>
                        <p className='text-muted mt-5 mb-1' style={{maxWidth:"90%", lineHeight:"1.8"}}>
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="#" style={{textDecoration:"none"}}>
                            Varsity <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>

                    <div>
                        <p className='text-muted mb-1' style={{maxWidth:"90%", lineHeight:"1.8"}}>
                            TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="#" style={{textDecoration:"none"}}>
                            Trading Q&A <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;