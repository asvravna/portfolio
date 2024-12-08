import React from 'react';
import profileImg from '../assets/about-pic.jpg'

function About(){
    return (
        <>
        <div className="profile-section">
            <section id= "profile">
                <div className="section_pic-container">
                    <img src={profileImg}
                        alt="Anna Ravna profile picture "
                        className="about-pic"
                        />
                </div>
            </section>
        </div>
        
        </>
    )
}

export default About;