import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {

    render() {
        return (
            <div className="container-fluid bg-3 text-center mb-5">
                <div className="container text-center">
                    <div>
                        <img className="img-responsive" src={logo} width="150px;" alt=""/>
                    </div>
                    <div className="mt-5" role="group" aria-label="...">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default ml-4">Menu 1</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default ml-4">Menu 2</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default ml-4">Menu 3</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default ml-4">Menu 4</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;