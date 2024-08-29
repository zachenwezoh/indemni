import React, { useState } from "react";
import "../App.css";

function AdvanceTabArea() {
  // State to manage active tab content
  const [activeTab, setActiveTab] = useState("home-3");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
      <div className="container">
        <div className="html-tabs" data-tabs="true">
          <div className="row row--30">
            <div className="col-lg-12">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "home-3" ? "show active" : ""
                  } advance-tab-content-1 right-top`}
                  id="home-3"
                  role="tabpanel"
                  aria-labelledby="home-tab-3"
                >
                  <div className="rainbow-splite-style">
                    <div className="split-wrapper">
                      <div className="row g-0 radius-10 align-items-center">
                        <div className="col-lg-12 col-xl-5 col-12">
                          <div className="thumbnail">
                            <img
                              className="radius"
                              src="/images/split/consultation.png"
                              alt="split Images"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-7 col-12">
                          <div className="split-inner">
                            <div className="subtitle">
                              <span className="theme-gradient">
                                Consultation
                              </span>
                            </div>
                            <h2
                              className="title sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="200"
                            >
                              360 Degree Consultation
                            </h2>
                            <p
                              className="description sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="300"
                            >
                              We work with you to ensure that we configure our
                              product to your business needs and challenges
                            </p>
                            <div
                              className="view-more-button mt--35 sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="400"
                            >
                              <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                                Try It Now{" "}
                                <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "profile-3" ? "show active" : ""
                  } advance-tab-content-1`}
                  id="profile-3"
                  role="tabpanel"
                  aria-labelledby="profile-tab-3"
                >
                  <div className="rainbow-splite-style">
                    <div className="split-wrapper">
                      <div className="row g-0 radius-10 align-items-center">
                        <div className="col-lg-12 col-xl-5 col-12">
                          <div className="thumbnail">
                            <img
                              className="radius"
                              src="/images/split/onboarding.png"
                              alt="split Images"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-7 col-12">
                          <div className="split-inner">
                            <div className="subtitle">
                              <span className="theme-gradient">
                                Maximize Your ROI
                              </span>
                            </div>
                            <h2
                              className="title sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="200"
                            >
                              Streamline Your Efficiency
                            </h2>
                            <p
                              className="description sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="300"
                            >
                              During onboarding, we work with you to ensure that
                              the products are working as expected.
                            </p>
                            <div
                              className="view-more-button mt--35 sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="400"
                            >
                              <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                                Try It Now{" "}
                                <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "contact-3" ? "show active" : ""
                  } advance-tab-content-1`}
                  id="contact-3"
                  role="tabpanel"
                  aria-labelledby="contact-tab-3"
                >
                  <div className="rainbow-splite-style">
                    <div className="split-wrapper">
                      <div className="row g-0 radius-10 align-items-center">
                        <div className="col-lg-12 col-xl-5 col-12">
                          <div className="thumbnail">
                            <img
                              className="radius"
                              src="/images/split/scaling-product.png"
                              alt="split Images"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-7 col-12">
                          <div className="split-inner">
                            <div className="subtitle">
                              <span className="theme-gradient">Scaling</span>
                            </div>
                            <h2
                              className="title sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="200"
                            >
                              Maximizing Impact
                            </h2>
                            <p
                              className="description sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="300"
                            >
                              Every business is unique. We work with you to
                              ensure that our product is evolving to meet your
                              needs.
                            </p>
                            <div
                              className="view-more-button mt--35 sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="400"
                            >
                              <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                                Try It Now{" "}
                                <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "explore-3" ? "show active" : ""
                  } advance-tab-content-1`}
                  id="explore-3"
                  role="tabpanel"
                  aria-labelledby="explore-tab-3"
                >
                  <div className="rainbow-splite-style">
                    <div className="split-wrapper">
                      <div className="row g-0 radius-10 align-items-center">
                        <div className="col-lg-12 col-xl-5 col-12">
                          <div className="thumbnail">
                            <img
                              className="radius"
                              src="/images/split/customer-support.png"
                              alt="split Images"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-7 col-12">
                          <div className="split-inner">
                            <div className="subtitle">
                              <span className="theme-gradient">
                                Customer Support
                              </span>
                            </div>
                            <h2
                              className="title sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="200"
                            >
                              We are always available to help you
                            </h2>
                            <p
                              className="description sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="300"
                            >
                              Logistics never sleeps, and so we have built our
                              support team to be always available for you 24/7
                            </p>
                            <div
                              className="view-more-button mt--35 sal-animate"
                              data-sal="slide-up"
                              data-sal-duration="400"
                              data-sal-delay="400"
                            >
                              <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                                Try It Now{" "}
                                <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt--60">
              <div className="advance-tab-button advance-tab-button-1 right-top">
                <ul
                  className="nav nav-tabs tab-button-list"
                  id="myTab-3"
                  role="tablist"
                >
                  <li className="col-lg-3 nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="home-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#home-3"
                      role="tab"
                      aria-controls="home-3"
                      aria-selected="true"
                      onClick={() => handleTabClick("home-3")}
                    >
                      <div className="tab">
                        <div className="count-text">
                          <span className="theme-gradient">01</span>
                        </div>
                        <h4 className="title">Risk Consultation </h4>
                      </div>
                    </a>
                  </li>
                  <li className="col-lg-3 nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="profile-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-3"
                      role="tab"
                      aria-controls="profile-3"
                      aria-selected="false"
                      onClick={() => handleTabClick("profile-3")}
                    >
                      <div className="tab">
                        <div className="count-text">
                          <span className="theme-gradient">02</span>
                        </div>
                        <h4 className="title">Trial Period</h4>
                      </div>
                    </a>
                  </li>
                  <li className="col-lg-3 nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="contact-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-3"
                      role="tab"
                      aria-controls="contact-3"
                      aria-selected="false"
                      onClick={() => handleTabClick("contact-3")}
                    >
                      <div className="tab">
                        <div className="count-text">
                          <span className="theme-gradient">03</span>
                        </div>
                        <h4 className="title">Scaling</h4>
                      </div>
                    </a>
                  </li>
                  <li className="col-lg-3 nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="explore-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#explore-3"
                      role="tab"
                      aria-controls="explore-3"
                      aria-selected="false"
                      onClick={() => handleTabClick("explore-3")}
                    >
                      <div className="tab">
                        <div className="count-text">
                          <span className="theme-gradient">04</span>
                        </div>
                        <h4 className="title">Ongoing Support</h4>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape">
        <img src="/images/bg/split-bg-shape.png" alt="Bg Shape" />
      </div>
    </div>
  );
}

export default AdvanceTabArea;
