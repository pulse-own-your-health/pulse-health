import React from 'react';

var ReactHighcharts = require('react-highcharts');

var config = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Your Body Weight'
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%b'
    },
    title: {
      text: 'Date'
    }
  },
  yAxis: {
    title: {
      text: 'Weight in kg'
    }
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x:%e. %b}: {point.y:.2f}kg'
  },

  plotOptions: {
    spline: {
      marker: {
        enabled: true
      }
    }
  },

  series: [{
    name: 'Body Weight',
    showInLegend: false,
    color: '#02BBD1',
    data: [
      [Date.UTC(2017, 8, 12), 92.3],
      [Date.UTC(2017, 8, 15), 91.1],
      [Date.UTC(2017, 8, 16), 89.7],
      [Date.UTC(2017, 8, 18), 90.0],
      [Date.UTC(2017, 8, 21), 90.2],
      [Date.UTC(2017, 8, 23), 89.7],
      [Date.UTC(2017, 8, 26), 89],
      [Date.UTC(2017, 8, 28), 88.2],
      [Date.UTC(2017, 8, 29), 87.5],
      [Date.UTC(2017, 8, 30), 88.7],
      [Date.UTC(2017, 9, 2), 87.6],
      [Date.UTC(2017, 9, 4), 86],
      [Date.UTC(2017, 9, 6), 85.4],
      [Date.UTC(2017, 9, 7), 86.5],
      [Date.UTC(2017, 9, 8), 88.6],
    ]
  }]
};

export class ChartWeight extends React.Component {
  render() {
    return (
      <ReactHighcharts config={config} neverReflow={true}/>
    );
  }
}
