import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./UserAdd.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/UserReducer";

const InputStyle = {
  outlineColor: "aqua ",
  padding: "6px 6px",
  borderRadius: "5px",
  border: "3px solid #E2E8F0",
  marginTop: "10px",
  width: "92%",
};

export default function UserAdd() {
  const [status, setStatus] = useState("Administrator");
  const [color, setColor] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleChangeStatus = (value) => {
    setStatus(value);
    setColor(!color);
  };

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name,
        email,
        company,
        lastName,
        status: status === "Administrator" ? true : false,
      })
    );
  };
  return (
    <Box
      sx={{ borderRight: "1px solid #E2E8F0", height: "93vh", width: "100%" }}
    >
      <Typography
        sx={{ color: "#0F172A", fontFamily: "Inter", fontSize: "20px" }}
      >
        Add Customer
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
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <label htmlFor="First name">Last Name</label> <br />
            <input
              style={InputStyle}
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <label htmlFor="First name">Company</label> <br />
          <input
            style={InputStyle}
            type="text"
            required
            onChange={(e) => setCompany(e.target.value)}
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
          <input style={InputStyle} type="email" required onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <label htmlFor="Password">Password</label> <br />
          <input style={InputStyle} type="password" required />
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, width: "96%" }}
          type="submit"
        >
          Save
        </Button>
      </form>
    </Box>
  );
}
