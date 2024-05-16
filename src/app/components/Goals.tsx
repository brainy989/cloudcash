import React from "react";

const goals = [
  { title: "Holidays", amount: "$550", date: "12/20/20" },
  { title: "Renovation", amount: "$200", date: "12/20/20" },
  { title: "Xbox", amount: "$820", date: "12/20/20" },
];

const Goals: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Goals</h2>
      <div className="flex space-x-4">
        {goals.map((goal, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold">{goal.title}</h3>
            <p>{goal.amount}</p>
            <p className="text-sm text-gray-500">{goal.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;