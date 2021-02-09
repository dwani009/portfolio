import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        if(this.props.data){
            var name = this.props.data.name;
            var city = this.props.data.city;
            var role = this.props.data.role;
            var shortInfo = this.props.data.shortInfo;
            var networks= this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <React.Fragment>
                <header id="home">
                    <div className="sidebar sbar">
                        <div id="pic">
                            <img className="profile-pic" alt="Dhiraj Wani Profile Pic" src="images/profilepic.jpg"></img>
                        </div>
                        <div className="row">
                            <div className="columns contact-details">
                                <p className="address">
                                    Dhiraj Wani
                                    <br></br>
                                    Montreal, Canada
                                    <br></br>
                                </p>
                            </div>
                        </div>
                        <nav id="side-wrap" >
                            <ul>
                                <li className="active"><a id="sidestyle" href="#home">Home</a></li>
                                <li><a id="sidestyle" href="#about">About</a></li>
                                <li><a id="sidestyle" href="#resume">Background</a></li>
                                <li><a id="sidestyle" href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                        <span>Made with <i className="fa fa-heart-o heart-icon"></i> during covid</span>
                    </div>

                    <nav id="nav-wrap" >
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Background</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I am {name}.</h1>
                            <h3>Based in <span>{city}</span>, I'm a {role}, {shortInfo}</h3>
                        </div>
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#contact"><i className="icon-down-circle"></i></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}