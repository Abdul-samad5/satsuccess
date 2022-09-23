import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import testmonialUser from '../../assets/images/testimonial-user-1.png';

function TestimonialHomeTwo() {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    const settings = {
        autoplay: true,
        arrows: false,
        dots: false,
    };
    return (
        <>
            <section className="appie-testimonial-2-area mb-90" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-testimonial-2-box">
                                <div
                                    className="appie-testimonial-slider-2"
                                    style={{ position: 'relative' }}
                                >
                                    <span
                                        onClick={sliderPrev}
                                        className="prev slick-arrow"
                                        style={{ display: 'block' }}
                                    >
                                        <i className="fal fa-arrow-left" />
                                    </span>
                                    <Slider ref={sliderRef} {...settings}>
                                        <div className="appie-testimonial-slider-2-item">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={testmonialUser} alt="" />
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span>(4.7) review</span>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                    …really love the math challenges and the little quote of inspiration/motivation that comes with it…it helps me as a student. I also like that after I have answered the question, I see the workings. Sometimes it isn’t same with mine but I got the answers, so it allows me to study and learn your approach to the problem… I can proudly say I will recommend this to other student interested in SAT.
                                                    </p>
                                                    <div className="author-info">
                                                        <h5 className="title">Tochi Obi</h5>
                                                        <span>Verified Review</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appie-testimonial-slider-2-item">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={testmonialUser} alt="" />
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span>(4.7) review</span>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                    This is a game changer for our home school. The academic content is strong and presented in perfect, short segments that easily squeeze in during previously wasted moments during our day. Adding 3-4 sessions daily to our usual full schedule has been easy and painless. My son is even willing to use it over the weekend! Customer service has been top notch as well. Can’t recommend highly enough
                                                    </p>
                                                    <div className="author-info">
                                                        <h5 className="title">M Simpson</h5>
                                                        <span>Verified Review</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="appie-testimonial-slider-2-item">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={testmonialUser} alt="" />
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span>(4.7) review</span>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                    My son score went 200 points in few months. It’s a very smart way to learn and we have been searching for a program like this. Thank you for providing such an effective and economical online learning system.
                                                    </p>
                                                    <div className="author-info">
                                                        <h5 className="title">Stacy Reinhardt</h5>
                                                        <span>Verified Review</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="appie-testimonial-slider-2-item">
                                            <div className="item">
                                                <div className="thumb">
                                                    <img src={testmonialUser} alt="" />
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span>(4.7) review</span>
                                                </div>
                                                <div className="content">
                                                    <p>
                                                    I have to say, my girl is only 3 weeks in, but she LOVES her SAT prep…I’m so glad we found you! She looks forward to doing her Sat prep every day. The way you’ve broken things down is very helpful and motivating. And the humorous GIFs are on point and perfectly targeted to your audience
                                                    </p>
                                                    <div className="author-info">
                                                        <h5 className="title">Tara Krick</h5>
                                                        <span>Verified Review</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </Slider>
                                    <span
                                        onClick={sliderNext}
                                        className="next slick-arrow"
                                        style={{ display: 'block' }}
                                    >
                                        <i className="fal fa-arrow-right" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestimonialHomeTwo;
