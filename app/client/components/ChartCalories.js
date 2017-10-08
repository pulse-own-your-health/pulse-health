import React from 'react';

var ReactHighcharts = require('react-highcharts');

var config = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Calories burned'
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
      text: 'Calories'
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
      [Date.UTC(2017, 8, 12), 427],
      [Date.UTC(2017, 8, 15), 107],
      [Date.UTC(2017, 8, 16), 93],
      [Date.UTC(2017, 8, 18), 482],
      [Date.UTC(2017, 8, 21), 427],
      [Date.UTC(2017, 8, 23), 315],
      [Date.UTC(2017, 8, 26), 152],
      [Date.UTC(2017, 8, 28), 330],
      [Date.UTC(2017, 8, 29), 29],
      [Date.UTC(2017, 8, 30), 164],
      [Date.UTC(2017, 9, 2), 230],
      [Date.UTC(2017, 9, 4), 180],
      [Date.UTC(2017, 9, 6), 145],
      [Date.UTC(2017, 9, 7), 72],
      [Date.UTC(2017, 9, 8), 29],
    ]
  }]
};

export class ChartCalories extends React.Component {
  render() {
    return (
      <ReactHighcharts config={config} neverReflow={true}/>
    );
  }
}
