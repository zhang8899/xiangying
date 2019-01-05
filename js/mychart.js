var myChart1 = echarts.init(document.querySelector(".candColor"));
	var option1 = {

        tooltip : {
        trigger: 'axis',
        formatter: function (params) {
            var res =' DATETIME ' + params[0].name;
            res += '<br/>  OPEN : ' + params[0].value[0] + '  HIGH : ' + params[0].value[3];
            res += '<br/>  CLOSE: ' + params[0].value[1] + ' LOW : ' + params[0].value[2];
            return res;
        }
    },
    color:['#00cc00','#cc0000'],
    xAxis: {
        data: ['12:00','12:30',' 13:00',' 13:30',' 14:00',' 14:30',' 15:00',' 15:30',' 16:00',' 16:30',' 17:00',' 17:30',' 18:00',' 18:30',' 19:00',' 19:30',' 20:00',' 20:30',' 21:00',' 21:30',' 22:00',' 22:30',' 23:00',' 23:30',' 00:00',' 00:30',' 01:00',' 01:30',' 02:00',' 02:30']

    },
    yAxis: {
       
    },
    series: [{
        name:'Candlestick colors',
        type: 'k',
        itemStyle:{
            color:'#cc0000',
            opcity:0.5,
            borderColor:'#cc0000',
            borderColor0:'#00cc00',

        },
        data: [  
        [25.00, 27.00, 12.00, 27.00],
        [19.00, 27.00, 8.00, 27.00],
        [19.00, 24.00, 18.00, 21.00],
        [19.00,20.00,13.00,19.00],
        [20.00,22.00,15.00,17.00],
        [13.00,21.00,5.00,15.00],
        [9.00,25.00,6.00,20.00],
        [29.00,29.00,29.00,29.00],
        [30.00,31.00,28.00,30.00],
        [32.00,33.00,26.00,30.00],
        [22.00,33.00,18.00,27.00],
        [16.00,30.00,15.00,25.00],
        [30.00,31.00,28.00,31.00],
        [28.00,28.00,28.00,28.00],
        [16.00,25.00,11.00,25.00],
        [17.00,24.00,14.00,19.00],
        [23.00,24.00,17.00,20.00],
        [27.00,27.00,21.00,22.00],
        [14.00,23.00,5.00,10.00],
        [24.00,24.00,23.00,24.00],
        [16.00,19.00,3.00,18.00],
        [22.00,22.00,22.00,22.00],
        [19.00,20.00,8.00,11.00],
        [20.00,24.00,19.00,22.00],
        [23.00,25.00,9.00,25.00],
        [23.00,25.00,22.00,24.00],
        [22.00,25.00,19.00,22.00],
        [18.00,20.00,16.00,20.00],
        [15.00,16.00,-2.00,4.00],
        [-2.00,11.00,-6.00,1.00]
        ]
    }]
};
myChart1.setOption(option1);

var myChart2 = echarts.init(document.querySelector(".skills"));
var option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right:"right",
        top:"middle",
        data:['jquery','javascript','ruby','python','css3']
    },
    color:['#99cc00','#ff3300','#944ddb','#3399ff','#ffc575'],
   
    series: [
        {
            name:'',
            type:'pie',
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:235, name:'ruby'},
                {value:310, name:'python'},
                {value:234, name:'css3'},
                {value:375, name:'jquery'},
                {value:548, name:'javascript'}
            ]
        }
    ]
};
myChart2.setOption(option2);

var myChart3 = echarts.init(document.querySelector(".realTime"));

function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}

var option3= {
    title: {
        text: ''
    },
    color:['#edc240'],
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};

