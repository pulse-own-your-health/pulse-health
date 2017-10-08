import React from 'react';
import './Circle.css';
import {CircleLeft} from "./CircleLeft";
import {CircleRight} from "./CircleRight";


export class Circle extends React.Component {
    render() {
        return (
            <div className='grid-wrapper' style={this.props.style}>
                <CircleLeft style={this.props.leftStyle}/>
                <CircleRight style={this.props.rightStyle}/>
            </div>
        );
    }
}
