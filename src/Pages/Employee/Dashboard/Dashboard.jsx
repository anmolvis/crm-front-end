import React, { useEffect } from "react";
import { TokenUpdate } from "../../../Utility/TokenUpdate";
import LoggedInWrapper from "../../../Common/Component/Wrapper/LoggedInWrapper/LoggedInWrapper";
import ListingHeader from "../../../Common/Component/ListingHeader/ListingHeader";
import DateDropDown from "../../../Common/Component/DateDropDown/DateDropDown";
import FilterWrapper from "../../../Common/Component/FilterWrapper/FilterWrapper";

const Dashboard = () => {
  useEffect(() => {
    TokenUpdate();
    // Call the data API
  }, []);

  return (
    <LoggedInWrapper>
      <div className="dashboard-container">
        <ListingHeader title="Dashboard" />

        <FilterWrapper>
          <DateDropDown />
        </FilterWrapper>
      </div>
    </LoggedInWrapper>
  );
};

export default Dashboard;
