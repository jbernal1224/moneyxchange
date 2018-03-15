import React, { Component } from 'react';
import 'whatwg-fetch';
import { callApi } from './core/service-caller';
import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';

/*
añadir mas currencies
un unico test al menos probando cotizacion
implementar loggin
*/

class App extends Component {

    componentDidMount() {
        callApi('/api/currencies', 'get')
        .then(this.handleServiceDone.bind(this))
        .catch(this.handleServiceFail);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Form/>
                <Footer/>
            </div>
        );
    }

    handleServiceDone(data) {
        console.log("Currencies", data);
    }

    handleServiceFail() {
        console.log("Error");
    }
}

export default App;