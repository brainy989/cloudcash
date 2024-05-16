import React from "react";
import { CartColoredIcon, TruckColoredIcon, PlaneColoredIcon } from "./icons";

const iconsMap = {
  cartColored: <CartColoredIcon />,
  truckColored: <TruckColoredIcon />,
  planeColored: <PlaneColoredIcon />,
};

interface OutcomeStatisticsItemProps {
  category: string;
  amount: string;
  barColor: string;
  iconType: "cartColored" | "truckColored" | "planeColored";
}

const OutcomeStatisticsItem: React.FC<OutcomeStatisticsItemProps> = ({
  category,
  amount,
  barColor,
  iconType,
}) => {
  return (
    <div className="flex justify-between gap-4 items-center">
      {iconsMap[iconType]}
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 w-full h-2 rounded">
            <div
              className="h-2 rounded"
              style={{ width: amount, backgroundColor: barColor }}
            ></div>
          </div>
          <span className="text-paternoster-dark font-semibold text-xl leading-5">
            {amount}
          </span>
        </div>
        <span className="text-bauhaus-light text-xs leading-3">{category}</span>
      </div>
    </div>
  );
};

export default OutcomeStatisticsItem;
