import React, { Component } from 'react'

class Toggle extends Component{
    render() {
        return (
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <i />
            </a>
        );
    }
}

export default Toggle;