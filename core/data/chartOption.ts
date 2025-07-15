let primary = ref<string>('#009DB5')
let secondary = ref<string>('#F94C8E')
export function widgetsChartCommonOption(data: { color: string }) {
  return {
    chart: {
      toolbar: {
        show: false,
      },
      height: 200,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
        "2018-09-19T07:30:00",
        "2018-09-19T08:30:00",
        "2018-09-19T09:30:00",
        "2018-09-19T10:30:00",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        top: -25,
        right: -60,
        bottom: -40,
      },
    },
    fill: {
      opacity: 0.2,
    },
    colors: [data.color],
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 100,
          },
        },
      },
    ],
  }
}
export function rangeBarCommonOption(data: { color: string }) {
  return {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "15%",
        colors: {
          backgroundBarColors: [data.color],
          backgroundBarOpacity: 0.2,
        },
      },
    },
    colors: [data.color],
    stroke: {
      width: 0,
    },
    fill: {
      colors: [data.color],
      type: "gradient",
      gradient: {
        gradientToColors: [data.color],
      },
      opacity: 1,
    },
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Packed",
      style: {
        fontSize: "18px",
        fontFamily: "Outfit', sans-serif",
        fontWeight: 500,
      },
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "44%",
      style: {
        fontSize: "14px",
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Packed"],
    },
    yaxis: {
      max: 100,
    },
    responsive: [
      {
        breakpoint: 767,
        options: {
          title: {
            style: {
              fontSize: "16px",
            },
          },
        },
      },
    ],
  }
}
var trigoStrength = 3;
var iteration = 11;
function generateMinuteWiseTimeSeries(baseval: number, count: number, yrange: object) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      (Math.sin(i / trigoStrength) * (i / trigoStrength) +
        i / trigoStrength +
        1) *
      (trigoStrength * 2);

    series.push([x, y]);
    baseval += 300000;
    i++;
  }
  return series;
}
function generateData(baseval: number, count: number, yrange: { max: number, min: number }) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export const revenueSeries = [
  {
    name: "Sales",
    data: [5, 25, 3, 20, 15],
  },
  {
    name: "Revenue",
    data: [5, 15, 3, 14, 15],
  },
],
  profitSeries = [
    {
      name: "Income",
      type: "line",
      data: [60, 80, 30, 60, 30, 90],
    },
    {
      name: "Earnings",
      type: "line",
      data: [55, 65, 55, 80, 40, 65],
    },
    {
      name: "Profit",
      type: "line",
      data: [50, 40, 70, 40, 100, 70],
    },
  ],
  earningSeries = [
    {
      name: "Net Profit",
      data: [90, 40, 114, 56, 90, 80, 90],
    },
    {
      name: "Revenue",
      data: [60, 75, 90, 80, 61, 30, 70],
    },
  ],
  transactionSeries = [
    {
      name: "transaction",
      data: [1.5, 2.1, 2.9, 3.8, 3.2, 2.1],
    },
    {
      name: "traffic",
      data: [-1.4, -2.2, -2.85, -3.7, -3, -2.2],
    },
  ],
  orderSeries = [
    {
      name: "Earning",
      type: "line",
      data: [330, 60, 370, 240, 250, 70, 280, 60, 185, 60],
    },
    {
      name: "Order",
      type: "line",
      data: [70, 330, 60, 200, 100, 250, 100, 350, 110, 300],
    },
  ],
  visitorSeries = [
    {
      name: "Male",
      type: "line",
      data: [70, 90, 70, 90, 100],
    },
    {
      name: "Female",
      type: "line",
      data: [90, 40, 100, 50, 40],
    },
  ],
  polarSeries = [14, 23, 21, 19, 17, 14, 12, 10],
  projectEarningSeries = [
    {
      name: "Earning",
      data: [4, 3, 3, 3, 4, 3, 3, 4, 5, 3.5, 2.5, 2.5],
    },
  ],
  clientSeries = [
    {
      data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
    },
  ],
  projectSeries = [
    {
      name: "Earning",
      type: "line",
      data: [120, 250, 70, 330, 140, 230, 90, 280, 40, 150, 350, 150, 350],
    },
    {
      name: "Order",
      type: "line",
      data: [80, 200, 150, 200, 100, 150, 110, 200, 110, 200, 150, 80, 30],
    },
  ],
  projectBackBarSeries = [
    {
      name: "Revenue",
      data: [
        30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40,
        11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 11, 28, 40, 11, 28, 40, 11,
        28, 40, 11,
      ],
    },
  ],
  avgEarningSeries = [
    {
      data: [20, 40, 60, 20, 100, 60, 20, 80, 40, 10, 80, 100, 100],
    },
  ],
  profit1Series = [
    {
      name: "Income",
      type: "line",
      data: [60, 80, 30, 60, 30, 90],
    },
    {
      name: "Earnings",
      type: "line",
      data: [55, 65, 55, 80, 40, 65],
    },
    {
      name: "Profit",
      type: "line",
      data: [50, 40, 70, 40, 100, 70],
    },
  ],
  historySeries = [
    {
      name: "Profit",
      data: [100, 50, 25, 50, 30, 50, 70],
    },
    {
      name: "Revenue",
      data: [70, 20, 55, 45, 35, 110, 85],
    },
    {
      name: "Cash Flow",
      data: [85, 55, 100, 35, 90, 60, 80],
    },
  ],
  liveSeries = [
    {
      name: "TEAM A",
      data: [50, 120, 90, 100, 70, 95, 40, 55, 30, 0],
    },
    {
      name: "TEAM B",
      data: [35, 60, 40, 90, 70, 110, 90, 120, 60, 0],
    },
  ],
  turnoverSeries = [
    {
      data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
  ],
  cryptoSeries = [
    {
      data: [
        20, 120, 15, 100, 120, 60, 150, 70, 100, 80, 105, 20, 70, 60, 10, 12,
        10, 130, 60, 80, 40, 140, 110, 150, 30, 75, 20, 45, 15, 130, 10, 30,
        15, 110, 65, 130, 0,
      ],
    },
  ],
  annotationsSeries = [{ data: [8107, 8300, 8260, 8400, 8350, 8500, 8350] }],
  stockSeries = [
    {
      name: "line",
      type: "line",
      data: [
        {
          x: new Date(1538778600000),
          y: 6550,
        },
        {
          x: new Date(1538782200000),
          y: 6560,
        },
        {
          x: new Date(1538814600000),
          y: 6640,
        },
        {
          x: new Date(1538884800000),
          y: 6560,
        },
      ],
    },
    {
      name: "candle",
      type: "candlestick",
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  financeSeries = [
    {
      name: "Load Average",
      type: "column",
      data: generateMinuteWiseTimeSeries(
        new Date("12/12/2016 00:20:00").getTime(),
        12,
        {
          min: 10,
          max: 110,
        }
      ),
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ],
  orderStatusSeries = [
    {
      name: "Running",
      data: generateMinuteWiseTimeSeries(
        new Date("12/12/2016 00:20:00").getTime(),
        12,
        {
          min: 30,
          max: 110,
        }
      ),
    },
    {
      name: "Waiting",
      data: generateMinuteWiseTimeSeries(
        new Date("12/12/2016 00:20:00").getTime(),
        12,
        {
          min: 30,
          max: 110,
        }
      ),
    },
  ],
  monthlysalesSeries = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
  ],
  userSeries = [
    {
      name: "Bubble1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  userOption = {
    chart: {
      toolbar: {
        show: false,
      },
      height: 320,
      type: "bubble",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.7,
        stops: [0, 100],
      },
    },
    colors: [
      primary.value,
      secondary.value,
      "#51bb25",
      "#544fff",
    ],
    title: {
      text: "Simple Bubble Chart",
    },
    xaxis: {
      tickAmount: 12,
      type: "category",
    },
    yaxis: {
      max: 70,
    },
  },
  monthlysalesOption = {
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "Reflected",
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    colors: [primary.value, secondary.value],
    chart: {
      height: 300,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title: {
      text: "Radar Chart - Multi Series",
    },
    stroke: {
      width: 0,
    },
    markers: {
      size: 0,
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  orderStatusOption = {
    chart: {
      height: 350,
      type: "line",
      stacked: true,
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      events: {
        animationEnd: function (chartCtx: any) {
          const newData1 = chartCtx.w.config.series[0].data.slice();
          newData1.shift();
          const newData2 = chartCtx.w.config.series[1].data.slice();
          newData2.shift();
          window.setTimeout(function () {
            chartCtx.updateOptions(
              {
                series: [
                  {
                    data: newData1,
                  },
                  {
                    data: newData2,
                  },
                ],
                subtitle: {
                  text: parseInt(getRandom() * Math.random()).toString(),
                },
              },
              false,
              false
            );
          }, 300);
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 5,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    fill: {
      opacity: 0.9,
    },
    colors: [primary.value, secondary.value],
    markers: {
      size: 0,
      hover: {
        size: 0,
      },
    },
    xaxis: {
      type: "datetime",
      range: 2700000,
    },
    yaxis: {
      decimalsInFloat: 1,
    },
    title: {
      text: "Processes",
      align: "left",
      style: {
        fontSize: "12px",
      },
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "right",
      onItemClick: {
        toggleDataSeries: false,
      },
      position: "top",
      offsetY: -33,
      offsetX: 60,
    },
    responsive: [
      {
        breakpoint: 1366,
        options: {
          title: {
            style: {
              fontSize: "18px",
            },
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          title: {
            style: {
              fontSize: "16px",
            },
          },
        },
      },
    ],
  },
  financeOption = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    title: {
      text: "Average",
      align: "left",
      style: {
        fontSize: "12px",
      },
    },
    subtitle: {
      text: "17%",
      floating: true,
      align: "right",
      offsetY: 0,
      style: {
        fontSize: "20px",
        fontWeight: 500,
      },
    },
    fill: {
      colors: [primary.value],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    xaxis: {
      type: "datetime",
      range: 2700000,
    },
    yaxis: {
      decimalsInFloat: 1,
    },
    legend: {
      show: true,
    },
    responsive: [
      {
        breakpoint: 1366,
        options: {
          subtitle: {
            style: {
              fontSize: "18px",
            },
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          subtitle: {
            style: {
              fontSize: "16px",
            },
          },
        },
      },
    ],
  },
  stockOption = {
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#009DB5",
          downward: "#F99B0D",
        },
      },
    },
    legend: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.2,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    chart: {
      height: 450,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: [1, 1],
    },
    tooltip: {
      shared: true,
      custom: [
        function ({ seriesIndex, dataPointIndex, w }: { seriesIndex: number, dataPointIndex: number, w: any }) {
          return w.globals.series[seriesIndex][dataPointIndex];
        },
        function ({ seriesIndex, dataPointIndex, w }: { seriesIndex: number, dataPointIndex: number, w: any }) {
          var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
          var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
          var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
          var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
          return "";
        },
      ],
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      strokeDashArray: 3,
      position: "back",
      row: {
        opacity: 0.5,
      },
      column: {
        opacity: 0.5,
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  },
  annotationsOption = {
    chart: {
      height: 400,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 8200,
          y2: 8400,
          borderColor: "#f8d62b",
          fillColor: "#f8d62b",
          opacity: 0.1,
          label: {
            borderColor: "#f8d62b",
            offsetX: -30,
            style: {
              fontSize: "10px",
              color: "#fff",
              background: "#f8d62b",
            },
            text: "Y-axis range",
          },
        },
      ],
      xaxis: [
        {
          x: new Date("15 Nov 2017").getTime(),
          strokeDashArray: 0,
          borderColor: primary.value,
          label: {
            borderColor: primary.value,
            offsetY: 20,
            style: {
              color: "#fff",
              background: primary.value,
            },
            text: "Anno Test",
          },
        },
        {
          x: new Date("17 Nov 2017").getTime(),
          x2: new Date("18 Nov 2017").getTime(),
          fillColor: "#51bb25",
          opacity: 0.1,
          label: {
            borderColor: "##51bb25",
            style: {
              fontSize: "10px",
              color: "#fff",
              background: "#51bb25",
            },
            offsetY: 20,
            text: "X-axis range",
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    grid: {
      padding: {
        right: 30,
        left: 20,
      },
    },
    title: {
      text: "Line with Annotations",
      align: "left",
      style: {
        fontSize: "18px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 500,
      },
    },
    colors: [secondary.value],
    labels: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
    ],
    xaxis: {
      type: "datetime",
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          title: {
            style: {
              fontSize: "16px",
            },
          },
        },
      },
    ],
  },
  cryptoOption = {
    chart: {
      toolbar: {
        show: false,
      },
      height: 400,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
      ],
      tickAmount: 5,
      tickPlacement: "between",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    grid: {
      borderColor: "rgba(196,196,196, 0.3)",
      padding: {
        top: -20,
        right: -16,
        bottom: 0,
      },
    },
    fill: {
      opacity: 0.2,
    },
    colors: [primary.value],
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  },
  turnoverOption = {
    chart: {
      toolbar: {
        show: false,
      },
      height: 300,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      borderColor: "rgba(196,196,196, 0.3)",
      padding: {
        top: -20,
        right: -55,
        bottom: 0,
      },
    },
    fill: {
      opacity: 0.2,
    },
    colors: [primary.value],
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
  liveOption = {
    chart: {
      height: 320,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 0,
    },
    fill: {
      colors: [primary.value, secondary.value],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "rgba(196,196,196, 0.3)",
      padding: {
        top: 0,
        right: -120,
        bottom: 10,
      },
    },
    colors: [primary.value, secondary.value],
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        color: "rgba(196,196,196, 0.3)",
      },
    },
    yaxis: [
      {
        title: {
          text: "Dollars in thounand",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
  histroyOption = {
    chart: {
      type: "bar",
      height: 380,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
      curve: "smooth",
      lineCap: "butt",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      floating: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        color: "#C4C4C4",
      },
    },
    yaxis: {
      title: {
        text: "Dollars in thounand",
        style: {
          fontSize: "14px",
          fontFamily: "Outfit', sans-serif",
          fontWeight: 500,
        },
      },
    },
    colors: [secondary, "#51bb25", primary.value],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return "$ " + val + " thousands";
        },
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  },
  circleOption = {
    chart: {
      type: "radialBar",
      height: 375,
      offsetY: -30,
      offsetX: 20,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 10,
          size: "30%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#f2f2f2",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3,
        },
      },
    },
    series: [90, 63, 50],
    labels: ["Skill 01", "Skill 02", "Skill 03"],
    legend: {
      show: true,
      fontSize: "16px",
      fontFamily: "Outfit', sans-serif",
      fontWeight: 500,
      labels: {
        colors: "#2C323F",
      },
      markers: {
        width: 86,
        height: 18,
        radius: 3,
      },
    },
    colors: [secondary.value, primary.value, "#51bb25"],
    responsive: [
      {
        breakpoint: 767,
        options: {
          title: {
            style: {
              fontSize: "16px",
            },
          },
        },
      },
    ],
  },
  profit1Option = {
    chart: {
      height: 300,
      type: "line",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 4,
        left: 0,
        blur: 2,
        colors: ["#009DB5", "#83BF6E", "#F99B0D"],
        opacity: 0.02,
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 6,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    colors: ["#009DB5", "#83BF6E", "#F99B0D"],
    stroke: {
      width: 3,
      curve: "smooth",
      opacity: 1,
    },
    markers: {
      discrete: [
        {
          seriesIndex: 1,
          dataPointIndex: 3,
          fillColor: "#54BA4A",
          strokeColor: "var(--white)",
          size: 6,
        },
      ],
    },
    tooltip: {
      shared: false,
      intersect: false,
      marker: {
        width: 5,
        height: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: ["Jan 02", "Jan 05", "Jan 08", "Jan 11", "Jan 14", "Jan 17"],
      min: 0.9,
      max: undefined,
      crosshairs: {
        show: false,
      },
      labels: {
        style: {
          colors: "var(--chart-text-color)",
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 1,
        opacityFrom: 0.95,
        opacityTo: 1,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      tickAmount: 5,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 651,
        options: {
          chart: {
            height: 210,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 255,
          },
        },
      },
      {
        breakpoint: 1221,
        options: {
          chart: {
            height: 290,
          },
        },
      },
      {
        breakpoint: 1378,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1576,
        options: {
          chart: {
            height: 270,
          },
        },
      },
    ],
  },
  avgEarningOption = {
    chart: {
      type: "line",
      height: 160,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 20,
        color: "var(--theme-default)",
        opacity: 0.5,
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 6,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    stroke: {
      curve: "stepline",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      min: 0,
      tickAmount: 5,
      tickPlacement: "between",
    },
    markers: {
      size: 3,
      colors: "var(--white)",
      strokeColors: "#009DB5",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: "circle",
      offsetX: 2,
      offsetY: 2,
      radius: 2,
      hover: {
        size: 3,
      },
    },
    colors: ["#009DB5"],

    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 122,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 160,
          },
        },
      },
    ],
  },
  projectBackBarOption = {
    chart: {
      type: "bar",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    colors: ["var(--chart-dashed-border)"],
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.7,
    },
    tooltip: {
      enabled: false,
    },
    states: {
      normal: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
        },
      },
    },
    responsive: [
      {
        breakpoint: 405,
        options: {
          chart: {
            height: 150,
          },
        },
      },
    ],
  },
  projectOption = {
    chart: {
      height: 240,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.08,
      },
    },
    stroke: {
      width: [2, 2, 2],
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
      opacity: 1,
      type: "solid",
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    xaxis: {
      type: "category",
      tickAmount: 4,
      tickPlacement: "between",
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: "var(--chart-border)",
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      tickPlacement: "between",
      labels: {
        formatter: function (val: string) {
          return val + "K";
        },
        offsetX: -5,
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 1023,
        options: {
          chart: {
            height: 260,
          },
        },
      },
      {
        breakpoint: 1008,
        options: {
          chart: {
            height: 268,
          },
        },
      },
      {
        breakpoint: 1007,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 240,
          },
        },
      },
    ],
  },
  clientOption = {
    chart: {
      type: "area",
      height: 145,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "category",
      categories: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "july",
        "aug",
        "sep",
        "oct",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -60,
      },
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
    colors: ["#F99B0D"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
  },
  projectEarningOption = {
    chart: {
      height: 100,
      type: "bar",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 10,
        left: 0,
        blur: 3,
        color: "var(--theme-default)",
        opacity: 0.25,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "last",
        columnWidth: "25%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S", "s", "m", "t", "w", "t"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["var(--theme-default)"],
  },
  polarOption = {
    chart: {
      type: "polarArea",
      height: 250,
    },
    stroke: {
      colors: ["#fff"],
    },
    colors: ["#009DB5", "#F99B0D", "#83BF6E"],
    fill: {
      opacity: 0.8,
    },
    legend: {
      show: false,
    },
  },
  visitorOption = {
    chart: {
      height: 110,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.08,
      },
    },
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
      opacity: 1,
      type: "solid",
    },
    labels: ["1", "2", "3", "4", "5"],
    xaxis: {
      type: "category",
      tickAmount: 8,
      tickPlacement: "between",
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: "var(--chart-border)",
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },

    legend: {
      show: false,
    },

    tooltip: {
      shared: false,
      intersect: false,
    },
    responsive: [
      {
        breakpoint: 1365,
        options: {
          chart: {
            height: 90,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 135,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 125,
            width: "100%",
          },
        },
      },
    ],
  },
  orderOption = {
    chart: {
      height: 225,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.08,
      },
    },
    stroke: {
      width: [2, 2, 2],
      curve: "smooth",
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
      opacity: 1,
      type: "solid",
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    xaxis: {
      type: "category",
      tickAmount: 8,
      tickPlacement: "between",
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: "var(--chart-border)",
      },
      axisTicks: {
        show: false,
      },
    },

    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 3,
          fillColor: "#009DB5",
          strokeColor: "var(--white)",
          size: 6,
          sizeOffset: 2,
        },
      ],
      hover: {
        size: 6,
        sizeOffset: 0,
      },
    },

    legend: {
      show: false,
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      tickPlacement: "between",
      labels: {
        formatter: function (val: string) {
          return val + "K";
        },
        offsetX: -5,
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    responsive: [
      {
        breakpoint: 1365,
        options: {
          chart: {
            height: 140,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 225,
          },
        },
      },
      {
        breakpoint: 781,
        options: {
          chart: {
            height: 235,
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          chart: {
            height: 170,
          },
        },
      },
    ],
  },
  transactionOption = {
    chart: {
      type: "bar",
      height: 200,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#83BF6E", "var(--theme-default)"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "40%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },

    grid: {
      borderColor: "var(--chart-border)",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: -5,
      max: 5,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      categories: ["85+", "80-84", "75-79", "70-74", "65-69", "60-64"],
      position: "top",
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },

    responsive: [
      {
        breakpoint: 1441,
        options: {
          chart: {
            height: 180,
          },
        },
      },
    ],
  },
  earningOption = {
    chart: {
      type: "bar",
      height: 245,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
        endingShape: "rounded",
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 0,
    },
    xaxis: {
      categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    colors: ["var(--theme-default)", "#F99B0D"],
    fill: {
      type: ["solid", "gradient"],
      opacity: 1,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1531,
        options: {
          chart: {
            height: 255,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 272,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 265,
          },
        },
      },
      {
        breakpoint: 963,
        options: {
          chart: {
            height: 272,
          },
        },
      },
    ],
  },
  profitOption = {
    chart: {
      height: 255,
      type: "line",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 4,
        left: 0,
        blur: 2,
        colors: ["var(--theme-default)", "#83BF6E", "#F99B0D"],
        opacity: 0.02,
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 6,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    colors: ["var(--theme-default)", "#83BF6E", "#F99B0D"],
    stroke: {
      width: 3,
      curve: "smooth",
      opacity: 1,
    },
    markers: {
      discrete: [
        {
          seriesIndex: 1,
          dataPointIndex: 3,
          fillColor: "#54BA4A",
          strokeColor: "var(--white)",
          size: 6,
        },
      ],
    },
    tooltip: {
      shared: false,
      intersect: false,
      marker: {
        width: 5,
        height: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: ["Jan 02", "Jan 05", "Jan 08", "Jan 11", "Jan 14", "Jan 17"],
      min: 0.9,
      max: undefined,
      crosshairs: {
        show: false,
      },
      labels: {
        style: {
          colors: "var(--chart-text-color)",
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 1,
        opacityFrom: 0.95,
        opacityTo: 1,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      tickAmount: 5,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 651,
        options: {
          chart: {
            height: 210,
          },
        },
      },
    ],
  },
  pipelineOption = {
    labels: ["Store", "Ad", "Search"],
    chart: {
      height: 400,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 4,
            },
            total: {
              show: true,
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              label: "88%",
              color: "#000",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#f99b0d", "#009DB5", "#7fbe71"],
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val: string, opts: any) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 1750,
        options: {
          chart: {
            offsetX: 10,
          },
          legend: {
            show: false,
          },
        },
      },
      {
        breakpoint: 1800,
        options: {
          chart: {
            width: 154,
            height: 154,
            offsetX: 40,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
  revenueOption = {
    chart: {
      height: 140,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed"],
      tickAmount: 6,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: ["var(--body-light-font-color)"],
        },
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 6,
      position: "back",
    },
    colors: ["#80be70", "#c8e7e5"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#029eb4"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    legend: {
      show: false,
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 3,
    },
  }