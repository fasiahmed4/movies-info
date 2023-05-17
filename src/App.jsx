import { useState } from "react";
import SearchBar from "./pages/SearchBar";
import MoviesDetails from "./pages/MoviesDetails";

import "./App.css";
import { Button, Container } from "@mui/material";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (movieName) => {
    if (movieName.trim() === "") {
      alert("please enter a movie name");
      return;
    }
    try {
      const SEARCH_API = "http://localhost:4000/";
      const res = await fetch(SEARCH_API + movieName);
      const movies = await res.json();
      if (movies.data) setSearchResults(movies.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClearSearch = () => {
    setSearchResults([]);
    setSearchQuery("");
  };

  return (
    <Container>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <SearchBar
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Button variant="outlined" onClick={handleClearSearch}>
          Clear
        </Button>
      </div>

      <div>
        {searchResults.length === 0 && <h5> No movies found</h5>}
        {searchResults.length > 0 && <MoviesDetails movies={searchResults} />}
      </div>
    </Container>
  );
};

export default App;
