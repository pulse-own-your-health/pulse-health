
import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router';
import {Circle} from './Circle';
import './Main.css';


function animate(duration, steps, callback) {
    let msInterval = duration * 1000 / steps;
    let msBegin = new Date().getTime();
    let msEnd = msBegin + duration * 1000;
    let update = () => {
        let msNow = new Date().getTime();
        let x = (msNow - msBegin) / (msEnd - msBegin);
        if (x > 1.0) x = 1.0;
        callback(x);
        if (msNow < msEnd) {
            let d = msEnd - msNow;
            if (d > msInterval) d = msInterval;
            setTimeout(update, msInterval);
        }
    };
    update();
}

function smoothStep(x) {
    return -2 * Math.pow(x, 3) + 3 * Math.pow(x, 2);
}


export class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="header">
                    <span><Link to="/impact">Your Impact</Link></span>
                    <span><Link to="/body">Your Body</Link></span>
                </div>
                <div className="content">
                    <Circle style={{width: "100vw", height: "100vw", overflow: "hidden", marginTop: "1em"}}
                            leftStyle={{marginLeft: "-30px"}}/>
                    <ScoreDisplay score={60}/>
                    <ChallengeBanner>
                        <p>
                            <FontAwesome name="trophy"/>
                            You've completed your zero-sugar challenge!
                        </p>
                    </ChallengeBanner>
                </div>
            </div>
        );
    }

}

export class ScoreDisplay extends React.Component {

    style = {
        position: "absolute",
        top: "200px",
        left: "113px",
        width: "50vw",
        height: "50vw"
    };

    render() {
        return (
            <svg style={this.style} viewBox="0 0 100 100">
                <text x="50%" y="25%" fontSize="50%"
                textAnchor="middle" alignmentBaseline="central">score</text>
                <text x="50%" y="50%" fontSize="250%"
                      textAnchor="middle" alignmentBaseline="central">0</text>
            </svg>
        );
    }

    componentDidMount() {
        let node = ReactDOM.findDOMNode(this);
        let text = node.children[1];
        animate(1.0, 50, (x) => {
            x = smoothStep(x) * this.props.score;
            text.textContent = '' + Math.floor(x);

        });
    }

}


export class ChallengeBanner extends React.Component {

    render() {
        return (
            <div className="challenge-banner">
                {this.props.children}
            </div>
        );
    }

    componentDidMount() {
        let node = ReactDOM.findDOMNode(this);
        node.style.position = 'relative';
        animate(1.0, 100, (x) => {
            x = smoothStep(x);
            let off = (1-x)*-500;
            node.style.left = off + 'px';
        });
    }

}
