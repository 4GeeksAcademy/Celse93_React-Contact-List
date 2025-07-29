import { Routes, Route } from "react-router";
import React, { useState } from "react";
import { NewContact } from "./components/NewContact";
import { Agenda } from "./Agenda";
import { UpdateContact } from "./components/UpdateContact";
import { getContactsReq } from "./services/api";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [user] = useState("celse");

  const refreshData = () => {
    getContactsReq(user).then((data) => {
      setContacts(data);
    });
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Agenda
              refreshData={refreshData}
              user={user}
              contacts={contacts}
              setContacts={setContacts}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <NewContact
              refreshData={refreshData}
              user={user}
              setContacts={setContacts}
            />
          }
        />
        <Route
          path="/contact/update/:contactId"
          element={
            <UpdateContact
              refreshData={refreshData}
              user={user}
              contacts={contacts}
              setContacts={setContacts}
            />
          }
        />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </>
  );
};
