import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from '../data/investments.js';

const OpenClosedInvestmentsChart = () => {
  const [openInvestments, setOpenInvestments] = useState(0);
  const [closedInvestments, setClosedInvestments] = useState(0);

  useEffect(() => {
    if (data && data.marketPrices) {

      let openCount = 0;
      let closedCount = 0;

      data.marketPrices.forEach(market => {
        if (market.transactions) {
          market.transactions.forEach(transaction => {
            if (transaction.open) {
              openCount++;
            } else {
              closedCount++;
            }
          });
        }
      });
      setOpenInvestments(openCount);
      setClosedInvestments(closedCount);
    } else {
      console.error('Data or marketPrices is undefined');
    }
  }, []);

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Open and Closed Investments',
    },
    xAxis: {
      categories: ['Open', 'Closed'],
      title: {
        text: 'Investment Status',
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Investments',
      }
    },
    series: [
      {
        name: 'Investments',
        data: [openInvestments, closedInvestments],
      },
    ],
  };

  return (
    <div className="widget">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OpenClosedInvestmentsChart;