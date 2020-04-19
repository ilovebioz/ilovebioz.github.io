import React, { Component } from 'react'
import * as Configs from '../config'

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {submitted: false, submitResult: true, name: "", email:"", subject:"", message:""};
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.submit();
    };

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };

    submit(){
        fetch(Configs.API_ROOT + Configs.API_PATH_ENUM.POST_MESSAGE, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message,
            })
        }).then((response) => response.json())
            .then((json) => {
                console.log(json);
                //return json.movies;
                this.setState({submitted: true, submitResult: true});
            })
            .catch((error) => {
                console.error(error);
                this.setState({submitted: true, submitResult: false});
            });
    };
    render() {
        return (
            <section className="colorlib-contact js-fullheight" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className={ this.state.submitted && this.state.submitResult ? "alert alert-success alert-dismissible" : "alert alert-success hidden"}>
                            <strong>Success!</strong> Thank you for your message. We will call you soon.
                        </div>
                        <div className={this.state.submitted && !this.state.submitResult ? "alert alert-warning": "alert alert-warning hidden"} >
                            <strong>Fail!</strong> System got some problems. Please contact us directly by email.
                        </div>
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-globe-outline" />
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="#">info@sectic.com</a></p>
                                </div>
                            </div>
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-map" />
                                </div>
                                <div className="colorlib-text">
                                    <p>233 Nguyen Trai Street, Ward 2, Dist 5 Ho Chi Minh</p>
                                </div>
                            </div>
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-phone" />
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="tel://">+84 0868699084</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-md-push-1">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                    <form action = "" onSubmit={this.submitHandler} className="was-validated">
                                        <div className="form-group">
                                            <input name="name" type="text" className="form-control" placeholder="Name" onChange={this.changeHandler} required/>
                                        </div>
                                        <div className="form-group">
                                            <input name="email" type="text" className="form-control" placeholder="Email" onChange={this.changeHandler} required/>
                                        </div>
                                        <div className="form-group">
                                            <input name="subject" type="text" className="form-control" placeholder="Subject" onChange={this.changeHandler} required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" id="message" cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} onChange={this.changeHandler} required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};