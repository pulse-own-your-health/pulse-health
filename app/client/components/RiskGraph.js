import React from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import {Banner} from './Main';

HighchartsMore(ReactHighcharts.Highcharts)

var dataset = [['Overweight', 50],['Cardio',25],['Sugar', 75]];
var data = JSON.stringify(dataset);

var config = {
    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Overview of current week',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Cardio Vascular Disease', 'Cancer', 'Diabetes'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">'
    },

    series: [{
        name: 'Your health',
        data: [{y: 80, marker: { fillColor: '#D13251', radius: 6 }}, {y: 19.6, marker: { fillColor: '#6E6E6E'}}, {y: 44.6, marker: { fillColor: '#6E6E6E'} }],
        pointPlacement: 'on',
        color: '#6E6E6E'
    }
    ]
}

var snippet = 'Your risk for ';

export class RiskGraph extends React.Component {
    render() {
        return (
            <div id='test'>
                <ReactHighcharts config={config} neverReflow={true} />
                <Banner title="Cardio Vascular Disease">
                    {snippet} Cardio Vascular Disease is still high! Eating fruits and
                    vegetables while being active prevents from increasing it.
                </Banner>
                <Banner title="Cancer">
                    {snippet} Cancer is low.
                </Banner>
                <Banner title="Diabetes">
                    {snippet} Diabetes is medium. Consume less red meat and avoid too
                    much sugar, it will get better then.
                </Banner>
            </div>
        );
    }
}