setInterval(function () {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart3.setOption({
        series: [{
            data: data
        }]
    });
}, 1000);
myChart3.setOption(option3);
var myChart4 = echarts.init(document.querySelector(".line")); 
var option4 ={
    xAxis: {
        type: 'category',
        data: ['12:00','12:30',' 13:00',' 13:30',' 14:00',' 14:30',' 15:00',' 15:30',' 16:00',' 16:30',' 17:00',' 17:30',' 18:00',' 18:30',' 19:00',' 19:30',' 20:00',' 20:30',' 21:00',' 21:30',' 22:00',' 22:30',' 23:00',' 23:30',' 00:00',' 00:30',' 01:00',' 01:30',' 02:00',' 02:30']

    },
    yAxis: {
        type: 'value',
     
    },
    series: [{
        data: [98.09, 92.94, 92.21, 90.59, 75.74, 79.85, 76.76,81.13,78.93,83.97,71.92,83.97,72.94,80.74,75.00,65.00,78.09,73.97,73.97,70.00,71.03,62.94,72.79,60.74,61.03,62.21,51.91,63.97,56.91],
        type: 'line',
        smooth: true
    }]
};
myChart4.setOption(option4);


var myChart5 = echarts.init(document.querySelector(".error")); 
var dimensions = [
    'name', 'Price', 'Prime cost', 'Prime cost min', 'Prime cost max', 'Price min', 'Price max'
];
var data = [
    ['Blouse "Blue Viola"', 101.88, 99.75, 76.75, 116.75, 69.88, 119.88],
    ['Dress "Daisy"', 155.8, 144.03, 126.03, 156.03, 129.8, 188.8],
    ['Trousers "Cutesy Classic"', 203.25, 173.56, 151.56, 187.56, 183.25, 249.25],
    ['Dress "Morning Dew"', 256, 120.5, 98.5, 136.5, 236, 279],
    ['Turtleneck "Dark Chocolate"', 408.89, 294.75, 276.75, 316.75, 385.89, 427.89],
    ['Jumper "Early Spring"', 427.36, 430.24, 407.24, 452.24, 399.36, 461.36],
    ['Breeches "Summer Mood"', 356, 135.5, 123.5, 151.5, 333, 387],
    ['Dress "Mauve Chamomile"', 406, 95.5, 73.5, 111.5, 366, 429],
    ['Dress "Flying Tits"', 527.36, 503.24, 488.24, 525.24, 485.36, 551.36],
    ['Dress "Singing Nightingales"', 587.36, 543.24, 518.24, 555.24, 559.36, 624.36],
    ['Sundress "Cloudy weather"', 603.36, 407.24, 392.24, 419.24, 581.36, 627.36],
    ['Sundress "East motives"', 633.36, 477.24, 445.24, 487.24, 594.36, 652.36],
    ['Sweater "Cold morning"', 517.36, 437.24, 416.24, 454.24, 488.36, 565.36],
    ['Trousers "Lavender Fields"', 443.36, 387.24, 370.24, 413.24, 412.36, 484.36],
    ['Jumper "Coffee with Milk"', 543.36, 307.24, 288.24, 317.24, 509.36, 574.36],
    ['Blouse "Blooming Cactus"', 790.36, 277.24, 254.24, 295.24, 764.36, 818.36],
    ['Sweater "Fluffy Comfort"', 790.34, 678.34, 660.34, 690.34, 762.34, 824.34]
];

