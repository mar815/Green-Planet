import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ItemDisplay from './components/ItemDisplay';
import { Container, Typography, Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388e3c', // green
    },
    secondary: {
      main: '#ffa000', // amber
    },
    background: {
      default: '#f1f8e9', // light green
    },
  },
  typography: {
    h2: {
      fontWeight: 700, // bold
    },
  },
});

function App() {
  const [itemId, setItemId] = useState("");

  const handleSearchSubmit = (itemId: string) => {
    setItemId(itemId);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" align="center" color="primary" gutterBottom>
          Green Planet
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Learn how to recycle your items
        </Typography>
        <Container maxWidth="sm">
          <SearchBar onSearchSubmit={handleSearchSubmit} />
          <ItemDisplay itemId={itemId} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
