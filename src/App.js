import React, {Component} from 'react';

import './App.css';
import Converter from './components/Converter'

class App extends Component {
    render(){
        return (
            <div className="App">
                <h1>Conversor de moedas</h1>
                <div className="row">
                    <Converter currencyA="USD" currencyB="BRL"></Converter>
                    <Converter currencyA="BRL" currencyB="USD"></Converter>
                </div>
                <div className="row">
                    <Converter currencyA="CAD" currencyB="BRL"></Converter>
                    <Converter currencyA="BRL" currencyB="CAD"></Converter>
                </div>
                <div className="row">
                    <Converter currencyA="EUR" currencyB="BRL"></Converter>
                    <Converter currencyA="BRL" currencyB="EUR"></Converter>
                </div>
            </div>
        )
    }
}

export default App;