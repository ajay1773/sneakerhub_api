import React from "react";

function TabPanel(props) {
  const { children, index, value } = props;
  console.log(index, value);
  return <div>{value === index && <div>{children}</div>}</div>;
}

export default TabPanel;
