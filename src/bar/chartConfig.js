import { bar } from '../helpers.js';

const getData = (dataSource) => ({
    labels: bar.getLabels(dataSource),
    datasets: bar.getDataSets(dataSource)
});

export default (options) => ({
    type: 'bar',
    data: getData(options.data),
    options: {
        legend: {
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                stacked: options.stacked,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: options.stacked ? [{
                stacked: true
            }] : []
        }
    }
})