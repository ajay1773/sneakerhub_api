import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import "./CSS/AdminPanel.css";
import Navbar from "./Navbar";
import Loader from "./Loader";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import { Button } from "@material-ui/core";
function ManageProducts() {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);
  const [reload, setreload] = useState(0);
  const deleteProduct = (_id) => {
    Axios.get(`https://sneakerhubapi.herokuapp.com/admin/deleteProduct/${_id}`)
      .then((res) => {
        console.log(res.status);
        setreload((prevState) => prevState + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Axios.get("https://sneakerhubapi.herokuapp.com/products")
      .then((res) => {
        setData(res.data);
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  }, [reload]);
  return (
    <>
      <Navbar />
      {loader ? (
        <Loader />
      ) : (
        <Paper style={{ marginTop: "65px" }}>
          <Table>
            <TableHead>
              <TableRow style={{ background: "#f0ffff" }}>
                <TableCell style={{ fontWeight: "900" }}>S No:</TableCell>
                <TableCell
                  style={{ fontWeight: "900" }}
                  align="center"
                ></TableCell>
                <TableCell style={{ fontWeight: "900" }} align="center">
                  Name
                </TableCell>
                <TableCell style={{ fontWeight: "900" }}>Price</TableCell>
                <TableCell style={{ fontWeight: "900" }}>Brand</TableCell>
                <TableCell style={{ fontWeight: "900" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell key={`${item._id}${Math.random() * 100}`}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="right" key={item._id}>
                    <img
                      src={item.imageURL[0].IMG_URL}
                      className="img"
                      alt="..."
                    />{" "}
                  </TableCell>
                  <TableCell
                    align="center"
                    key={`${item._id}${Math.random() * 100}`}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    key={`${item._id}${Math.random() * 100}`}
                  >{`$${item.price}`}</TableCell>
                  <TableCell key={`${item._id}${Math.random() * 100}`}>
                    {item.brand}
                  </TableCell>
                  <TableCell key={`${item._id}${Math.random() * 100}`}>
                    <Button
                      variant="contained"
                      onClick={() => deleteProduct(item._id)}
                      color="secondary"
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
}

export default ManageProducts;
