import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        if(this.props.data) {
            var about = this.props.data;
        }

        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">

                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>
                                {about}
                            </p>

                            <p>
                                <a className="button" href="https://drive.google.com/file/d/1mrq-1S5kP9Z3BWdYi6SN00gTMxsQmvlL/view?usp=sharing">
                                    <i className="fa fa-download"></i>
                                    &nbsp;&nbsp;Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}