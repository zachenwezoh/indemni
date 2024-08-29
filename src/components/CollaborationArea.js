import React from 'react';
import '../App.css';

function CollaborationArea() {
    return (
        <div className="rainbow-collobration-area rainbow-section-gap-big">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                            <h4 className="subtitle">
                                <span className="theme-gradient">AI Collaboration</span>
                            </h4>
                            <h2 className="title mb--20">AI Chat app for seamless collaboration</h2>
                            <a className="btn-default btn-large color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                                Try It Now <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt--60">
                        <div className="collabration-image-section">
                            <img src="/images/split/split-2.png" alt="collaboration-image" />
                            <div className="logo-section">
                                <div className="center-logo">
                                    <img src="/images/split/split-2-logo.png" alt="Small Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollaborationArea;
