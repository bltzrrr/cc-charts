function getLabels(data) {
    return data.map(el => el.name);
}

function getBarDataSets(chartData) {
    let dataSets = [];
    let labels = [];
    let items = chartData.map(item => item.data).flat();
    items.forEach(element => {
        if (!labels.includes(element.label)) {
            labels.push(element.label);
        }
    });
    labels.forEach(label => {
        let data = items.filter(el => el.label === label);
        let item = items.find(el => el.label === label);
        dataSets.push({
            label: label,
            backgroundColor: item.color,
            data: data.map(el => el.value)
        });
    });
    return dataSets;
}

function getDoughnutDataSets(chartData) {
    let dataSets = [];
    let data = chartData.map(el => el.percentage);
    let color = chartData.map(el => el.color);
    dataSets.push({
        data: data,
        backgroundColor: color
    });
    return dataSets;
}

export const bar = {
    getDataSets: getBarDataSets,
    getLabels
}

export const doughnut = {
    getDataSets: getDoughnutDataSets,
    getLabels
}