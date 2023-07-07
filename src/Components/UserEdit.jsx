import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./UserAdd.css";
import { useDispatch, useSelector } from "react-redux";
import {  updateUser } from "../redux/UserReducer";
import { useNavigate, useParams } from "react-router-dom";
import UserTable from "./UserTable";

const InputStyle = {
  outlineColor: "aqua ",
  padding: "6px 6px",
  borderRadius: "5px",
  border: "3px solid #E2E8F0",
  marginTop: "10px",
  width: "92%",
};

export default function EditUser() {
  const [color, setColor] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const users = useSelector((state) => state.users);

  const editUser = users.filter((f) => f.id == id);

  const { email, name, company, status, lastName } = editUser[0];

  const [editName, setEditName] = useState(name);
  const [editLastName, setLastEditName] = useState(lastName);
  const [editEmail, setEditEmail] = useState(email);
  const [editCompany, setEditCompany] = useState(company);

  const handleChangeStatus = (value) => {
    setColor(!color);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: editName,
        lastName: editLastName,
        email: editEmail,
        company: editCompany,
        status: status === "Administrator" ? true : false,
      })
    );
    navigate("/");
  };
  return (
    <Box>
      <Grid container>
        <Grid item xl={3.5} lg={3.5} md={3.5} sm={3.5} sx={{ p: 3 }}>
          <Box
            sx={{
              borderRight: "1px solid #E2E8F0",
              height: "93vh",
              width: "100%",
            }}
          >
            <Typography
              sx={{ color: "#0F172A", fontFamily: "Inter", fontSize: "20px" }}
            >
              Edit Customer
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  mt: 4,
                  justifyContent: "space-between",
                  width: "96%",
                }}
              >
                <Box>
                  <label htmlFor="First name">First Name</label> <br />
                  <input
                    style={InputStyle}
                    type="text"
                    value={editName}
                    required
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </Box>
                <Box>
                  <label htmlFor="First name">Last Name</label> <br />
                  <input
                    style={InputStyle}
                    type="text"
                    required
                    value={editLastName}
                    onChange={(e) => setLastEditName(e.target.value)}
                  />
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <label htmlFor="First name">Company</label> <br />
                <input
                  style={InputStyle}
                  type="text"
                  required
                  value={editCompany}
                  onChange={(e) => setEditCompany(e.target.value)}
                />
              </Box>
              <Box sx={{ mt: 2, width: "96%" }}>
                <Typography>Status</Typography>
                <Box
                  sx={{
                    background: "#E2E8F0",
                    padding: "4px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    onClick={() => handleChangeStatus("Customer")}
                    className="status"
                    style={{ background: color === true ? "white" : "none" }}
                  >
                    Customer
                  </p>
                  <p
                    onClick={() => handleChangeStatus("Administrator")}
                    className="status"
                    style={{ background: color === false ? "white" : "none" }}
                  >
                    Administrator
                  </p>
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <label htmlFor="Email">Email</label> <br />
                <input
                  style={InputStyle}
                  type="email"
                  required
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <label htmlFor="Password">Password</label> <br />
                <input
                  style={InputStyle}
                  type="password"
                  required
                  minLength={8}
                />
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, width: "96%" }}
                type="submit"
              >
                Update
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid xl={8} lg={8} md={7} sm={7} sx={{ p: 3 }}>
          <UserTable />
        </Grid>
      </Grid>
    </Box>
  );
}
