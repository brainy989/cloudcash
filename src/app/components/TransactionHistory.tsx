import React from "react";
import TransactionItem from "./TransactionItem";

const transactions = [
  {
    receiver: "Tesco Market",
    type: "Shopping",
    date: "13 Dec 2020",
    amount: "$75.67",
    iconType: "cart",
  },
  {
    receiver: "ElectroMen Market",
    type: "Shopping",
    date: "14 Dec 2020",
    amount: "$250.00",
    iconType: "truck",
  },
  {
    receiver: "Fiorgio Restaurant",
    type: "Food",
    date: "07 Dec 2020",
    amount: "$19.05",
    iconType: "feather",
  },
  {
    receiver: "John Mathew Kayne",
    type: "Sport",
    date: "06 Dec 2020",
    amount: "$350",
    iconType: "user",
  },
  {
    receiver: "Ann Marlin",
    type: "Shopping",
    date: "31 Nov 2020",
    amount: "$430",
    iconType: "user",
  },
];

const TransactionHistory: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-custom-xs shadow-custom-sm shadow-custom-lg">
      <h2 className="text-lg text-bauhaus font-semibold mb-4">
        Transaction history
      </h2>
      <ul className="space-y-2">
        <li className="text-bauhaus-light text-xs grid grid-cols-12">
          <span className="col-span-4">Receiver</span>
          <span className="col-span-3">Type</span>
          <span className="col-span-3">Date</span>
          <span className="col-span-2 text-right">Amount</span>
        </li>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            index={index}
            receiver={transaction.receiver}
            type={transaction.type}
            date={transaction.date}
            amount={transaction.amount}
            iconType={
              transaction.iconType as "cart" | "truck" | "feather" | "user"
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
