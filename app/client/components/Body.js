import React from 'react';
import './Body.css';

import {CircleRight} from "./CircleRight";
import {ChartWeight} from "./ChartWeight";
import {ChartSteps} from "./ChartSteps";


export class Body extends React.Component {

    render() {
        return (
            <div className="impact">
                <div className="header">
                    <h1 style={{textAlign: "center", marginBottom: "0.5em"}}>Your Balance!</h1>
                </div>
                <div className="balance">
                    <CircleRight/>
                    <p>Beans at macchiato saucer con panna percolator macchiato caramelization cappuccino wings sweet
                        cultivar. White dripper mug, wings, cup, et dark spoon cappuccino arabica.</p>
                </div>
                <ChartWeight />
              <hr/>
                <ChartSteps />
            </div>
        );
    }

}
