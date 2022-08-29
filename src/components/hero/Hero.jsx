import React from "react";
import "./hero.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormHelperText from "@mui/material/FormHelperText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";

const Hero = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [volume, setVolume] = React.useState("");

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };
  const [wood, setWood] = React.useState("");

  const handleWoodChange = (event) => {
    setWood(event.target.value);
  };

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
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "21ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-number"
                        label="Full name"
                        type="text"
                        required
                        InputLabelProps={{
                          shrink: true,
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
                      />
                    </div>
                    <FormControl
                      sx={{ m: 1, mt: 5, minWidth: 210 }}
                      size="medium"
                    >
                      <InputLabel id="volume-select">Select volume</InputLabel>
                      <Select
                        labelId="volume-select"
                        id="volume-select"
                        value={volume}
                        label="Select volume"
                        onChange={handleVolumeChange}
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
                        labelId="wood-select"
                        id="wood-select"
                        value={wood}
                        label="Select wood"
                        onChange={handleWoodChange}
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
                            {...params}
                            label="Choose a country"
                            inputProps={{
                              ...params.inputProps,
                              // autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </FormControl>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button sx={{ color: "red" }} onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    color="success"
                    variant="outlined"
                    size="medium"
                    sx={{ fontWeight: 600 }}
                    onClick={handleClose}
                  >
                    Place order
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

const countries = [
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "FI", label: "Finland", phone: "358" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IN", label: "India", phone: "91" },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "LI", label: "Liechtenstein", phone: "423" },

  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "PL", label: "Poland", phone: "48" },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SI", label: "Slovenia", phone: "386" },
];
