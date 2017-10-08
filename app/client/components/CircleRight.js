import React from 'react';
import './Circle.css';

var ReactHighcharts = require('react-highcharts');

var config = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: 180,
            endAngle: 250,
            center: ['50%', '50%']
        }
    },
    series: [{
        type: 'pie',
        innerSize: '62.5%',
        data: [
            {
                name: '',
                y: 100,
                color: '#02BBD1',
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
};

export class CircleRight extends React.Component {
    render() {
        return (
            <div className='outer' style={this.props.style}>
                <div className='inner flip right'>
                    <ReactHighcharts config={config} neverReflow={true}/>
                </div>
            </div>
        );
    }
}
