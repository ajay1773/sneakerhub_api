import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Navbar from "./Navbar";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import { Button } from "@material-ui/core";
import Loader from "./Loader";
function ManageUsers() {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);
  const [reload, setreload] = useState(0);
  const deleteUser = (id) => {
    Axios.get(`https://sneakerhubapi.herokuapp.com/user/admin/deleteUser/${id}`)
      .then((res) => {
        console.log(res.status);
        setreload((prevState) => prevState + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Axios.get("https://sneakerhubapi.herokuapp.com/user")
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
                <TableCell style={{ fontWeight: "900" }} align="center">
                  Name
                </TableCell>
                <TableCell style={{ fontWeight: "900" }}>Email</TableCell>
                <TableCell style={{ fontWeight: "900" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={`${item._id}${Math.random() * 100}`}>
                  <TableCell key={`${item._id}${Math.random() * 100}`}>
                    {index + 1}
                  </TableCell>
                  <TableCell
                    align="center"
                    key={`${item._id}${Math.random() * 100}`}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    key={`${item._id}${Math.random() * 100}`}
                  >{`${item.email}`}</TableCell>
                  <TableCell key={`${item._id}${Math.random() * 100}`}>
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={item.isAdmin ? true : false}
                      onClick={() => deleteUser(item._id)}
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

export default ManageUsers;
