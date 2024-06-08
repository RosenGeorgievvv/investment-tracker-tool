import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import cryptoData from '../data/crypto.js';
import propertyData from '../data/properties.js';
import metalsData from '../data/metals.js';
import stocksData from '../data/stocks.js';

const PortfolioDonutChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const aggregateData = () => {
      const getTotalValue = (data) => {
        return data.marketPrices.reduce((acc, market) => {
          if (market.seriesPrice) {
            const seriesTotal = market.seriesPrice.reduce((sum, price) => sum + price.value, 0);
            return acc + seriesTotal;
          }
          return acc;
        }, 0);
      };

      const cryptoValue = getTotalValue(cryptoData).toFixed(2);
      const propertyValue = getTotalValue(propertyData).toFixed(2);
      const metalsValue = getTotalValue(metalsData).toFixed(2);
      const stocksValue = getTotalValue(stocksData).toFixed(2);

      setChartData([
        { name: 'Crypto', y: parseFloat(cryptoValue) },
        { name: 'Property', y: parseFloat(propertyValue) },
        { name: 'Rare Metals', y: parseFloat(metalsValue) },
        { name: 'Stocks', y: parseFloat(stocksValue) },
      ]);
    };

    aggregateData();
  }, []);

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Portfolio Area of investments',
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        depth: 45,
      },
    },
    series: [{
      name: 'Investments',
      data: chartData,
    }],
  };

  return (
    <div className="widget">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PortfolioDonutChart;
