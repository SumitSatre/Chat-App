import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const BackgroundBox = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: 'url("https://source.unsplash.com/random/1600x900?nature")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  textAlign: "center",
});

const NotFoundContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  maxWidth: 600,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  fontSize: "1rem",
  textTransform: "none",
  borderRadius: theme.shape.borderRadius * 2,
}));

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundBox>
      <NotFoundContainer>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            mb: 4,
          }}
        >
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </StyledButton>
      </NotFoundContainer>
    </BackgroundBox>
  );
};

export default NotFoundPage;
