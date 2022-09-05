import React, { useState } from "react";
import "./advantages.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Advantages = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="advantages">
      <div className="main-container">
        <h2 className="heading-primary">
          Advantages <br /> working with us
        </h2>
        <div className="advantages__content">
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/WNpAn_KtVGw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="advantages__text-column">
            <p className="secondary-text">In-house carpentry production</p>
            <p className="secondary-text">
              We only treat wood with environmentally friendly and safe products
            </p>
            <p className="secondary-text">
              Prices from the manufacturer, no extra charges
            </p>
          </div>
        </div>
        <div>
          <button onClick={handleClickOpen} className="btn">
            Receive a consultation
          </button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Receive a callback.</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please anter your phone number, and we will call you soon!
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Phone number"
                type="tel"
                fullWidth
                required
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button sx={{ color: "red" }} onClick={handleClose}>
                Cancel
              </Button>
              <Button color="success" variant="outlined" onClick={handleClose}>
                Request
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
