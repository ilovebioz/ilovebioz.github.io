import React, {Component} from 'react';
import './App.css';
import Toggle from './components/toggle'
import Menu from './components/menu'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Counter from './components/counter'
import Skills from './components/skills'
import Education from './components/education'
import Experience from './components/experience'
import Work from './components/work'
import Blog from './components/blog'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
        <div className="container-wrap">
          <Toggle/>
          <Menu/>
          <div id="colorlib-main">
            <Home/>
            <About/>
            <Services/>
            <Counter/>
            <Skills/>
            <Education/>
            <Experience/>
            <Work/>
            <Blog/>
            <Contact/>
          </div>
        </div>
    );
  }
}

export default App;
