import React from 'react';
import '../App.css';

function BrandSlider() {
    return (
        <div className="rainbow-brand-area rainbow-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title rating-title text-center sal-animate" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                            <p className="b1 mb--0 small-title">trusted by </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt--10">
                        <ul className="brand-list brand-style-2 slider-brand slider-brand-activation">
                            <li className="slide-single-layout">
                                <a href="https://www.ycombinator.com/">
                                    <img src="/images/brand/yc.png" alt="Brand Image" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandSlider;
