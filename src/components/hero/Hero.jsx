import React, { useState } from "react";
import "./hero.css";
import countries from "../../data/heroData";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";

const Hero = () => {
  const [confirmation, setConfirmation] = useState(false);
  const [open, setOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formTel, setFormTel] = useState("");
  const [formVolume, setFormVolume] = useState("");
  const [formWood, setFormWood] = useState("");
  const [formCountry, setFormCountry] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmationClose = () => {
    setConfirmation(false);
  };

  // ----------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    setConfirmation(true);
  };

  const handleOrder = (e) => {
    if (
      formName === "" ||
      formTel === "" ||
      formVolume === "" ||
      formWood === "" ||
      formCountry === ""
    ) {
      // return;
    } else {
      alert("Thank you, your order submitted successfully.");
    }
  };
  // -------------------------------------

  return (
    <section className="hero">
      <div className="main-container">
        <div className="hero__container">
          <div className="hero__textbox">
            <h1 className="heading-primary">Solid wood products</h1>
            <p className="hero__text">
              Oak, beech, ash from <br /> <strong>600 eur</strong> per m3
            </p>
            <div>
              <button onClick={handleClickOpen} className="btn">
                Order
              </button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle variant="h4">Order form</DialogTitle>
                <DialogContent>
                  <Box
                    onSubmit={handleSubmit}
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "21ch" },
                    }}
                    // noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        required
                        id="outlined-number"
                        label="Full name"
                        type="text"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => {
                          setFormName(e.target.value);
                        }}
                      />
                      <TextField
                        required
                        id="outlined-number"
                        label="Phone number"
                        type="tel"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => {
                          setFormTel(e.target.value);
                        }}
                      />
                    </div>
                    <FormControl
                      sx={{ m: 1, mt: 5, minWidth: 210 }}
                      size="medium"
                    >
                      <InputLabel id="volume-select">Select volume</InputLabel>
                      <Select
                        required
                        labelId="volume-select"
                        id="volume-select"
                        value={formVolume}
                        label="Select volume"
                        onChange={(e) => {
                          setFormVolume(e.target.value);
                        }}
                        autoWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                      </Select>
                      <FormHelperText>Volume, m3</FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ m: 1, mt: 5, minWidth: 210 }}
                      size="medium"
                    >
                      <InputLabel id="wood-select">Select wood</InputLabel>
                      <Select
                        required
                        labelId="wood-select"
                        id="wood-select"
                        value={formWood}
                        label="Select wood"
                        onChange={(e) => {
                          setFormWood(e.target.value);
                        }}
                        autoWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Oak">Oak</MenuItem>
                        <MenuItem value="Beech">Beech</MenuItem>
                        <MenuItem value="Ash">Ash</MenuItem>
                      </Select>
                      <FormHelperText>Wood</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ mt: 5, minWidth: 210 }} size="medium">
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 210 }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 1, flexShrink: 0 } }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            required
                            {...params}
                            label="Choose a country"
                            inputProps={{
                              ...params.inputProps,
                            }}
                            onChange={(e) => {
                              setFormCountry(e.target.value);
                            }}
                          />
                        )}
                      />
                    </FormControl>
                    <DialogActions>
                      <Button sx={{ color: "red" }} onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        color="success"
                        variant="outlined"
                        size="medium"
                        sx={{ fontWeight: 600 }}
                        onClick={handleOrder}
                      >
                        Place order
                      </Button>
                    </DialogActions>
                  </Box>
                </DialogContent>
              </Dialog>
              <Dialog
                open={confirmation}
                onClose={handleConfirmationClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Thank you for your order!"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    className="secondary-text"
                    id="alert-dialog-description"
                  >
                    We will process your order within 3 working day's <br />{" "}
                    Have a nice day!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    color="success"
                    variant="outlined"
                    onClick={handleConfirmationClose}
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className="hero__gallery">
            <div className="hero__gallery--column-left">
              <img src="img/hero/hero-img-2.png" alt="wood stairs" />
            </div>
            <div className="hero__gallery--column-right">
              <img
                src="img/hero/hero-img-1.png"
                alt="human working with wood"
              />
              <img src="img/hero/hero-img-3.png" alt="wood table" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
