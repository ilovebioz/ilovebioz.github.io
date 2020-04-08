import React, { Component } from 'react'

export default class Counter extends Component{
    render() {
        return (
            <div id="colorlib-counter" className="colorlib-counters animated" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
                <div className="overlay" />
                <div className="colorlib-narrow-content">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center animate-box fadeInUp animated">
                            <span className="colorlib-counter js-counter" data-from={0} data-to={107} data-speed={5000} data-refresh-interval={50}></span>
                            <span className="colorlib-counter-label">Cups of coffee</span>
                        </div>
                        <div className="col-md-3 text-center animate-box fadeInUp animated">
                            <span className="colorlib-counter js-counter" data-from={0} data-to={34} data-speed={5000} data-refresh-interval={50}></span>
                            <span className="colorlib-counter-label">Projects</span>
                        </div>
                        <div className="col-md-3 text-center animate-box fadeInUp animated">
                            <span className="colorlib-counter js-counter" data-from={0} data-to={21} data-speed={5000} data-refresh-interval={50}></span>
                            <span className="colorlib-counter-label">Clients</span>
                        </div>
                        <div className="col-md-3 text-center animate-box fadeInUp animated">
                            <span className="colorlib-counter js-counter" data-from={0} data-to={6} data-speed={5000} data-refresh-interval={50}></span>
                            <span className="colorlib-counter-label">Partners</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};