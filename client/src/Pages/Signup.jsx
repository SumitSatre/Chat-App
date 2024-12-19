import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const BackgroundContainer = styled(Box)({
  backgroundImage: 'url("https://source.unsplash.com/random/1600x900?workspace")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SignUpPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "100%",
  maxWidth: 500,
  borderRadius: 16,
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(10px)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontSize: "1rem",
  borderRadius: theme.shape.borderRadius * 2,
  textTransform: "none",
}));

const SignUpPage = () => {
  const navigate = useNavigate();

  // State for profile image preview
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const bio = data.get("bio");

    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Bio:", bio);
    console.log("Profile Photo:", profilePhoto);
  };

  return (
    <BackgroundContainer>
      <SignUpPaper>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          Create an Account
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 2,
            color: "text.secondary",
          }}
        >
          Sign up to get started
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Profile Photo Upload */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {profilePhoto ? (
              <Avatar
                src={profilePhoto}
                alt="Profile Preview"
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                }}
              />
            ) : (
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                }}
              >
                P
              </Avatar>
            )}
            <Button variant="outlined" component="label" fullWidth>
              Upload Profile Photo
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleProfilePhotoChange}
              />
            </Button>
          </Box>

          <TextField
            label="Full Name"
            name="name"
            type="text"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Username"
            name="username"
            type="text"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Bio"
            name="bio"
            type="text"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <StyledButton type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </StyledButton>
        </Box>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <span
              style={{
                color: "#3f51b5",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </Grid>
      </SignUpPaper>
    </BackgroundContainer>
  );
};

export default SignUpPage;
