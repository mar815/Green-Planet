import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearchSubmit: (itemId: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearchSubmit(search);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <TextField
        label="Search for an item"
        variant="outlined"
        value={search}
        onChange={handleSearch}
        fullWidth
        sx={{
          maxWidth: 300,
          bgcolor: 'background.paper',
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<SearchIcon />}
        sx={{
          ':hover': {
            backgroundColor: 'secondary.main',
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
