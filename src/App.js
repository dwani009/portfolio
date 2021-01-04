import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

let data = require('./resumeData.json');

class App extends Component {
    constructor(props){
        super(props);
        this.state = {data};
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.data.personalInfo}/>
                <About data={this.state.data.personalInfo.about}/>
                <Resume data={this.state.data.backgroundInfo}/>
                <Contact data={this.state.data.personalInfo}/>
                <Footer />
            </div>
        );
    }
}

export default App;