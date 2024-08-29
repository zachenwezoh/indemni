import React from 'react';
import '../App.css';

function CTAArea() {
    return (
        <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="aiwave-cta">
                            <div className="inner">
                                <div className="content-left">
                                    <div className="section-title text-left" data-sal="slide-up" data-sal-duration="400" data-sal-delay="150">
                                        <h4 className="subtitle">
                                            <span className="theme-gradient">Get Started with Rainbow</span>
                                        </h4>
                                        <h2 className="title w-600 mb--20">
                                            Experience Products in AI
                                        </h2>
                                        <p className="description b1">
                                            Based on the conversation with the AI chatbot, you will receive 
                                            personalized recommendations. 
                                        </p>
                                    </div>
                                    <div className="app-store-btn">
                                        <a className="store-btn" href="#">
                                            <img src="/images/cta-img/play-app.png" alt="Play Store Button"/>
                                        </a>
                                        <a className="store-btn" href="#">
                                            <img src="/images/cta-img/apple-app.png" alt="Apple Store Button"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <div className="img-right">
                                        <img src="/images/cta-img/view-img.png" alt="Mobile View"/>
                                    </div>
                                </div>
                                <div className="bg-shape-one">
                                    <img src="/images/cta-img/bg-shape.png" alt="Bg shape"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTAArea;
