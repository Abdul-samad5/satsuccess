import React from 'react';
import Sponser2 from '../../assets/images/me/Canacare.png';
import Sponser1 from '../../assets/images/me/everydae.png';
import Sponser3 from '../../assets/images/me/examian.png';
import Sponser4 from '../../assets/images/me/Gritford.png';
import Sponser5 from '../../assets/images/me/SkillTube.png';
import sponserShape from '../../assets/images/sponser-shape.png';

function SponserHomeTwo({ className }) {
    return (
        <>
            <section className={`appie-sponser-area pb-100 ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">
                                Join Our Partnership Network Across Africa
                                </h3>
                                <p>Do You Offer SAT Prep Anywhere in Africa? <br/>
Are You An Educator, a School or Exam Prep/ Tutorial Centre Owner <br />
Do You desire a gamified and engaging online learning experience for students and instructors.
</p>
                        
                            </div>
                            <ul style={{listStyleType: "circle"}}>
                            <li>We offer the all-in-one online learning solution for growing education companies</li>
                            <li>Easily launch and scale a gamified and engaging online learning experience for students and instructors.</li>
                            <li>Save time and money - we do the heavy lifting!</li>
                            <li>Includes powerful analytics</li>
                            <li>Sell directly to the public or into schools/orgs</li>
                            <li>Built for educators, by educators</li>
                        </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-sponser-box d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src={Sponser1} alt="" style={{marginRight: "40px"}}/>
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser2} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser3} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser4} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser5} alt="" />
                                </div>
                                {/* <div className="sponser-item">
                                    <img src={Sponser6} alt="" />
                                </div> */}
                            </div>
                            {/* <div className="appie-sponser-box item-2 d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src={Sponser7} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser8} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser9} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser10} alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="sponser-shape">
                    <img src={sponserShape} alt="" />
                </div>
            </section>
        </>
    );
}

export default SponserHomeTwo;
