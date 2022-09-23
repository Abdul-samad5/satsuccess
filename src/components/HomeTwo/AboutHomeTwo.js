import React from 'react';
import aboutThumb from '../../assets/images/me/sat-2.png';

function AboutHomeTwo() {
    return (
        <>
            <section className="appie-about-area mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-about-box wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="about-thumb">
                                            <img src={aboutThumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="appie-about-content">
                                            <span>       Goodbye to stressful and expensive  SAT prep!</span>
                                            <h3 className="title">
                                            SAT prep “wey go Harvard and MIT”
                                            </h3>
                                            <p>
                                            SATSuccess system was created by graduates of Harvard and MIIT.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="appie-about-service mt-30">
                                                    <div className="icon">
                                                        <i className="fal fa-check" />
                                                    </div>
                                                    <h4 className="title">over 3,000 students are ditching other offerings for engaging, bite-size online SAT prep that gets results.</h4>
                                                    {/* <p>
                                                        Mucker plastered bugger all mate morish are.
                                                    </p> */}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="appie-about-service mt-30">
                                                    <div className="icon">
                                                        <i className="fal fa-check" />
                                                    </div>
                                                    <h4 className="title">To build a motivational online SAT prep solution so that you can get best-in-class test prep expertise, without draining your bank account.</h4>
                                                    {/* <p>
                                                        Mucker plastered bugger all mate morish are.
                                                    </p> */}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="appie-about-service mt-30">
                                                    <div className="icon">
                                                        <i className="fal fa-check" />
                                                    </div>
                                                    <h4 className="title">An to deepen this access globally and locally including Africa.</h4>
                                                    {/* <p>
                                                        Mucker plastered bugger all mate morish are.
                                                    </p> */}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="appie-about-service mt-30">
                                                    <div className="icon">
                                                        <i className="fal fa-check" />
                                                    </div>
                                                    <h4 className="title">The Mutual mission of the partners; Everyday and Examian is for you to say Goodbye to stressful Sat prep.</h4>
                                                    {/* <p>
                                                        Mucker plastered bugger all mate morish are.
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeTwo;
