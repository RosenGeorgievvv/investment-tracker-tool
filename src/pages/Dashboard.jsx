import OpenClosedInvestmentsChart from "../components/OpenClosedInvest";
import PortfolioDonutChart from "../components/PortfolioPieChart";
import TotalInvestedChart from "../components/TotalInvest";


const Investments = () => {
  return (
    <div>
      <TotalInvestedChart />
      <OpenClosedInvestmentsChart />
      <PortfolioDonutChart />
    </div>
  );
};

export default Investments;
