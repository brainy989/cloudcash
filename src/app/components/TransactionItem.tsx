import React from "react";
import { CartIcon, TruckIcon, FeatherIcon, UserIcon } from "./icons";

const iconsMap = {
  cart: <CartIcon />,
  truck: <TruckIcon />,
  feather: <FeatherIcon />,
  user: <UserIcon />,
};

interface TransactionItemProps {
  index: any;
  receiver: string;
  type: string;
  date: string;
  amount: string;
  iconType: "cart" | "truck" | "feather" | "user";
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  index,
  receiver,
  type,
  date,
  amount,
  iconType,
}) => {
  return (
    <li
      key={index}
      className="grid grid-cols-12 text-xs border-[#ECECEC] border-b-[1px] py-2"
    >
      <span className="col-span-4 text-bauhaus flex items-center gap-2">
        <div className="bg-[#EFEFEF] p-1 rounded-[6px]">
          {iconsMap[iconType]}
        </div>
        {receiver}
      </span>
      <span className="col-span-3 text-paternoster">{type}</span>
      <span className="col-span-3 text-paternoster">{date}</span>
      <span className="col-span-2 text-bauhaus font-bold text-right">
        {amount}
      </span>
    </li>
  );
};

export default TransactionItem;