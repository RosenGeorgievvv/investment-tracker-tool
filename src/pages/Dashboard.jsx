import OpenClosedInvestmentsChart from "../components/OpenClosedInvest";
import TotalInvestedChart from "../components/TotalInvest";


const Investments = () => {
  return (
    <div>
      <TotalInvestedChart />
      <OpenClosedInvestmentsChart />
    </div>
  );
};

export default Investments;
