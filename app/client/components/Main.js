
import React from 'react';
import {Link} from 'react-router';
import {Circle} from './Circle';
import './Main.css';


export class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="header">
                    <span><Link to="/impact">Your Impact</Link></span>
                    <span><Link to="/body">Body Facts</Link></span>
                </div>
                <div className="content">
                    <Circle style={{width: "100vw", height: "100vw", overflow: "hidden", marginTop: "1em"}}
                            leftStyle={{marginLeft: "-30px"}}/>
                </div>
            </div>
        );
    }

}
