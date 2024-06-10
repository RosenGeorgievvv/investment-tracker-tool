import InvestmentCard from "../components/CardBasedPanel";
import InvestmentStatus from "../components/OpenClosedInvest";
import PortfolioDonutChart from "../components/PortfolioPieChart";
import TotalInvestedChart from "../components/TotalInvest";

const Investments = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-4 p-6 bg-white border rounded-lg shadow-md">
        <TotalInvestedChart />
      </div>
      <div className="mb-4 p-6 bg-white border rounded-lg shadow-md">
        <InvestmentStatus />
      </div>
      <div className="mb-4 p-6 bg-white border rounded-lg shadow-md">
        <PortfolioDonutChart />
      </div>
      <div className="mb-4 p-6 bg-white border rounded-lg shadow-md">
        <InvestmentCard />
      </div>
    </div>
  );
};

export default Investments;
