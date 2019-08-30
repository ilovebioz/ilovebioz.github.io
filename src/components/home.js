import React, { Component } from 'react'

export default class Home extends Component{
    render() {
        return (
            <section id="colorlib-hero" className="js-fullheight" data-section="home" style={{height: '888px'}}>
                <div className="flexslider js-fullheight" style={{height: '888px'}}>
                    <ul className="slides">
                        <li style={{backgroundImage: 'url("images/img_bg_1.jpg")', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 0, display: 'block', zIndex: 1}} className data-thumb-alt>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{height: '888px'}}>
                                        <div className="slider-text-inner js-fullheight" style={{height: '888px'}}>
                                            <div className="desc">
                                                <h1>Hi! <br />I'm Jackson</h1>
                                                <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                                <p><a className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: 'url("images/img_bg_2.jpg")', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 1, display: 'block', zIndex: 2}} data-thumb-alt className="flex-active-slide">
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp" style={{height: '888px'}}>
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>I am <br />a Designer</h1>
                                                <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                                <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ol className="flex-control-nav flex-control-paging"><li><a href="#" className>1</a></li><li><a href="#" className="flex-active">2</a></li></ol><ul className="flex-direction-nav"><li className="flex-nav-prev"><a className="flex-prev" href="#">Previous</a></li><li className="flex-nav-next"><a className="flex-next" href="#">Next</a></li></ul></div>
            </section>
        );
    }
};