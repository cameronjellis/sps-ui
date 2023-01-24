import React from "react";
const { getMicroList } = require("../utils/utils");

const MicroserviceList = () => {
  const response = getMicroList();
  //   console.log(response);
  return (
    <div>
      <h3>MicroserviceList</h3>
    </div>
  );
};

export default MicroserviceList;
