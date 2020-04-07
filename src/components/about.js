import React, { Component } from 'react'

export default class Home extends Component{
    render() {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Us</span>
                                        <h2 className="colorlib-heading">Who Are We?</h2>
                                        <p><strong>Hi We are Sectic</strong>. We are a group specializing in consulting, developing and transferring software as well as information technology solutions in Vietnam. SECTIC was founded in 2016, developing in four main directions: Software, Consulting, Smart Systems (Cloud, Iot, AI based) and System Integration. We always take customer trust as the goal to strive.</p>
                                        <p>SECTIC's operations are based on the technology created by the creativity and perseverance of R&D activities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                    <div className="services color-1">
                                        <span className="icon2"><i className="icon-bulb" /></span>
                                        <h3>Consulting</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-globe-outline" /></span>
                                        <h3>Smart Systems</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-data" /></span>
                                        <h3>Software</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                                    <div className="services color-4">
                                        <span className="icon2"><i className="icon-phone3" /></span>
                                        <h3>Integration</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="hire">
                                        <h2>We are happy to know you <br />that 300+ projects done successfully!</h2>
                                        <a href="#" className="btn-hire">Contact us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};