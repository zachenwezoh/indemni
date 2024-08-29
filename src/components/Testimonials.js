import React from 'react';
import '../App.css';

function Testimonials() {
    return (
        <div className="rainbow-testimonial-area rainbow-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-left" data-sal="slide-up" data-sal-duration="400"
                            data-sal-delay="150">
                            <h4 className="subtitle">
                                <span className="theme-gradient">Assisting individuals</span>
                            </h4>
                            <h2 className="title mb--60">
                                The opinions of the community
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows">
                            <div className="slide-single-layout">
                                <div className="rainbow-box-card active card-style-default testimonial-style-defalt has-bg-shaped">
                                    <div className="inner">
                                        <div className="rating">
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="description">Rainbow-Themes has become such an integral part of
                                                our work! By putting our</p>
                                            <div className="bottom-content">
                                                <div className="meta-info-section">
                                                    <p className="title-text">Guy Hawkins</p>
                                                    <p className="desc">Nursing Assistant</p>
                                                    <div className="desc-img">
                                                        <img src="/images/brand/brand-t.png" alt="Brand Image"/>
                                                    </div>
                                                </div>
                                                <div className="meta-img-section">
                                                    <a className="btn-default rounded-player style-two xs-size popup-video"
                                                        href="https://www.youtube.com/watch?v=ikEdN260zRg">
                                                        <span><i className="fa-duotone fa-play"></i></span>
                                                    </a>
                                                    <a className="image" href="#">
                                                        <img src="/images/team/team-02sm.jpg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-shape">
                                        <img src="/images/service/bg-testimonial.png" alt="" className="bg"/>
                                        <img src="/images/service/bg-testimonial-hover.png" alt="" className="bg-hover"/>
                                    </div>
                                </div>
                            </div>

                            {/* Repeat the above block for additional testimonials */}
                            
                            <div className="slide-single-layout">
                                <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped">
                                    <div className="inner">
                                        <div className="rating">
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                            <a href="#rating">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="description">Rainbow-Themes has become such an integral part of
                                                our work! By putting our</p>
                                            <div className="bottom-content">
                                                <div className="meta-info-section">
                                                    <p className="title-text">Guy Hawkins</p>
                                                    <p className="desc">Nursing Assistant</p>
                                                    <div className="desc-img">
                                                        <img src="/images/brand/brand-t.png" alt="Brand Image"/>
                                                    </div>
                                                </div>
                                                <div className="meta-img-section">
                                                    <a className="btn-default rounded-player style-two xs-size popup-video"
                                                        href="https://www.youtube.com/watch?v=ikEdN260zRg">
                                                        <span><i className="fa-duotone fa-play"></i></span>
                                                    </a>
                                                    <a className="image" href="#">
                                                        <img src="/images/team/team-02sm.jpg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-shape">
                                        <img src="/images/service/bg-testimonial.png" alt="" className="bg"/>
                                        <img src="/images/service/bg-testimonial-hover.png" alt="" className="bg-hover"/>
                                    </div>
                                </div>
                            </div>

                            {/* Add more slide-single-layouts as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
