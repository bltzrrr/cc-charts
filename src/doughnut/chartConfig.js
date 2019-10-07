import chartData from './chartData.js';
import { doughnut } from '../helpers.js';
import chartDataLabels from 'chartjs-plugin-datalabels';

const data = {
    labels: doughnut.getLabels(chartData),
    datasets: doughnut.getDataSets(chartData)
};

const afterLayout = {
    afterLayout(chart) {
        let chartId = chart.canvas.getAttribute('id');
        let chartElement = document.getElementById(chartId);
        let config = chart.config;
        let chartWidth = chart.width - chart.legend.width; 
        if (config.centerText) {
            let centerText = config.centerText;
            let parent = chartElement.parentElement;
            let content = document.createElement('div');
            for (const key in centerText) {
                let element = document.createElement('div');
                if (key === 'title') {
                    element.classList.add('title');
                }
                element.classList.add(key === 'value' ? 'value' : 'label');
                element.innerText = centerText[key];
                content.append(element);
            }
            content.classList.add('cc-chart-element__center');
            content.style.left = chartWidth / 2 + 'px';
            content.style.top = chartElement.clientHeight / 2 + 'px';
            parent.append(content);
        }
    }
}

export default {
    type: 'doughnut',
    data: data,
    plugins: [chartDataLabels, afterLayout],
    options: {
        legend: {
            position: 'right'
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: '#fff'
            }
        }
    },
    centerText: {
        title: 'Madrid',
        label: 'Total Market Size',
        value: '$1234000',
        subText: 'billion'
    }
}