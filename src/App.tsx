import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Box, TextField } from "@mui/material";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import { IoCardOutline } from "react-icons/io5";
import img1 from "./img1.png";
import img2 from "./logo.png";

import img3 from "./bg.webp";
import img4 from "./Group.png";
import "./App.css";

const countries = ["United States", "Canada", "Mexico"];

const defaultCards = [
  {
    id: 1,
    cardHolderName: "Noman Manzoor",
    cardNumber: "XXXX XXXX XXXX 2345",
    expiryDate: "02/30",
    cardType: "VISA",
  },
  {
    id: 2,
    cardHolderName: "Noman Manzoor",
    cardNumber: "XXXX XXXX XXXX 2345",
    expiryDate: "02/30",
    cardType: "VISA",
  },
  {
    id: 3,
    cardHolderName: "Noman Manzoor",
    cardNumber: "XXXX XXXX XXXX 2345",
    expiryDate: "02/30",
    cardType: "Finacial",
  },
  {
    id: 4,
    cardHolderName: "Noman Manzoor",
    cardNumber: "XXXX XXXX XXXX 2345",
    expiryDate: "02/30",
    cardType: "VISA",
  },
  {
    id: 5,
    cardHolderName: "Noman Manzoor",
    cardNumber: "XXXX XXXX XXXX 2345",
    expiryDate: "02/30",
    cardType: "VISA",
  },
  {
    id: 6,
    cardHolderName: "Noman Manzoor",
    cardNumber: "XXXX XXXX XXXX 2345",
    expiryDate: "02/30",
    cardType: "VISA",
  },
];

const App = () => {
  const [name, setName] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("");
  const [cards, setCards] = useState(defaultCards);
  const [openPage, setOpenPage] = useState(false);
  const [myCards, SetMyCards] = useState(false);

  const handleNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };

  const handlePaymentDetailsChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPaymentDetails(event.target.value);
  };

  const handleCvvChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCvv(event.target.value);
  };

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setCountry(event.target.value);
  };

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      cardHolderName: name,
      cardNumber: paymentDetails,
      expiryDate: "02/30",
      cardType: "VISA",
    };

    setCards([...cards, newCard]);
    setName("");
    setPaymentDetails("");
    setCvv("");
    setCountry("");
    SetMyCards(true);
  };

  const handleDeleteCard = (cardId: number) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: 4 }}>
        <Box>
          <img src={img2} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "511px",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              border: " 1px solid #834CFF",
              bgcolor: "#834CFF1A",
              display: "flex",
              alignContent: "flex-start",
              justifyContent: "center",
              textAlign: "left",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "249px",
              height: "88px",
              borderRadius: "12px",
              fontSize: "16px",
              color: "Black",
              gap: 1,
              padding: 2,
            }}
            onClick={() => SetMyCards(false)}
          >
            <IoCardOutline />
            New Credit Card
          </Button>
          <Button
            sx={{
              border: " 1px solid #834CFF",
              bgcolor: "#834CFF1A",
              display: "flex",
              alignContent: "flex-start",
              justifyContent: "center",
              textAlign: "left",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "249px",
              height: "88px",
              borderRadius: "12px",
              fontSize: "16px",
              color: "Black",
              gap: 1,
              padding: 2,
            }}
            onClick={() => SetMyCards(true)}
          >
            <IoCardOutline />
            My Cards
          </Button>
        </Box>
      </Box>
      <Box sx={{}}>
        {!myCards && (
          <Box sx={{ display: "flex", padding: 4 }}>
            <Box sx={{ width: "511px" }}>
              <Typography variant="h5" gutterBottom>
                Add New Card
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: "#707F8F" }}
              >
                Do more with unlimited blocks, files, automations &
                integrations.
              </Typography>
              <Typography sx={{ marginTop: 2, color: "#707F8F" }}>
                Who is
              </Typography>
              <TextField
                label="Full Name"
                value={name}
                onChange={handleNameChange}
                fullWidth
                margin="normal"
              />
              <Typography sx={{ marginTop: 2, color: "#707F8F" }}>
                Payment Details
              </Typography>
              <TextField
                label="Card Number"
                value={paymentDetails}
                onChange={handlePaymentDetailsChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="CVV"
                value={cvv}
                onChange={handleCvvChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country-select"
                  value={country}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Grid sx={{ display: "flex", marginTop: 4 }} spacing={2} gap={1}>
                <Grid item>
                  <Button
                    sx={{
                      bgcolor: "#F2F5F7",
                      display: "flex",
                      // alignContent: "flex-start",
                      justifyContent: "center",
                      textAlign: "left",
                      flexDirection: "column",
                      // alignItems: "flex-start",
                      width: "252px",
                      height: "56px",
                      borderRadius: "12px",
                      fontSize: "16px",
                      color: "Black",
                      gap: 1,
                      padding: 2,
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      bgcolor: "#834CFF",
                      display: "flex",
                      // alignContent: "flex-start",
                      justifyContent: "center",
                      textAlign: "left",
                      flexDirection: "column",
                      // alignItems: "flex-start",
                      width: "252px",
                      height: "56px",
                      borderRadius: "12px",
                      fontSize: "16px",
                      color: "Black",
                      gap: 1,
                      padding: 2,
                    }}
                    onClick={handleAddCard}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
              <Typography gutterBottom sx={{ mt: 2, color: "#707F8F" }}>
                By providing your card information, you allow us to charge your
                card for future payments in accordance with their terms.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "absolute",
                // bottom: "1%",
                top: "12%",
                right: "9%",
              }}
            >
              <img src={img1} alt="" />
            </Box>
          </Box>
        )}
        {myCards && (
          <Box sx={{ padding: 4 }}>
            <Typography variant="h5" gutterBottom>
              My Cards
            </Typography>
            <Box className="cont3" sx={{ display: "flex", width: "1400px" }}>
              {cards.map((card) => (
                <Box
                  className="cards1"
                  sx={{
                    color: "white",
                    display: "flex",
                    width: "385px",
                    padding: 4,
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <img src={img4} alt="" />
                    </Box>
                    <Box>
                      <Typography>{card.cardType}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "22px" }}>
                      {card.cardNumber}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: "12px" }}>
                          Card Name Holder
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>
                          {card.cardHolderName}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "12px" }}>
                          Expiry Date
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>
                          {" "}
                          {card.expiryDate}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default App;
