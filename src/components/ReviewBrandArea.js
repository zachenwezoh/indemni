import React from 'react';
import '../App.css';

function ReviewBrandArea() {
    return (
        <div className="rainbow-brand-area rainbow-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title rating-title text-center sal-animate" data-sal="slide-up"
                            data-sal-duration="700" data-sal-delay="100">
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
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt--10">
                        <ul className="brand-list brand-style-2">
                            <li><a href="#"><img src="" alt="Brand Image"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-shape-left">
                <img src="/images/bg/bg-shape-two.png" alt="Bg shape"/>
            </div>
        </div>
    );
}

export default ReviewBrandArea;
