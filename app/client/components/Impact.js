import React from 'react';
import './Impact.css';

import {CircleLeft} from "./CircleLeft";


export class Impact extends React.Component {

    render() {
        return (
            <div className="impact">
                <div className="header">
                    <h1 style={{textAlign: "center", marginBottom: "0.5em"}}>Your Balance!</h1>
                </div>
                <div className="balance">
                    <p style={{marginTop: "5em"}}>
                        You are living a balanced lifestyle and and eat healthy
                        food for the most part. You still need to improve on
                        the frequency of your workout, though. Keep it up!</p>
                    <CircleLeft/>
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
                    <div className="section last">
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
