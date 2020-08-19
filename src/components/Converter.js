import React, { Component } from 'react';
import './Converter.css'


export default class Converter extends Component {
    constructor(props){
        super(props);

        this.state = {
            currencyA_value: "",
            currencyB_value: 0
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let fromTo = `${this.props.currencyA}_${this.props.currencyB}`;
        let url = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${fromTo}&compact=y`;

        fetch(url)
        .then(res=>{

            return res.json()

        })
        .then(json=>{
            let cotation = json[fromTo].val;
            let currencyB_value = (parseFloat(this.state.currencyA_value) * cotation).toFixed(2);
            this.setState({currencyB_value});
        })
    }

    render(){
        return (
            <div className="converter">
                <h2>{this.props.currencyA} para {this.props.currencyB}</h2>
                <input type="text" onChange={(event) => {this.setState({currencyA_value:event.target.value})}}></input>
                <input type="button" value="Converter" onClick= {this.converter}></input>
                <h2>{this.state.currencyB_value}</h2>
            </div>
        )
    }
}