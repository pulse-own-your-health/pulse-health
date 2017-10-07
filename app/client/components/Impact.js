
import React from 'react';


export class Impact extends React.Component {

    render() {
        return (
            <div className="impact">
                <div className="section">
                    <p>Fitness</p>
                    <ProgressBar fill={0.3}/>
                </div>
                <div className="section">
                    <p>Lifestyle</p>
                    <ProgressBar fill={0.7}/>
                </div>
                <div className="section">
                    <p>Nutrition</p>
                    <ProgressBar fill={0.6}/>
                </div>
            </div>
        );
    }

}


export class ProgressBar extends React.Component {

    render() {
        let style = {width: this.props.fill};
        return (
            <div className="progress">
                <div className="fill" style={style}/>
            </div>
        );
    }

}
