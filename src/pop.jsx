import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPopup = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleResponse = (response) => {
    setOpen(false);
    if (response === "yes") {
      navigate("/Booking");
    } else {
      navigate("/BookingsExternal");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        style: {
          borderRadius: "20px",
          textAlign: "center",
          padding: "20px",
        },
      }}
    >
      <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Have you ever been a part of HITAM (Student/Staff)?
      </DialogTitle>
      <DialogContent>
        <Typography align="center" variant="body1" gutterBottom>
          Select an option below to continue.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleResponse("yes")}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleResponse("no")}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LandingPopup;
