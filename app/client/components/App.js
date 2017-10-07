/* React component entry-point. */

import React from 'react';
import {Link, IndexLink} from 'react-router';
import {Helmet} from 'react-helmet';
import './App.css';
import './favicon.ico';
import questions from './Question.js';


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

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    return (
      <div className={cx('App')}>
        <nav className={cx('nav')}>
          <IndexLink to='/' activeClassName={cx('active')}>Home</IndexLink>
          <Link to='/about' activeClassName={cx('active')}>About</Link>
          <Link to='/questions' activeClassName={cx('active')}>Questions </Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
