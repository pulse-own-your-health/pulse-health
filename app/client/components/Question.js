import React from 'react';

import smoking from '../assets/smoking.png';
import alcohol from '../assets/alcohol.png';
import meat from '../assets/meat.png';
import stress from '../assets/stress.png';
import activity from '../assets/activity.png';
import city from '../assets/city.png';
import error from '../assets/error.png';

import './App.css';
import 'react-bootstrap/dist/react-bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export class Question extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.page = 1;
  }

  getPeriod() {
    return this.getData().period;
  }

  getNumber() {
    return 0;
  }

  getImage() {
    return this.getData().image;
  }

  getQuestion() {
    return this.getData().text;
  }

  getData() {
    var timesADay = 'times a day';
    var timesAWeek = 'times a week';
    var fileName = '../assets/';
    var data = {};
    switch(this.page){
    case 1:
      data.image = smoking;
      data.text = 'Do you smoke?';
      data.period = timesADay;
      break;
    case 2:
      data.image = alcohol;
      data.text = 'Do you drink?';
      data.period = timesAWeek;
      break;
    case 3:
      data.image = meat;
      data.text = 'Do you eat red meat?';
      data.period = timesAWeek;
      break;
    case 4:
      data.image = stress;
      data.text = 'How often do you feel stressed??';
      data.period = timesADay;
      break;
    case 5:
      data.image = activity;
      data.text = 'How often do you do sports?';
      data.period = timesAWeek;
      break;
    case 6:
      data.image = city;
      data.text = 'How much time do you spend in the city?';
      data.period = timesAWeek;
      break;
    default:
      data.image = error;
    }
    
    return data;
  }

  render() {
    return (
      <div>
        <div className="col-xs-1"></div>
        <div className="col-xs-10">
          <img src={this.getImage()} />
          <h4 className='centerText'> {this.getQuestion()}</h4>
        </div>
        <div className="col-xs-1"></div>
      </div>
    );
  }

}