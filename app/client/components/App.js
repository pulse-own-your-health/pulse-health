/* React component entry-point. */

import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link, IndexLink} from 'react-router';
import {Helmet} from 'react-helmet';
import './App.css';
import './favicon.ico';
import logo from '../../../.assets/pulse-logo.png';


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
          <div className="content">
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
                <span>{this.props.title} </span>
                <img src={logo} height="26px"></img>
            </div>
        );
    }
}


export class ApplicationFooter extends React.Component {
    render() {
        return (
            <div className="footer">
                <FontAwesome name="dashcube"/>
                <FontAwesome name="bar-chart"/>
                <AddActionIcon width="20vw" height="20vw"/>
                <FontAwesome name="trophy"/>
                <FontAwesome name="user"/>
            </div>
        );
    }
}


export class AddActionIcon extends React.Component {
    render() {
        let style = {
            position: "relative",
            marginTop: "-10vw"
        };
        return (
            <div className="add" style={style}>
                <svg width={this.props.width} height={this.props.height}
                    viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#F2F2F2" stroke="#CECECE"/>
                    <text x="50" y="50" textAnchor="middle" alignmentBaseline="central"
                        fontSize="15vw" fill="#777">+</text>
                </svg>
            </div>
        );
    }
}
