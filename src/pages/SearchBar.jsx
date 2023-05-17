import { TextField, Button } from '@mui/material';

const SearchBar = ({searchQuery, setSearchQuery,  handleSearch }) => {

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', }}>
      <TextField
        label="Search Movies"
        value={searchQuery}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;