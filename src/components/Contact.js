import React from 'react';
import emailicon from '../assets/email.png';

function Contact(){
    return (
            <div className="contact-section">
                <section id="contact">
                    <p className="section__text__p1"> Get in touch</p>
                    <h1 className="title"> Contact me</h1>
                    <div className="contact-info-upper-container">
                        <div className="contact-info-container">
                            <img src="" alt="Email icon"
                            className="icon contact-icon"
                        />
                        <p><a href="mailto:ansvravna@gmail.com"> ansvravna@gmail.com</a></
                        p>
                        </div>
                        <div className="contact-info-container">
                            <img src="./assets/linkedin.png" alt="LinkedIn icon"
                            className="icon contact-icon"
                        />
                        <p><a onclick="window.openInNewTab('https://www.linkedin.com/in/anna-sofie-vylka-ravna-2849ba284/')"> 
                        LinkedIn</a></
                        p>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default Contact;