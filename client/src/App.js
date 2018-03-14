import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';
import { callApi } from './core/service-caller';

class App extends Component {
    state = {
        valueEUR: this.getValueEUR()
    };

    componentDidMount() {
        callApi('/api/currencies', 'get')
        .then(this.handleServiceDone.bind(this))
        .catch(this.handleServiceFail);
    };

    render() {
        return (
            <div class="container">
                {this.renderHeader()}
                {this.renderForm()}
                {this.renderFooter()}
            </div>
        );
    };

    renderHeader() {
        return (
            <div class="container-fluid bg-3 text-center mb-5">
                <div class="container text-center">
                    <div>
                        <img class="img-responsive" src={logo} width="150px;" />
                    </div>
                    <div class="mt-5" role="group" aria-label="...">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default ml-4">Menu 1</button>
                        </div>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default ml-4">Menu 2</button>
                        </div>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default ml-4">Menu 3</button>
                        </div>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default ml-4">Menu 4</button>
                        </div>
                    </div>
                </div>
          </div>
        );
    };

    renderForm() {
        return (
            <div class="jumbotron">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="input-group">
                            <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="USD"/>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <div class="input-group">
                            <input type="number" value={this.state.valueEUR} class="form-control" disabled placeholder="EU"/>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12 text-center">
                        <button {...this.getButtonProps()}>Calculate</button>
                    </div>
                </div>
            </div>
        );
    };

    renderFooter() {
        return (
            <div class="jumbotron">
                <div class="row">
                    <div class="col">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis tortor fringilla volutpat faucibus.</p>
                    </div>
                    <div class="col">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis tortor fringilla volutpat faucibus.</p>
                    </div>
                    <div class="col">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis tortor fringilla volutpat faucibus.</p>
                    </div>
                    <div class="col">
                        <h2>Heading</h2>
                        <div class="media">
                            <img class="img-responsive" src={logo} width="50px;" />
                            <img class="img-responsive" src={logo} width="50px;" />
                            <img class="img-responsive" src={logo} width="50px;" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    getValueEUR() {
        callApi('http://api.fixer.io/latest?base=USD&symbols=EUR', 'get')
        .then((data) => {
            this.setState({
                valueEUR: data.rates['EUR']
            });
        }, this)
    };

    getButtonProps() {
        return {
            class: 'btn btn-primary',
            onClick: this.handleClick.bind(this)
        };
    };

    handleServiceDone(data) {
        console.log("Error", data);
    };

    handleServiceFail() {
        console.log("Error");
    };

    handleClick() {
        var data = {
            base: 'USD',
            value: 152,
            valueEUR: this.state.valueEUR
        };

        callApi('/api/calculate', 'post', data)
        .then((response) => {
            console.log("calculate", response);
            this.setState({
                valueEUR: response.value
            });
        }, this)
        //.catch(this.handleServiceFail);
    };
}

export default App;