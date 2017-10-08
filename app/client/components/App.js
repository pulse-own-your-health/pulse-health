/* React component entry-point. */

import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link, IndexLink} from 'react-router';
import {Helmet} from 'react-helmet';
import './App.css';
import './favicon.ico';
import logo from '../assets/pulse-kreis-03.png';

export class App extends React.Component {
    render() {
      return (
        <div className="application">
          <Helmet>
            <meta name="viewport" content="width=device-width; initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet"/>
          </Helmet>
          <ApplicationHeader title="Pulse Health"/>
          <div className="content pulse-footer-body">
              {this.props.children}
          </div>
          <ApplicationFooter/>
        </div>
      );
    }
}


export class ApplicationHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <span></span>
                <BigBarIcon className="add" location="bottom">
                    <div style={{width: "20vw", height: "20vw"}}>
                        <img src={logo} width="90%" height="90%"
                             style={{marginTop: "7%"}}/>
                    </div>
                </BigBarIcon>
                <span></span>
            </div>
        );
    }
}


export class ApplicationFooter extends React.Component {
    render() {
      return (
        <div className="footer pulse-footer">
            <FontAwesome className="pulse-footer-icon" name="user"/>
            <FontAwesome className="pulse-footer-icon" name="bar-chart"/>
            <BigBarIcon>
                <Link to="/questions">
                    <AddActionIcon/>
                </Link>
            </BigBarIcon>
            <FontAwesome className="pulse-footer-icon" name="trophy"/>
            <FontAwesome className="pulse-footer-icon" name="cloud-upload" onClick={this.cloudClick}/>
        </div>
        );
    }

  userClick() {

  }

  statClick() {

  }

  trophyClick() {

  }

  cloudClick() {
    window.location = "/cloud";
  }
}


export class AddActionIcon extends React.Component {
    render() {
        return (
            <svg width="20vw" height="20vw" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#F2F2F2" stroke="#CECECE"/>
                <text x="50" y="42" textAnchor="middle" alignmentBaseline="central" fontSize="18vw" fill="#777">
                    +
                </text>
            </svg>
        );
    }
}


export class BigBarIcon extends React.Component {
    render() {
        let style = {
            position: "relative",
            marginTop: "-10vw"
        };
        if (this.props.location == 'bottom') {
            delete style.marginTop;
            style.marginBottom = "10vw";
        }
        return (
            <div className={this.props.className} style={style}>
                {this.props.children}
            </div>
        );
    }
}
