import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";

import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";

export default function UserTable() {
  const userData = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <Box>
      <Typography
        sx={{ color: "#0F172A", fontFamily: "Inter", fontSize: "20px" }}
      >
        Customers
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ width: "100%", border: "none" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Admin</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Typography> {row.name}</Typography>
                      <Typography> {row.lastName}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">{row.company}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  <button
                    style={{
                      width: "70px",
                      height: "30px",
                      border: "none",
                      background: row.status === true ? "blue" : "#E2E8F0",
                      borderRadius: "6px",
                    }}
                  ></button>
                </TableCell>
                <TableCell align="center">
                  <Link to={`/edit/${row.id}`}>
                    <button className="action">
                      <Edit />
                    </button>
                  </Link>

                  <button
                    className="action"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(row.id)}
                  >
                    <Delete />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