function renderItem(params, api) {
    var children = [];
    var coordDims = ['x', 'y'];

    for (var baseDimIdx = 0; baseDimIdx < 2; baseDimIdx++) {
        var otherDimIdx = 1 - baseDimIdx;
        var encode = params.encode;
        var baseValue = api.value(encode[coordDims[baseDimIdx]][0]);
        var param = [];
        param[baseDimIdx] = baseValue;
        param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][1]);
        var highPoint = api.coord(param);
        param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][2]);
        var lowPoint = api.coord(param);
        var halfWidth = 5;

        var style = api.style({
            stroke: api.visual('color'),
            fill: null
        });

        children.push({
            type: 'line',
            shape: makeShape(
                baseDimIdx,
                highPoint[baseDimIdx] - halfWidth, highPoint[otherDimIdx],
                highPoint[baseDimIdx] + halfWidth, highPoint[otherDimIdx]
            ),
            style: style
        }, {
            type: 'line',
            shape: makeShape(
                baseDimIdx,
                highPoint[baseDimIdx], highPoint[otherDimIdx],
                lowPoint[baseDimIdx], lowPoint[otherDimIdx]
            ),
            style: style
        }, {
            type: 'line',
            shape: makeShape(
                baseDimIdx,
                lowPoint[baseDimIdx] - halfWidth, lowPoint[otherDimIdx],
                lowPoint[baseDimIdx] + halfWidth, lowPoint[otherDimIdx]
            ),
            style: style
        });
    }

    function makeShape(baseDimIdx, base1, value1, base2, value2) {
        var shape = {};
        shape[coordDims[baseDimIdx] + '1'] = base1;
        shape[coordDims[1 - baseDimIdx] + '1'] = value1;
        shape[coordDims[baseDimIdx] + '2'] = base2;
        shape[coordDims[1 - baseDimIdx] + '2'] = value2;
        return shape;
    }

    return {
        type: 'group',
        children: children
    };
}

var option5 = {
    tooltip: {
    },
    legend: {
        data: ['bar', 'error']
    },
    dataZoom: [{
        type: 'slider',
        height: 8,
        bottom: 20,
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        }
    }, {
        type: 'inside'
    }],
    grid: {
        bottom: 80
    },
    xAxis: {},
    yAxis: {},
    series: [{
        type: 'scatter',
        name: 'error',
        data: data,
        dimensions: dimensions,
        encode: {
            x: 2,
            y: 1,
            tooltip: [2, 1, 3, 4, 5, 6],
            itemName: 0
        },
        itemStyle: {
            normal: {
                color: '#77bef7'
            }
        }
    }, {
        type: 'custom',
        name: 'error',
        renderItem: renderItem,
        dimensions: dimensions,
        encode: {
            x: [2, 3, 4],
            y: [1, 5, 6],
            tooltip: [2, 1, 3, 4, 5, 6],
            itemName: 0
        },
        data: data,
        z: 100
    }]
};

myChart5.setOption(option5);





var myChart6 = echarts.init(document.querySelector(".report")); 

var app = {};
var cellSize = [80, 80];
var pieRadius = 30;

function getVirtulData() {
    var date = +echarts.number.parseDate('2017-02-01');
    var end = +echarts.number.parseDate('2017-03-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

function getPieSeries(scatterData, chart) {
    return echarts.util.map(scatterData, function (item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            radius: pieRadius,
            data: [
                {name: '工作', value: Math.round(Math.random() * 24)},
                {name: '娱乐', value: Math.round(Math.random() * 24)},
                {name: '睡觉', value: Math.round(Math.random() * 24)}
            ]
        };
    });
}

function getPieSeriesUpdate(scatterData, chart) {
    return echarts.util.map(scatterData, function (item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            center: center
        };
    });
}

var scatterData = getVirtulData();

var option6 = {
    tooltip : {},
    legend: {
        data: ['工作', '娱乐', '睡觉'],
        bottom: 20
    },
    calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
            show: false,
            textStyle: {
                fontSize: 30
            }
        },
        dayLabel: {
            margin: 20,
            firstDay: 1,
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        monthLabel: {
            show: false
        },
        range: ['2017-02']
    },
    series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                    color: '#000',
                    fontSize: 14
                }
            }
        },
        data: scatterData
    }]
};

if (!app.inNode) {
    var pieInitialized;
    setTimeout(function () {
        pieInitialized = true;
        myChart6.setOption({
            series: getPieSeries(scatterData, myChart6)
        });
    }, 10);

}



if (option6 && typeof option6 === "object") {
    myChart6.setOption(option6, true);
}




window.onresize = function () {
    myChart1.resize();
    myChart2.resize(); 
    myChart3.resize(); 
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();

   

}
