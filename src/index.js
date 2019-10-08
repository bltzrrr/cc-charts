import css from './main.scss';
import chartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js';
import barConfig from './bar/chartConfig.js';
import doughnutConfig from './doughnut/chartConfig.js';
Chart.plugins.unregister(chartDataLabels);

function init() {
    console.log('works');
    // bar chart
    var barContext = document.getElementById('barChart');
    var barChart = new Chart(barContext, barConfig);

    // doughnut chart
    var doughnutContext = document.getElementById('doughnutChart');
    var doughnutChart = new Chart(doughnutContext, doughnutConfig);
}

export default {
    a: '123'
}