export const DEFAULT_CHART_OPTION = {
  chart: {
    id: 'datetime-chart',
    background: '#02203a',
    foreColor: '#adb0b2',
    animations: {
      enabled: false,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: true,
      format: 'dd MMM yyyy',
      formatter: undefined,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6,
  },
  colors: ['#0079db', '#f7b625'],
  stroke: { width: 2 },
  legend: {
    showForSingleSeries: true,
    markers: { radius: 0, height: 2, width: 24 },
    itemMargin: { vertical: 20 },
  },
};
