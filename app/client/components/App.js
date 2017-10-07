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
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}


export class ApplicationBar extends React.Component {

    render() {
        return <div className="bar">{this.props.title}</div>;
    }

}
