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
    name: 'Skin Temperature35',
    showInLegend: false,
    color: '#02BBD1',
    data: [
      [Date.UTC(2017, 8, 12), 35],
      [Date.UTC(2017, 8, 15), 32],
      [Date.UTC(2017, 8, 16), 30],
      [Date.UTC(2017, 8, 18), 23.5],
      [Date.UTC(2017, 8, 21), 12],
      [Date.UTC(2017, 8, 23), 25],
      [Date.UTC(2017, 8, 26), 31],
      [Date.UTC(2017, 8, 28), 32],
      [Date.UTC(2017, 8, 29), 37],
      [Date.UTC(2017, 8, 30), 37.5],
      [Date.UTC(2017, 9, 2), 37],
      [Date.UTC(2017, 9, 4), 38],
      [Date.UTC(2017, 9, 6), 37],
      [Date.UTC(2017, 9, 7), 38],
      [Date.UTC(2017, 9, 8), 39]
    ]
  }]
};

export class ChartTemperature extends React.Component {
  render() {
    return (
      <ReactHighcharts config={config} neverReflow={true}/>
    );
  }
}
