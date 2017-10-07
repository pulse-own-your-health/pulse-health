import React from 'react';
import './Circle.css';
import {CircleLeft} from "./CircleLeft";
import {CircleRight} from "./CircleRight";


export class Circle extends React.Component {
  render() {
    return (
      <div className='grid-wrapper'>
        <CircleLeft/>
        <CircleRight/>
      </div>
    );
  }
}
