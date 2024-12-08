import React from 'react'


function About(){
    return (
        <>
        <div class="about-section">
        <section id="about"> 
            <div class="text-box">
                <p class="section__text__p1"> Get to know more</p>
                <h1 class=" title"> About me</h1>
            </div>
            <div class="section-container">
                <div class=" about-details-container">
                    <div class="about-containers">
                        <div class="details-container">
                            <img src="./assets/experience.png" alt="Experience icon"
                            class="icon"
                            />
                            <h3>Experience</h3>
                            <p>2+ years Software developement</p>
                        </div>
                        <div class="details-container">
                            <img 
                            src="./assets/education.png" alt="Education icon"
                            class="icon"
                            />
                            <h3>Education</h3>
                            <p>2nd year of B.Sc Bachelors degree Informatics: Design, Use and Interaction University of Oslo</p>
                         </div>
                    </div>
                    <div class="text-container">
                        <p>
                            I am a 21 year old student from Tromsø, studying informatics at University of Oslo. I am currently studying research methods in Human-Computer-Interaction, as well as how public services and legal systems can automated to be more efficient. I have a great interest in software development, and I like working with both backend and frontend technologies.
                        </p>
                    </div>
                </div>
            </div>
            <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow"
            onclick="location.href='./#experience'"
            />
        </section>
    </div>
    </>
    )
}


export default About;