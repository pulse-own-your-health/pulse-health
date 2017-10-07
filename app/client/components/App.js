/* React component entry-point. */

import React from 'react';
import {Link, IndexLink} from 'react-router';
import {Helmet} from 'react-helmet';
import './App.css';
import './favicon.ico';


export class App extends React.Component {

    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta name="viewport" content="width=device-width; initial-scale=1"/>
                </Helmet>
                <ApplicationBar title="Pulse Health"/>
                <div id="app_content">{this.props.children}</div>
            </div>
        );
    }

}


export class MainScreen extends React.Component {

    render() {
        return <div>Circle here</div>;
    }

}


export class ApplicationBar extends React.Component {

    render() {
        return <div classname="appbar">{this.props.title}</div>;
    }

}
