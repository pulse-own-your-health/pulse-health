import React from 'react';
import './Circle.css';

var ReactHighcharts = require('react-highcharts');

var config_left = {
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
      endAngle: 300,
      center: ['50%', '50%']
    }
  },
  series: [{
    type: 'pie',
    innerSize: '62.5%',
    data: [
      {
        name: 'Fitness',
        y: 25,
        color: '#69F0AE',
        dataLabels: {
          enabled: false
        }
      },
      {
        name: 'Nutrition',
        y: 30,
        color: '#00E676',
        dataLabels: {
          enabled: false
        }
      },
      {
        name: 'Lifestyle',
        y: 10,
        color: '#00C853',
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
};

export class CircleLeft extends React.Component {
  render() {
    return (
      <div className='outer'>
        <div className='inner'>
          <ReactHighcharts config={config_left} neverReflow={true}></ReactHighcharts>
        </div>
      </div>
    );
  }
}
