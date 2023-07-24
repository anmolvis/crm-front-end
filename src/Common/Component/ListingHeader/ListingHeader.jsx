import React from "react";
import "./ListingHeader.scss";

const ListingHeader = ({ title }) => {
  return (
    <div className="listing-header">
      <h3>{title}</h3>
    </div>
  );
};

export default ListingHeader;
