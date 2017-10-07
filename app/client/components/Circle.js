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
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Firefox', 10.38],
      ['IE', 56.33],
      ['Chrome', 24.03],
      ['Safari', 4.77],
      ['Opera', 0.91],
      {
        name: 'Proprietary or Undetectable',
        y: 0.2,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
};

var config2 = {
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
    innerSize: '50%',
    data: [
      ['Firefox', 10.38],
      ['IE', 56.33],
      ['Chrome', 24.03],
      ['Safari', 4.77],
      ['Opera', 0.91],
      {
        name: 'Proprietary or Undetectable',
        y: 0.2,
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
            <ReactHighcharts config={config2} neverReflow={true}></ReactHighcharts>
          </div>
        </div>
        <div className='outer'>
          <div className='inner flip right'>
            <ReactHighcharts config={config} neverReflow={true}></ReactHighcharts>
          </div>
        </div>
      </div>
    );
  }
}
