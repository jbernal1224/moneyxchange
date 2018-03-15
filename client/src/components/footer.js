import React, { Component } from 'react';
import logo from '../logo.svg';

class Footer extends Component {

    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis tortor fringilla volutpat faucibus.</p>
                    </div>
                    <div className="col">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis tortor fringilla volutpat faucibus.</p>
                    </div>
                    <div className="col">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis tortor fringilla volutpat faucibus.</p>
                    </div>
                    <div className="col">
                        <h2>Heading</h2>
                        <div className="media">
                            <img className="img-responsive" src={logo} width="50px;" alt=""/>
                            <img className="img-responsive" src={logo} width="50px;" alt=""/>
                            <img className="img-responsive" src={logo} width="50px;" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;