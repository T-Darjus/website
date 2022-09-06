import React, { useState } from "react";
import "./questions.css";
import { send } from "emailjs-com";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Questions = () => {
  //  form values
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");
  // email send
  const [toSend, setToSend] = useState({
    from_name: "",
    from_tel: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send("service_8rr5c1p", "template_ixzumjt", toSend, "FXEpKT850edlSDYfP")
      .then((response) => {
        return response.status;
      })
      .catch((err) => {
        return err;
      });
  };

  // dialog popup
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (firstName === "" || phoneNumber === "" || customerMessage === "") {
      return;
    } else setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFirstName("");
    setPhoneNumber("");
    setCustomerMessage("");
    setToSend({
      from_name: "",
      from_tel: "",
      message: "",
    });
  };

  return (
    <section className="questions">
      <div className="main-container">
        <h2 className="heading-primary">Any questions?</h2>
        <div className="questions__content">
          <div className="questions__form">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="Your name"
                required
                value={firstName}
                onChange={(event) => {
                  toSend.from_name = event.target.value;
                  setFirstName(event.target.value);
                }}
              />
              <input
                type="tel"
                name="from_tel"
                id="tel"
                placeholder="Your telephone number"
                required
                value={phoneNumber}
                onChange={(event) => {
                  toSend.from_tel = event.target.value;
                  setPhoneNumber(event.target.value);
                }}
              />
              <textarea
                name="message"
                id="question"
                cols="30"
                rows="6"
                placeholder="You question"
                required
                value={customerMessage}
                onChange={(event) => {
                  toSend.message = event.target.value;
                  setCustomerMessage(event.target.value);
                }}
              ></textarea>
              <div>
                <button
                  id="btn-questions"
                  onClick={handleClickOpen}
                  type="submit"
                  className="btn"
                >
                  Send
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Thank you for your question!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      className="secondary-text"
                      id="alert-dialog-description"
                    >
                      We will contact you within 1 working day. <br /> Have a
                      nice day!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      color="success"
                      variant="outlined"
                      onClick={handleClose}
                    >
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </form>
          </div>
          <div className="questions__text">
            <p className="secondary-text">
              Write to us and we will be sure to answer all your questions and
              give you a comprehensive consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
