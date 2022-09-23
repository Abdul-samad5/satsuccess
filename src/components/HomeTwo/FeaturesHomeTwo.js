import React from 'react';
import featureThumb from '../../assets/images/me/sat-3.gif';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';

function FeaturesHomeTwo() {
    return (
        <>
            <section className="appie-features-area-2 pt-90 pb-100" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="appie-section-title appie-section-title-2 text-center">
                                <h3 className="appie-title">
                                What You Get from SATSuccess</h3>
                                <p>
                               
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-features-boxes">
                                <div className="appie-features-box-item">
                                    <h4 className="title"> The Secret to Acing the SAT Without Wasting Money</h4>
                                    <p>Plus Gamified Online Learning Experience </p>
                                    {/* <p>The bee's knees chancer car boot absolutely.</p> */}
                                </div>
                                <div className="appie-features-box-item item-2">
                                    <h4 className="title">Your Easy to Follow, Foolproof SAT Study plan </h4>
                                    <p>so you can get the fastest improvement online in the shortest amount of time.</p>
                                    {/* <p>The bee's knees chancer car boot absolutely.</p> */}
                                </div>
                                <div className="appie-features-box-item item-3">
                                    <h4 className="title">Your Free Mock Proctored Practice Tests (Used by Over 30,000 Students!) </h4>
                                    <p>so you know what to expect at the exam.</p>
                                    {/* <p>The bee's knees chancer car boot absolutely.</p> */}
                                </div>
                                <div className="appie-features-box-item item-4">
                                    <h4 className="title">Your Personalized Strength & Weakness Breakdown </h4>
                                    <p>so you can see which areas you need to improve before you take a practice test.</p>
                                    {/* <p>The bee's knees chancer car boot absolutely.</p> */}
                                </div>
                                <div className="appie-features-box-item item-5">
                                    <h4 className="title">Your On-The-Go Study Solution That Works On Any Device  </h4>
                                    <p>so you boost your SAT score from your phone, your laptop, in the car, or on the couch.</p>
                                    {/* <p>The bee's knees chancer car boot absolutely.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-features-thumb wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <img src={featureThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-shape-1">
                    <img src={shape15} alt="" />
                </div>
                <div className="features-shape-2">
                    <img src={shape14} alt="" />
                </div>
                <div className="features-shape-3">
                    <img src={shape13} alt="" />
                </div>
            </section>
        </>
    );
}

export default FeaturesHomeTwo;
