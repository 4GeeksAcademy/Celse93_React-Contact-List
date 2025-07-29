import "./Agenda.css";
import React, { useEffect } from "react";
import { Box, List, Button } from "@mui/material";
import { ContactItem } from "./components/ContactItem";
import { useNavigate } from "react-router";

export const Agenda = ({ user, contacts, setContacts, refreshData }) => {
  let navigate = useNavigate();

  useEffect(refreshData, []);

  console.log(contacts);

  return (
    <>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Add new contact
        </Button>
        <List
          sx={{
            mt: "10px",
            width: "500px",
            bgcolor: "background.paper",
          }}
        >
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              setContacts={setContacts}
              user={user}
              refreshData={refreshData}
            />
          ))}
        </List>
      </Box>
    </>
  );
};
