import React, { Component } from 'react'

export default class Home extends Component{
    render() {
        return (
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li style={{backgroundImage: 'url("images/img_bg_1.jpg")'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1>Hi! <br />Sectic</h1>
                                                <h2>Go up with your <a href="https://sectic.com/" target="_blank">belief</a></h2>
                                                <p><a className="btn btn-primary btn-learn">Our Works<i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: 'url("images/img_bg_2.jpg")'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>We are <br /> Experts</h1>
                                                <h2>Most improved things can be improved by <a href="https://sectic.com/" target="_blank">sectic</a></h2>
                                                <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
};