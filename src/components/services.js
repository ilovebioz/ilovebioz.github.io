import React, { Component } from 'react'

export default class Services extends Component{
    render() {
        return (
            <section className="colorlib-services" data-section="services">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What We do?</span>
                            <h2 className="colorlib-heading">Here are some of our expertise</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box fadeInUp animated">
                            <div className="services color-1">
                                <span className="icon">
                                  <i className="icon-bulb" />
                                </span>
                                <div className="desc">
                                    <h3>Innovative Ideas</h3>
                                    <p>Provide the most optimal and creative solutions at unbelievable prices</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box fadeInUp animated">
                            <div className="services color-2">
                                <span className="icon">
                                  <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Software</h3>
                                    <p>Build complete software or custom modules: web, mobile, desktop, ...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box fadeInUp animated">
                            <div className="services color-3">
                                <span className="icon">
                                  <i className="icon-phone3" />
                                </span>
                                <div className="desc">
                                    <h3>Maintenance</h3>
                                    <p>Upgrade, fix existing systems. We experience with unclear document projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box fadeInUp animated">
                            <div className="services color-4">
                                <span className="icon">
                                  <i className="icon-layers2" />
                                </span>
                                <div className="desc">
                                    <h3>System Management</h3>
                                    <p>Providing full infrastructure, management, maintenance with affordable annual fee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box fadeInUp animated">
                            <div className="services color-5">
                                <span className="icon">
                                  <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Software</h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box fadeInUp animated">
                            <div className="services color-6">
                                <span className="icon">
                                  <i className="icon-phone3" />
                                </span>
                                <div className="desc">
                                    <h3>Application</h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};