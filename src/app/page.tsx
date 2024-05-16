import React from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import Goals from "./components/Goals";
import TransactionHistory from "./components/TransactionHistory";
import OutcomeStatistics from "./components/OutcomeStatistics";
import NewTransaction from "./components/NewTransaction";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Card
            title="cloudcash"
            value="$2850.75"
            cardNumber="5789"
            cardHolder="Mike Smith"
            expiryDate="06/21"
          ></Card>
          <TransactionHistory />
        </div>
        <div>
          <Goals />
          <OutcomeStatistics />
          <NewTransaction />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
