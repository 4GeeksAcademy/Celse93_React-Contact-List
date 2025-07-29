import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import {
  Box,
  ListItemAvatar,
  Avatar,
  ListItem,
  Typography,
  Divider,
  Button,
  Modal,
} from "@mui/material";
import { deleteContactReq } from "../services/api";
import { useNavigate } from "react-router";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "text.primary",
};

export const ContactItem = ({ user, contact, refreshData }) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const deleteContact = () => {
    deleteContactReq(user, contact).then(refreshData);
  };

  return (
    <>
      <ListItem sx={{ alignItems: "center" }} alignItems="flex-start">
        <Box>
          <ListItemAvatar>
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              alt="Remy Sharp"
              src="https://storage.googleapis.com/breathecode-asset-images/5318bde604cf5c915f94897a71b49ab2523101322ea21cb046db1e67c24fa3be.png?raw=true"
            />
          </ListItemAvatar>
        </Box>
        <Box sx={{ width: "100%", ml: "10px" }}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "text.primary", width: "100%" }}
              >
                {contact.name}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <EditIcon
                  sx={{ color: "text.primary", mr: "10px" }}
                  onClick={() => {
                    navigate(`/contact/update/${contact.id}`, {
                      state: contact,
                    });
                  }}
                />{" "}
                <DeleteIcon
                  sx={{ color: "text.primary" }}
                  onClick={handleOpen}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "25px",
                  alignItems: "center",
                }}
              >
                <PhoneIcon sx={{ color: "text.primary", fontSize: "medium" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "text.primary", width: "100%", ml: "5px" }}
                >
                  {contact.phone}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "25px",
                  alignItems: "center",
                }}
              >
                <EmailIcon sx={{ color: "text.primary", fontSize: "medium" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "text.primary", width: "100%", ml: "5px" }}
                >
                  {contact.email}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "25px",
                  alignItems: "center",
                }}
              >
                <HomeIcon sx={{ color: "text.primary", fontSize: "medium" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "text.primary", width: "100%", ml: "5px" }}
                >
                  {contact.address}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ListItem>

      <Divider variant="inset" component="li" />

      <React.Fragment>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6">
              Are you sure you want to delete this contact?
            </Typography>
            <Box>
              <Button sx={{ mt: "10px" }} onClick={handleClose}>
                Cancel
              </Button>
              <Button sx={{ mt: "10px" }} onClick={deleteContact}>
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>
      </React.Fragment>
    </>
  );
};
