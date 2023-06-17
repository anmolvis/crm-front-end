import React, { useEffect } from "react";
import { TokenUpdate } from "../../../Utility/TokenUpdate";

const Dashboard = () => {
  useEffect(() => {
    TokenUpdate();
    // Call the data API
  }, []);

  return <p>Dashboard</p>;
};

export default Dashboard;
