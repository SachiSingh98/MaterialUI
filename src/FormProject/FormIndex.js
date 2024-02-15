import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

export default function FormIndex() {
  const initalValue = {
    name: "",
    email: "",
    password: "",
  };

  const [showSignup, setShowSignup] = useState(false);
  const theme = useTheme();
  const [data, setData] = useState(initalValue);

  const isMedium = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({ name: "", email: "", password: "" });
  };
  return (
    <>
      <Container
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "10px 5px",
          width: isMedium ? "100%" : "500px",
          margin: "50px  auto",
          borderRadius: "4px",
          ":hover": {
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 3px 10px 0px",
            transition: "all 0.5s ease-in-out",
          },
        }}
      >
        <form style={{ textAlign: "center" }} onSubmit={handleOnSubmit}>
          {showSignup ? (
            <Box>
              <Typography variant="h4">Signup</Typography>

              <TextField
                sx={{ borderRadius: "0px" }}
                margin="normal"
                name="name"
                type="text"
                variant="outlined"
                value={data.name || ""}
                fullWidth
                label="Name"
                onChange={handleOnChange}
              />
              <TextField
                onChange={handleOnChange}
                sx={{ borderRadius: "0px" }}
                margin="normal"
                name="email"
                type="email"
                value={data.email || ""}
                variant="outlined"
                fullWidth
                label="Email"
              />
              <TextField
                sx={{ borderRadius: "0px" }}
                margin="normal"
                name="password"
                type="password"
                variant="outlined"
                value={data.password || ""}
                fullWidth
                label="Password"
                onChange={handleOnChange}
              />

              <Button
                type="submit"
                sx={{ margin: "10px 0px" }}
                variant="contained"
                color="warning"
              >
                Signup
              </Button>

              <hr sx={{ fontWeight: "800" }} />

              <Typography
                onClick={() => {
                  setData({ name: "", email: "", password: "" });
                  setShowSignup(false);
                }}
                margin={"10px 0px"}
                sx={{ fontWeight: 700, color: "orange", cursor: "pointer" }}
              >
                Already Have Account ?
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="h4">Login</Typography>

              <TextField
                sx={{ borderRadius: "0px" }}
                margin="normal"
                name="email"
                onChange={handleOnChange}
                variant="outlined"
                fullWidth
                type="email"
                required
                value={data.email || ""}
                label="Email"
              />
              <TextField
                sx={{ borderRadius: "0px" }}
                margin="normal"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={handleOnChange}
                label="Password"
                value={data.password || ""}
              />

              <Button
                sx={{ margin: "10px 0px" }}
                variant="contained"
                color="warning"
                type="submit"
              >
                Login
              </Button>

              <hr sx={{ fontWeight: "800" }} />

              <Typography
                onClick={() => {
                  setData({ name: "", email: "", password: "" });
                  setShowSignup(true);
                }}
                margin={"10px 0px"}
                sx={{ fontWeight: 700, color: "orange", cursor: "pointer" }}
              >
                Dont Have Account ?
              </Typography>
            </Box>
          )}
        </form>
      </Container>
    </>
  );
}
