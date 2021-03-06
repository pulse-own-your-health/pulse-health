import React from "react";

import smoking from "../assets/smoking.jpg";
import alcohol from "../assets/alcohol.jpg";
import meat from "../assets/meat.jpg";
import stress from "../assets/stress.jpg";
import activity from "../assets/activity.jpg";
import city from "../assets/city.jpg";
import error from "../assets/error.png";
import sugar from "../assets/sugar.jpg";

import "./Question.css";
import "react-bootstrap/dist/react-bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

export class Question extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state =
    {
      page : 1,
      amount : "0",
      reply : {}
    };
    this.maxPage = 7;

    this.handleChange = this.handleChange.bind(this);
    this.nextQuestionClick = this.nextQuestionClick.bind(this);
    this.finishQuestionsClick = this.finishQuestionsClick.bind(this);

    this.getButton = this.getButton.bind(this);
  }

  handleChange(event) {
    this.setState({amount: event.target.value});
  }

  getImage() { return this.getData().image; }
  getQuestion() { return this.getData().text; }
  getPeriod() { return this.getData().period; }

  getData() {
    var times = "times";
    var hours = "hours";
    var gram = "gram";

    var data = {};

    switch(this.state.page){
    case 1:
      data.image = smoking;
      data.text = "How often did you smoke?";
      data.period = times;
      break;
    case 2:
      data.image = alcohol;
      data.text = "How many drinks did you have?";
      data.period = times;
      break;
    case 3:
      data.image = meat;
      data.text = "How often did you eat red meat?";
      data.period = times;
      break;
    case 4:
      data.image = stress;
      data.text = "How often did you feel stressed?";
      data.period = times;
      break;
    case 5:
      data.image = activity;
      data.text = "How often did you do sports?";
      data.period = times;
      break;
    case 6:
      data.image = city;
      data.text = "Did you spend time in a city?";
      data.period = hours;
      break;
    case 7:
      data.image = sugar;
      data.text = "How much sugar did you eat?";
      data.period = gram;
      break;
    default:
      data.image = error;
    }

    return data;
  }

  nextQuestionClick() {
    this.state.reply[this.state.page] = this.state.amount;
    console.log(this.state);

    this.setState(
      {
        page: this.state.page + 1,
        amount: 0
      }
    );
  }

  finishQuestionsClick() {
    // Switch to home page
    window.location = "/";
  }

  render() {
    return (
      <div className="container pulse-gradient-background">
        <div className="col-xs-1"></div>
        <div className="col-xs-10">
          <div className="row row-q">
            <div className="questionImageContainer">
              <img src={this.getImage()} className="round" />
            </div>
          </div>
          <div className="row row-q">
            <h4 className="centerText questionText">
              {this.getQuestion()}
            </h4>
          </div>
          <div className="row row-q">
            <h4 className="centerText periodText">
              <span id="amount">{this.state.amount}</span> {this.getPeriod()}
            </h4>
          </div>
          <div className="row row-q">
            <input type="range" min="0" max="14" value={this.state.amount} step="1" onChange={this.handleChange} />
          </div>
          <div className="row row-q">
            <div className="centerBox" style={{ padding: "15px 0 0 0" }}>
              { this.getButton() }
            </div>
          </div>
        </div>
        <div className="col-xs-1"></div>
      </div>
    );
  }

  getButton() {
    if(this.state.page - 1 < this.maxPage - 1) {
      return (<button type="button" onClick={this.nextQuestionClick} className="btn pulse-btn pulse-btn-primary">Next question</button>);
    } else {
      return (<input type="submit" value="Finish" onClick={this.finishQuestionsClick} className="btn pulse-btn pulse-btn-primary" />);
    }
  }

}
