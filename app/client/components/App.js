/* React component entry-point. */

import React from 'react';
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
                <span>footer here.</span>
            </div>
        );
    }

}
