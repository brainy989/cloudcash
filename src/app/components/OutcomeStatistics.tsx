import React from "react";
import OutcomeStatisticsItem from "./OutcomeStatisticsItem";

const OutcomeStatistics: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg text-bauhaus font-semibold mb-4">
        Outcome Statistics
      </h2>
      <div className="space-y-2 flex flex-col gap-3">
        <OutcomeStatisticsItem category="Shopping" amount="52%" iconType="cartColored" barColor="#FCAE73" />
        <OutcomeStatisticsItem category="Electronics" amount="21%" iconType="truckColored" barColor="#209D43" />
        <OutcomeStatisticsItem category="Travels" amount="74%" iconType="planeColored" barColor="#70A6E8" />
      </div>
    </div>
  );
};

export default OutcomeStatistics;
