import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import cryptoData from '../data/crypto.js';

const TotalInvestedChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (cryptoData && cryptoData.marketPrices) {

      const aggregatedData = {};
      
      cryptoData.marketPrices.forEach(market => {
        market.seriesPrice.forEach(price => {
          if (!aggregatedData[price.date]) {
            aggregatedData[price.date] = 0;
          }
          aggregatedData[price.date] += price.value;
        });
      });

      const seriesData = Object.keys(aggregatedData).map(date => ({
        date,
        value: aggregatedData[date],
      })).sort((a, b) => new Date(a.date) - new Date(b.date));

      setChartData(seriesData);
    } else {
      console.error('Data or marketPrices is undefined');
    }
  }, []);

  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Invested Value Over Time',
    },
    xAxis: {
      type: 'category',
      categories: chartData.map(data => data.date),
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: 'Value ($)',
      },
    },
    series: [
      {
        name: 'Invested Value',
        data: chartData.map(data => parseFloat(data.value.toFixed(2))),
      },
    ],
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y:.2f}</b><br/>',
      valueDecimals: 2,
      valuePrefix: '$'
    },
  };

  return (
    <div className="widget">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};


export default TotalInvestedChart;
