import React, { useState } from "react";
import "./CSS/AdminPanel.css";
import Navbar from "./Navbar";
import { Tabs, Tab, AppBar, Box } from "@material-ui/core";
import ProductForm from "./ProductForm";
import TabPanel from "./TabPanel";
import ManageProducts from "./ManageProducts";
import ManageUsers from "./ManageUsers";
function AdminPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Navbar />
      <Box style={{ marginTop: "65px" }}>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          style={{ background: "#f5f5f5" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="simple tabs example"
          >
            <Tab label="Add Products" />
            <Tab label="Manage Products" />
            <Tab label="Manage Users" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ProductForm />
        </TabPanel>
        <TabPanel value={value} index={1} />
        <ManageProducts />
        <TabPanel value={value} index={2}>
          <ManageUsers />
        </TabPanel>
      </Box>
    </>
  );
}

export default AdminPanel;
