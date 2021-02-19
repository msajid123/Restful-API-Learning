import React, { Component } from 'react'
import axios from "axios";
export default class APl extends Component {
    constructor(){
        super();
        this.state={
            api:"not yet gotten"
        };
    }
    handleButtonClick=()=>{
        axios.get("/about").then(response=>{
        this.setState({
        api: response.data.numFound
        });
});
};
    
    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get Data</button>
                <h1 >The Data is: <span style={{color:'red'}}>{this.state.api}</span></h1>
            </div>
        )
    }
}
