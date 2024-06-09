import React, { useState } from "react";
import { marketPrices } from "../data/investments.js";

const InvestmentCard = () => {
  const initialInvestments = marketPrices.reduce((acc, investment) => {
    const transactions = investment.transactions.map((transaction, index) => ({
      ...transaction,
      id: `${investment.name}-${index}`,
      name: investment.name,
      type: investment.iconUrl ? "Company" : "Commodity",
      status: transaction.open ? "Open" : "Closed",
    }));
    return acc.concat(transactions);
  }, []);

  const [investments, setInvestments] = useState(initialInvestments);
  const [newInvestment, setNewInvestment] = useState({
    type: "",
    date: "",
    name: "",
    value: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInvestment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newInvestment.type ||
      !newInvestment.date ||
      !newInvestment.name ||
      !newInvestment.value
    ) {
      alert("All fields are required!");
      return;
    }

    setInvestments((prev) => [
      ...prev,
      {
        ...newInvestment,
        id: `new-${prev.length}`,
        status: "Open",
        value: parseFloat(newInvestment.value),
      },
    ]);
    setNewInvestment({ type: "", date: "", name: "", value: "" });
  };

  const closeInvestment = (id) => {
    setInvestments((prev) =>
      prev.map((investment) =>
        investment.id === id ? { ...investment, status: "Closed" } : investment
      )
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Investment Management
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Investment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type of Investment
            </label>
            <input 
              type="text"
              name="type"
              value={newInvestment.type}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Investment Date
            </label>
            <input
              type="date"
              name="date"
              value={newInvestment.date}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Investment Name
            </label>
            <input
              type="text"
              name="name"
              value={newInvestment.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Investment Value
            </label>
            <input
              type="number"
              name="value"
              value={newInvestment.value}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Investment
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-bold">{investment.name}</h3>
              <p className="text-sm text-gray-700">{investment.type}</p>
              <p className="text-sm text-gray-700">Date: {investment.date}</p>
              <p className="text-sm text-gray-700">
                Value: ${investment.value}
              </p>
              <p className="text-sm text-gray-700">
                Status: {investment.status}
              </p>
            </div>
            {investment.status === "Open" && (
              <button
                onClick={() => closeInvestment(investment.id)}
                className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Close Investment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentCard;
