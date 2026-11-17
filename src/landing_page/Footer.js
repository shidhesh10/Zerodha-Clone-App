import React from 'react';

function Footer() {
    return ( 
        <h1>
            <div className="container footer">
                <div className="row">
                    <div className="col">
                        <img src="media/images/logo.svg" alt="logo" style={{width:"50%"}}/>
                        <p style={{fontSize:"0.75rem", color:"rgb(134, 124, 124)", marginTop:"25px"}} className='muted'>
                            © 2010 - 2026, Zerodha Broking Ltd. <br />All rights reserved.
                        </p>
                    </div>

                    <div className="col custom-footer-link">
                        <p style={{fontSize:"1.25rem"}}>Company</p>
                            <a href="#">About</a><br />
                            <a href="#">Philosophy</a><br />
                            <a href="#">Press & media</a><br />
                            <a href="#">Careers</a><br />
                            <a href="#">Zerodha Cares (CSR)</a><br />
                            <a href="#">Zerodha.tech</a><br />
                            <a href="#">Open source</a><br />
                            <a href="#">Referral program</a><br />
                    </div>

                    <div className="col custom-footer-link">
                        <p style={{fontSize:"1.25rem"}}>Support</p>
                            <a href="#" >Contact us</a><br />
                            <a href="#">Support portal</a><br />
                            <a href="#">How to file a complaint?</a><br />
                            <a href="#">Status of your complaints</a><br />
                            <a href="#">Bulletin</a><br />
                            <a href="#">Circular</a><br />
                            <a href="#">Z-Connect blog</a><br />
                            <a href="#">Downloads</a><br />
                    </div>

                    <div className="col custom-footer-link">
                        <p style={{fontSize:"1.25rem"}}>Account</p>
                            <a href="#" >Open demat account</a><br />
                            <a href="#">Minor demat account</a><br />
                            <a href="#">NRI demat account</a><br />
                            <a href="#">HUF demat account</a><br />
                            <a href="#">Commodity</a><br />
                            <a href="#">Dematerialisation</a><br />
                            <a href="#">Fund transfer</a><br />
                            <a href="#">MTF</a><br />
                    </div>

                </div>
            </div>
        </h1>
     );
}

export default Footer;