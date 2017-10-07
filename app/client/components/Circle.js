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
    name: 'Browser share1',
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

var config_right = {
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
    name: 'Browser share',
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


export class Circle extends React.Component {
  render() {
    return (
      <div className='grid-wrapper'>
        <div className='outer'>
          <div className='inner'>
            <ReactHighcharts config={config_left} neverReflow={true}></ReactHighcharts>
          </div>
        </div>
        <div className='outer'>
          <div className='inner flip right'>
            <ReactHighcharts config={config_right} neverReflow={true}></ReactHighcharts>
          </div>
        </div>
      </div>
    );
  }
}
