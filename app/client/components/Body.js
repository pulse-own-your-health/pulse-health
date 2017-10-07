import React from 'react';
import './Body.css';

import {CircleRight} from "./CircleRight";


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
                <div className="sections">
                    <div className="section">
                        <p>Fitness</p>
                        <ProgressBar fill={0.3} colorClass="Fitness"/>
                    </div>
                    <div className="section">
                        <p>Nutrition</p>
                        <ProgressBar fill={0.6} colorClass="Nutrition"/>
                    </div>
                    <div className="section">
                        <p>Lifestyle</p>
                        <ProgressBar fill={0.7} colorClass="Lifestyle"/>
                    </div>
                </div>
            </div>
        );
    }

}


export class ProgressBar extends React.Component {

    render() {
        let classes = "fill " + this.props.colorClass;
        let style = {width: (this.props.fill * 100) + "%"};
        return (
            <div className="impact-progress">
                <div className={classes} style={style}/>
            </div>
        );
    }

}
