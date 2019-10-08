# cc-charts
Chart.js implementation

## NPM
~~~~
npm install @bltzrrr/cc-charts
~~~~

## Usage
Import chart module:
~~~~
import chart from '@bltzrrr/cc-charts';
~~~~

Create root element
~~~~
<canvas id="someChart"></canvas>
~~~~

### Bar chart
Pass data and set options:
~~~~
const barData = [{
    name: 'Stockholm',
    data: [{
        label: 'Total',
        color: '#78d2ff',
        value: 1200
    }, {
        label: '0-5 years',
        color: '#3f718a',
        value: 1100
    }, {
        label: '5-10 years',
        color: '#1c2d36',
        value: 100
    }]
}, {
    name: 'London',
    data: [{
        label: 'Total',
        color: '#78d2ff',
        value: 1200
    }, {
        label: '0-5 years',
        color: '#3f718a',
        value: 900
    }, {
        label: '5-10 years',
        color: '#1c2d36',
        value: 300
    }]
}];
~~~~

~~~~
let chartOptions = {
    id: 'someChart',
    type: 'bar',
    data: barData,
    height: 680,
    width: 680,
    heading: { title: 'Bar title', axisLabel: 'Label test' }
}
~~~~

### Doughnut chart
Pass data and set options:
~~~~
let doughnutData = [{
    name: 'Stockholm',
    percentage: 24.22,
    color: '#78d2ff'
}, {
    name: 'London',
    percentage: 25.78,
    color: '#3f718a'
}, {
    name: 'Rome',
    percentage: 33,
    color: '#1c2d36'
}, {
    name: 'Madrid',
    percentage: 17,
    color: '#000000'
}];
~~~~
~~~~
let doughnutChartOptions = {
    id: 'doughnutChart',
    type: 'doughnut',
    data: doughnutData,
    heading: { title: 'Doughnut test' },
    height: 680,
    width: 680,
    centerText: {
        title: 'City name',
        label: 'Total Market Size',
        value: '$1234000',
        subText: 'billion'
    }
};
~~~~

### Initialize chart
~~~~
chart.init(chartOptions);
~~~~
