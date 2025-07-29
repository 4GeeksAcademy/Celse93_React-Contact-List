import { Box, InputLabel, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { updateContactReq } from "../services/api";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router";

let initialObj = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const UpdateContact = ({ user, refreshData }) => {
  const [inputObj, setInputObj] = useState(initialObj);
  let { contactId } = useParams();
  let navigate = useNavigate();
  let { state } = useLocation();

  useEffect(refreshData, []);

  const updateContact = () => {
    const requestBody = {
      name: inputObj.name ? inputObj.name : state.name,
      phone: inputObj.phone ? inputObj.phone : state.phone,
      email: inputObj.email ? inputObj.email : state.email,
      address: inputObj.address ? inputObj.address : state.address,
    };

    updateContactReq(user, `${contactId}`, requestBody).then(refreshData);

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

  let isInputNameOk =
    inputNameRegex.test(inputObj.name) || inputNameRegex.test(state.name);
  let isInputEmailOk =
    inputEmailRegex.test(inputObj.email) || inputEmailRegex.test(state.email);
  let isInputPhoneOk =
    inputPhoneRegex.test(inputObj.phone) || inputPhoneRegex.test(state.phone);
  let isInputAddressOk =
    inputAddressRegex.test(inputObj.address) ||
    inputAddressRegex.test(state.address);

  let areInputsOk =
    isInputNameOk && isInputEmailOk && isInputPhoneOk && isInputAddressOk;

  const handleOnClick = () => {
    areInputsOk ? updateContact() : alert("Form is incorrect");
    console.log(isInputNameOk);
    console.log(isInputEmailOk);
    console.log(isInputPhoneOk);
    console.log(isInputAddressOk);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          width: "500px",
          bgcolor: "background.paper",
          mt: "10px",
        }}
      >
        <InputLabel>Full Name</InputLabel>
        <TextField
          fullWidth
          label="Full Name"
          id="name"
          defaultValue={state.name}
          onChange={handleOnChangeName}
        />
        <InputLabel>Email</InputLabel>
        <TextField
          fullWidth
          label="Enter email"
          id="email"
          defaultValue={state.email}
          onChange={handleOnChangeEmail}
        />
        <InputLabel>Phone</InputLabel>
        <TextField
          fullWidth
          label="Enter phone"
          id="phone"
          defaultValue={state.phone}
          onChange={handleOnChangePhone}
        />
        <InputLabel>Address</InputLabel>
        <TextField
          fullWidth
          label="Enter address"
          id="address"
          defaultValue={state.address}
          onChange={handleOnChangeAddress}
        />
        <Button variant="contained" onClick={handleOnClick}>
          Update
        </Button>
        <Link to="/">Back to contacts</Link>
      </Box>
    </>
  );
};
