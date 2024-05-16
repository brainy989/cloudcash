import React from "react";

const NewTransaction: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">New Transaction</h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Add new"
          className="p-2 border rounded flex-1"
        />
        <button className="bg-blue-500 text-white p-2 rounded">
          Send the transfer
        </button>
      </div>
    </div>
  );
};

export default NewTransaction;
