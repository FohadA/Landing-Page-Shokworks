import React from "react";
import '../style-sheets/footer.css';

function Footer(){
    return(

        <div className="footer">
            <div className="center">
                <img className="footer-logo" src="./img/logo.png" alt="Logotipo" />
            </div>

            <div className="footer-info">

                <div className="contact-footer">
                    <h3>Contact Us</h3>

                    <div className="contact-info">
                        <img src="./img/contact.svg" alt="Contacto" />
                        <p>+(1)824-5428</p>
                    </div>
                        
                    <div className="contact-info">
                        <img src="./img/contact.svg" alt="Contacto" />
                        <p>Miami, United State</p>
                    </div>

                    <div className="contact-info">
                        <img src="./img/contact.svg" alt="Contacto" />
                        <p>yfuentes@shokworks.io</p>
                    </div>
                        
                </div>

                <div className="company-footer">
                    <h3>Our Company</h3>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Product</a>
                    <a href="/">Career</a>
                    <a href="/">Blog</a>
                </div>

                <div className="social-footer">
                    <h3>Social Contracts</h3>
                    <a href="/">Facebook</a>
                    <a href="/">LinkedIn</a>
                    <a href="/">Youtube</a>
                    <a href="/">Vimeo</a>
                    <a href="/">Skype</a>
                </div>

                <div className="address-footer">
                    <h3>Address</h3>
                    <p>Internet Systems Consortium, Inc. 950<br/> Charter Street Redwood City, CA USA.</p>
                    <h3>Follow Us</h3>

                    <div className="icons">
                        <div className="facebook icon">
                            <img src="./img/facebook.svg" alt="Facebook" />
                        </div>

                        <div className="skype icon">
                            <img src="./img/skype.svg" alt="Skype" />
                        </div>

                        <div className="linkedin icon">
                            <img src="./img/linkedin.svg" alt="Linkedin" />
                        </div>

                        <div className="instagram icon">
                            <img src="./img/instagram.svg" alt="Instagram" />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
            
        

    );
};

export default Footer;