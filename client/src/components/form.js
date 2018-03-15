import React, { Component } from 'react';
import { callApi } from '../core/service-caller';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueEUR: this.getValueEUR(),
            valueUSD: 'USD'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setInterval(this.getValueEUR(), 600000);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <input type="number" value={this.state.valueUSD} onChange={this.handleChange} className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="USD"/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <input type="number" value={this.state.valueEUR} className="form-control" disabled placeholder="EU"/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-12 text-center">
                        <button {...this.getButtonProps()}>Calculate</button>
                    </div>
                </div>
            </div>
        );
    }

    getButtonProps() {
        return {
            className: 'btn btn-primary',
            onClick: this.handleClick.bind(this)
        };
    }

    getValueEUR() {
        callApi('http://api.fixer.io/latest?base=USD&symbols=EUR', 'get')
        .then((data) => {
            this.setState({
                valueEUR: data.rates['EUR']
            });
        }, this)
    }

    handleChange(event) {
        this.setState({
            valueUSD: event.target.value
        });
    }

    handleClick() {
        var data = {
            base: 'USD',
            valueUSD: this.state.valueUSD,
            valueEUR: this.state.valueEUR
        };

        callApi('/api/calculate', 'post', data)
        .then((response) => {
            this.setState({
                valueEUR: response.value
            });
        }, this)
        .catch(
            console.log("error in service")
        );
    }
}

export default Form;