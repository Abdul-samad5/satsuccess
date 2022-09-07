import React from 'react';

function ServicesHomeTwo({ className }) {
    return (
        <>
            <section className={`appie-services-2-area pb-100 ${className}`} id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">How Does SATSuccess Work?</h3>
                                <p>
                                For the first time ever, the award-winning education American company; Everydae has partnered with Examian; Africa’s leading EdTech and mock test startup to create Africa's No.1 SATPrep- SAT Success. It’s a 10-minute microlearning system that engages, guides, and gets students to mastery, no matter their starting point.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            {/* <div className="appie-section-title text-right">
                                <a className="main-btn" href="#">
                                    View all Features <i className="fal fa-arrow-right" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-bolt" />
                                </div>
                                <h4 className="title">Smart Prep</h4>
                                {/* <p>
                                    Oxford posh bevvy give us a bell gutted mate spend a penny
                                    quaint cockup plastered.
                                </p> */}
                                <ul style={{listStyleType: 'disc'}}>
                                    <li>Smart, engaging and intuitive learning system</li>
                                    <li>knows exactly which skills you should learn to get the score you want</li>
                                    <li>Helps you to transform the skills to success habit</li>
                                </ul>
                                {/* <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-home" />
                                </div>
                                <h4 className="title">Guaranteed Improvement</h4>
                                <ul style={{listStyleType: 'disc'}}>
                                    <li>Easily reach mastery without the stress</li>
                                    <li>Easy and fun to use</li>
                                    <li>Just 10 minutes a day</li>
                                    <li>Guaranteed improvement in just 8 weeks</li>
                                </ul>
                                {/* <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-link" />
                                </div>
                                <h4 className="title">Microlearning works: we’ve proven it.</h4>
                                <ul style={{listStyleType: 'disc'}}>
                                    <li>Increase knowledge retention by up to 20%s</li>
                                    <li>Boost confidence and reduce learner anxiety</li>
                                    <li>Maximize engagement and course completion</li>
                                </ul>
                                {/* <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a> */}
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-4 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-bell" />
                                </div>
                                <h4 className="title">Fast and intuitive</h4>
                                <p>
                                    Oxford posh bevvy give us a bell gutted mate spend a penny
                                    quaint cockup plastered.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-5 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-cog" />
                                </div>
                                <h4 className="title">Fast and intuitive</h4>
                                <p>
                                    Oxford posh bevvy give us a bell gutted mate spend a penny
                                    quaint cockup plastered.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-6 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-lock" />
                                </div>
                                <h4 className="title">Fast and intuitive</h4>
                                <p>
                                    Oxford posh bevvy give us a bell gutted mate spend a penny
                                    quaint cockup plastered.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div> 
                        </div>*/}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeTwo;
