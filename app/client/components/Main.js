
import React from 'react';
import './Main.css';


export class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="header">
                    <span>Your Impact</span>
                    <span>Body Facts</span>
                </div>
                <div className="content">
                    <Circle score={60}/>
                </div>
            </div>
        );
    }

}


export class Circle extends React.Component {

    render() {
        let {width, height} = this.props;
        if (width === undefined) width = "100%";
        if (height === undefined) height = "100vw";
        return (
            <svg className="circle" width={width} height={height}>
                <text x="50%" y="30%" textAnchor="middle"
                        alignmentBaseline="central" fontSize="4vw">
                    your score
                </text>
                <text x="50%" y="60%" textAnchor="middle"
                        alignmentBaseline="central" fontSize="25vw">
                    {this.props.score}
                </text>
                <circle cx="50%" cy="50%" r="40%" fill="transparent"
                        stroke="black" strokeWidth="3"/>
            </svg>
        );
    }

}
