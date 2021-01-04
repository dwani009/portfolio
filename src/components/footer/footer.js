import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer-style">
                <div className="row">
                    <div className="twelve columns">

                        <ul className="copyright">
                            <li>&copy; Copyright 2020 Dhiraj Wani</li>
                            <li>Thanks <b><a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></b> for inspiring</li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;