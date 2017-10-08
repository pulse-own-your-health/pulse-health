import React from 'react';
import './Body.css';

import {CircleRight} from "./CircleRight";
import {ChartWeight} from "./ChartWeight";
import {ChartSteps} from "./ChartSteps";
import {ChartCalories} from "./ChartCalories";


export class Body extends React.Component {

    render() {
        return (
            <div className="impact">
                <div className="header">
                    <h1 style={{textAlign: "center", marginBottom: "0.5em"}}>Your Balance!</h1>
                </div>
                <div className="balance">
                    <CircleRight/>
                    <p style={{marginTop: "5em"}}>
                        You are doing a good job with reducing your body weight.
                        In the recent days you have burned fewer calories than
                        usually, however. You should start workout again!
                    </p>
                </div>
                <ChartWeight />
                <hr/>
                <ChartCalories />
                <div className="last2">
                  <ChartSteps />
                </div>
            </div>
        );
    }

}
