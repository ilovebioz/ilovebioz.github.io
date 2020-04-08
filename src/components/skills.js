import React, { Component } from 'react'

export default class Skills extends Component{
    render() {
        return (
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Our Specialty</span>
                            <h2 className="colorlib-heading animate-box fadeInUp animated">Our Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <p>We have many years of experience with various programming languages, platforms and frameworks from embedded devices, IoT to web systems and PC-based applications. Through constant learning, we adapt to the changing technology, the variety of projects from R&D, to design analysis and implementation.</p>
                        </div>
                        <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>R&D</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Analysis and Design</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Embedded Programming</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Web Programming</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Mobile Programming</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Database</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                                        <span>80%</span>
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