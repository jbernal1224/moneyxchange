import React, { Component } from 'react';
import { callApi } from '../core/service-caller';
import Input from './input';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            floatValueUSD: 0.0,
            valueEUR: this.getValueEUR(),
            valueUSD: '0.0'
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
                        <Input {...this.getInputUSDProps()}/>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <Input {...this.getInputEUProps()}/>
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

    getInputUSDProps() {
        return {
            'aria-label': 'Amount (to the nearest dollar)',
            className: 'form-control',
            onChange: this.handleChange,
            precision: '4',
            prefix: '$',
            value: this.state.valueUSD
        };
    }

    getInputEUProps() {
        return {
            'aria-label': 'Amount (to the nearest euro)',
            className: 'form-control',
            disabled: true,
            precision: '4',
            prefix: '€',
            value: this.state.valueEUR
        };
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

    handleChange(maskedvalue, floatvalue) {
        this.setState({
            floatValueUSD: floatvalue,
            valueUSD: maskedvalue
        });
    }

    handleClick() {
        var data = {
            base: 'USD',
            valueUSD: this.state.floatValueUSD,
            valueEUR: this.state.valueEUR
        };

        callApi('/api/calculate', 'post', data)
        .then((response) => {
            this.setState({
                valueEUR: response.value
            });
        }, this)
        .catch((error) => {
            console.log("error in service", error);
        });
    }
}

export default Form;