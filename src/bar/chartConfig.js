import chartData from './chartData.js';
import { bar } from '../helpers.js';

const data = {
    labels: bar.getLabels(chartData),
    datasets: bar.getDataSets(chartData)
};

export default {
    type: 'bar',
    data: data,
    options: {
        legend: {
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}