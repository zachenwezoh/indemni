import React from 'react';
import '../App.css';

function RainbowCTA() {
    return (
        <div className="rainbow-rn-cta">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8">
                        <div className="inner">
                            <div className="content text-left">
                                <h4 className="title sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="200">
                                    Join our AI Experts community
                                </h4>
                                <p className="sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="300">
                                    Meet and learn from 80+ creators & companies who share how they use AI to create better content at lightning speed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-content">
                            <div className="call-to-btn text-start text-lg-end sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="400">
                                <div className="team-image">
                                    <img src="/images/cta-img/team-01.png" alt="Group Image" />
                                </div>
                                <a className="btn-default" href="#">Join Now Today Free</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-shape">
                        <img src="/images/cta-img/bg-shape-01.png" alt="BG Shape" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RainbowCTA;
