import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Import ApexCharts component


const ApexChart = ({ seriesData, categories, title }) => {
  const [state, setState] = React.useState({
    series: [{
      name: "Desktops",
      data: seriesData || [10, 41, 35, 51, 49, 62, 69, 91, 148] // default series data
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth', // smooth curve for the line
        width: 4, // line width
        colors: ['#FF00AA'] // change this to the desired line color (e.g., red)
      },
      title: {
        // text: title || 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'],
          opacity: 0.3
        },
      },
      xaxis: {
        categories: categories || ['1', '15', '30'] // default categories
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
      </div>
    </div>
  );
}

export default ApexChart;
