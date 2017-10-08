import React from 'react';

var ReactHighcharts = require('react-highcharts');

var config = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Your Steps taken'
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
      text: 'Steps per day'
    }
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x:%e. %b}: {point.y:.2f} Steps'
  },

  plotOptions: {
    spline: {
      marker: {
        enabled: true
      }
    }
  },

  series: [{
    name: 'Steps',
    showInLegend: false,
    color: '#02BBD1',
    data: [
      [Date.UTC(2017, 9, 12), 8827],
      [Date.UTC(2017, 9, 15), 7732],
      [Date.UTC(2017, 9, 16), 11398],
      [Date.UTC(2017, 9, 18), 7340],
      [Date.UTC(2017, 9, 21), 14715],
      [Date.UTC(2017, 9, 23), 13468],
      [Date.UTC(2017, 9, 26), 8063],
      [Date.UTC(2017, 9, 28), 11505],
      [Date.UTC(2017, 9, 29), 6211],
      [Date.UTC(2017, 9, 30), 5736],
      [Date.UTC(2017, 10, 2), 7587],
      [Date.UTC(2017, 10, 4), 6211],
      [Date.UTC(2017, 10, 6), 7246],
      [Date.UTC(2017, 10, 7), 11716],
      [Date.UTC(2017, 10, 8), 6710],
    ]
  }]
};

export class ChartSteps extends React.Component {
  render() {
    return (
      <ReactHighcharts config={config} neverReflow={true}/>
    );
  }
}
