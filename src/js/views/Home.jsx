
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
//include images into your bundle


export default class Home extends Flux.View {
    
    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }
    
    render() {
        let redExtraClass = '';
        if(this.state.clickedLight === 'red') redExtraClass = 'selected';
        let yellowExtraClass = '';
        if(this.state.clickedLight === 'yellow') yellowExtraClass = 'selected';
        let greenExtraClass = '';
        if(this.state.clickedLight === 'green') greenExtraClass = 'selected';
        
        
        return (
            <div>
                <div id="trafficTop"></div>
                <div id="container">
                    <div className={'red light '+ redExtraClass} onClick={() => this.setState({ clickedLight: 'red'})}></div>
                    <div className={'yellow light '+ yellowExtraClass} onClick={() => this.setState({ clickedLight: 'yellow'})}></div>
                    <div className={'green light '+ greenExtraClass} onClick={() => this.setState({ clickedLight: 'green'})}></div>
                </div>
            </div>
        );
    }
}


      
//     return (
//         <div className="container">
//             <div className="d-flex align-items-center flex-column">
//                 <button className={'topLight '+'extraCssForRed'} onClick={() => this.setState({ selectedLight: 'extraCssForRed'})}> </button>
//                 <button className={'middleLight '+'extraCssForYellow'} onClick={() => this.setState({ selectedLight: 'extraCssForYellow'})}></button>
//                 <button className={'bottomLight '+'extraCssForGreen'} onClick={() => this.setState({ selectedLight: 'extraCssForGreen'})}></button>
//             </div>
//         </div>