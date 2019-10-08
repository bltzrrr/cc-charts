import css from './main.scss';
import chartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js';
import barConfig from './bar/chartConfig.js';
import doughnutConfig from './doughnut/chartConfig.js';
Chart.plugins.unregister(chartDataLabels);

function prepareChart(options, chartContext) {
    var wrapper = document.createElement('div');
    var canvasWrapper = document.createElement('div');
    canvasWrapper.classList.add('canvas-wrapper');
    wrapper.classList.add('cc-chart-element');
    wrapper.classList.add('cc-chart-element__' + options.type);
    wrapper.style.height = options.height ? options.height + 'px' : '500px';
    wrapper.style.width = options.width ? options.width + 'px' : '700px';
    chartContext.parentNode.insertBefore(wrapper, chartContext);
    if (options.heading) {
        let heading = document.createElement('div');
        heading.classList.add('cc-chart-element__heading');
        if (options.heading.axisLabel) {
            let axisLabel = document.createElement('div');
            axisLabel.classList.add('axis-label');
            axisLabel.innerText = options.heading.axisLabel;
            heading.appendChild(axisLabel);
        }
        if (options.heading.title) {
            let title = document.createElement('h3');
            title.classList.add('cc-chart-title');
            title.innerText = options.heading.title
            heading.appendChild(title);
        } 
        wrapper.appendChild(heading);
    }
    wrapper.appendChild(canvasWrapper);
    canvasWrapper.appendChild(chartContext);
}

function init(options) {
    let configMapping = {
        'bar': barConfig,
        'doughnut': doughnutConfig
    }
    let currentConfig = configMapping[options.type](options);
    var chartContext = document.getElementById(options.id);
    prepareChart(options, chartContext);
    var chart = new Chart(chartContext, currentConfig);
}

export default {
    init
}