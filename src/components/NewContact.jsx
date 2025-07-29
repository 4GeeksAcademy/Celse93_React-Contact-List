import { Box, InputLabel, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { addContactReq } from "../services/api";
import { Link } from "react-router";
import { useNavigate } from "react-router";

let initialObj = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const NewContact = ({ user, refreshData }) => {
  const [inputObj, setInputObj] = useState(initialObj);
  let navigate = useNavigate();

  const addContact = () => {
    const requestBody = {
      name: inputObj.name,
      phone: inputObj.phone,
      email: inputObj.email,
      address: inputObj.address,
    };

    addContactReq(user, requestBody).then(refreshData);

    setInputObj({ name: "", email: "", phone: "", address: "" });

    navigate("/");
  };

  const handleOnChangeName = (e) => {
    setInputObj({ ...inputObj, name: e.target.value });
  };

  const handleOnChangeEmail = (e) => {
    setInputObj({ ...inputObj, email: e.target.value });
  };

  const handleOnChangePhone = (e) => {
    setInputObj({ ...inputObj, phone: e.target.value });
  };

  const handleOnChangeAddress = (e) => {
    setInputObj({ ...inputObj, address: e.target.value });
  };

  const inputNameRegex = /^[a-zA-Z]*$/;
  const inputEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const inputPhoneRegex = /^[0-9]+$/;
  const inputAddressRegex = /^[A-Za-z0-9]+$/;

  const areInputsOk = () => {
    if (
      inputNameRegex.test(inputObj.name) &&
      inputEmailRegex.test(inputObj.email) &&
      inputPhoneRegex.test(inputObj.phone) &&
      inputAddressRegex.test(inputObj.address)
    )
      return true;
    if (
      inputNameRegex.test(state.name) &&
      inputPhoneRegex.test(state.phone) &&
      inputEmailRegex.test(state.email) &&
      inputAddressRegex.test(state.address)
    )
      return true;
    else return false;
  };

  const handleOnClick = () => {
    areInputsOk ? addContact() : alert("Form is incorrect");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          width: "500px",
          bgcolor: "background.paper",
          my: "10px",
        }}
      >
        <InputLabel>Full Name</InputLabel>
        <TextField
          fullWidth
          sx={{ mb: 1 }}
          label="Full Name"
          id="name"
          value={inputObj.name}
          onChange={handleOnChangeName}
        />
        <InputLabel>Email</InputLabel>
        <TextField
          fullWidth
          sx={{ mb: 1 }}
          label="Enter email"
          id="email"
          value={inputObj.email}
          onChange={handleOnChangeEmail}
        />
        <InputLabel>Phone</InputLabel>
        <TextField
          fullWidth
          sx={{ mb: 1 }}
          label="Enter phone"
          id="phone"
          value={inputObj.phone}
          onChange={handleOnChangePhone}
        />
        <InputLabel>Address</InputLabel>
        <TextField
          fullWidth
          sx={{ mb: 1 }}
          label="Enter address"
          id="address"
          value={inputObj.address}
          onChange={handleOnChangeAddress}
        />
        <Button sx={{ mr: 1 }} variant="contained" onClick={handleOnClick}>
          Save
        </Button>
        <Link to="/">Back to contacts</Link>
      </Box>
    </>
  );
};
