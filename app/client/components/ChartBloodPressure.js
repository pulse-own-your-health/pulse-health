import React from 'react';

var ReactHighcharts = require('react-highcharts');

var config = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Blood Pressure'
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
      text: 'Pressure'
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
    name: 'Body Pressure Low',
    showInLegend: true,
    color: '#02BBD1',
    data: [
      [Date.UTC(2017, 8, 12), 81],
      [Date.UTC(2017, 8, 15), 70],
      [Date.UTC(2017, 8, 16), 80],
      [Date.UTC(2017, 8, 18), 82],
      [Date.UTC(2017, 8, 21), 81],
      [Date.UTC(2017, 8, 23), 80],
      [Date.UTC(2017, 8, 26), 89],
      [Date.UTC(2017, 8, 28), 81],
      [Date.UTC(2017, 8, 29), 80],
      [Date.UTC(2017, 8, 30), 81],
      [Date.UTC(2017, 9, 2), 79],
      [Date.UTC(2017, 9, 4), 79],
      [Date.UTC(2017, 9, 6), 84],
      [Date.UTC(2017, 9, 7), 90],
      [Date.UTC(2017, 9, 8), 100]
    ]
  },
    {
      name: 'Body Pressure Low',
      showInLegend: true,
      color: '#02BBD1',
      data: [
        [Date.UTC(2017, 8, 12), 120],
        [Date.UTC(2017, 8, 15), 120],
        [Date.UTC(2017, 8, 16), 118],
        [Date.UTC(2017, 8, 18), 119],
        [Date.UTC(2017, 8, 21), 120],
        [Date.UTC(2017, 8, 23), 115],
        [Date.UTC(2017, 8, 26), 125],
        [Date.UTC(2017, 8, 28), 120],
        [Date.UTC(2017, 8, 29), 120],
        [Date.UTC(2017, 8, 30), 121],
        [Date.UTC(2017, 9, 2), 119],
        [Date.UTC(2017, 9, 4), 122],
        [Date.UTC(2017, 9, 6), 130],
        [Date.UTC(2017, 9, 7), 139],
        [Date.UTC(2017, 9, 8), 140]
      ]
    }]
};

export class ChartBloodPressure extends React.Component {
  render() {
    return (
      <ReactHighcharts config={config} neverReflow={true}/>
    );
  }
}
