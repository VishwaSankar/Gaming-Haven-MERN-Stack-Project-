import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const ErrorBoundaryWithServerError = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const componentDidCatch = (error, info) => {
    setHasError(true);
    setError(error);
  };

  if (hasError) {
    return (
      <Box textAlign="center" p={2}>
        <Typography variant="body1" fontFamily="monospace" color="error">
          {error ? error.message : "An error occurred. Please try again later."}
        </Typography>
      </Box>
    );
  }

  return children;
};

export default ErrorBoundaryWithServerError;
