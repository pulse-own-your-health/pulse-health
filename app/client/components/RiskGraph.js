import React from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';

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
        categories: ['Cardio Vascular Disease (CVD)', 'Cancer', 'Diabetes'],
        tickmarkPlacement: 'on',
        lineWidth: 0
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
        name: 'Last week',
        data: [75, 25, 50],
        pointPlacement: 'on',
        color: '#8b8682'
    }
    ]
}

var snippet = 'Your tendency to ';

export class RiskGraph extends React.Component {
    render() {

        return (
            <div id='test'>
                <ReactHighcharts config={config} neverReflow={true} />
                <br></br>
                <h3>Resumee</h3>
                <p>{snippet} CVD has decreased: It is still high!</p>
                <p>{snippet} Cancer has increased</p>
                <p>{snippet} Diabetes has increased</p>
                <br></br>
                <p></p>
            </div>
        );
    }
}