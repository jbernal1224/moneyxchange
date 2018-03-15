import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

class Input extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group">
                <CurrencyInput {...this.props} />
            </div>
        );
    }

    handleChange(event, maskedvalue, floatvalue) {
        var handleChange = this.props.handleChange;

        if (handleChange) {
            handleChange(maskedvalue, floatvalue);
        }
    }
}

export default Input;