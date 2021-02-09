import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import useStyles from "./searchBar_Style";

const SearchBar = ({ onFormSubmit }) => {
  const [termFromSearchBar, setSearchTerm] = useState("");

  const classes = useStyles();

  const handleChange = (event) => setSearchTerm(event.target.value);

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      onFormSubmit(termFromSearchBar);
    }
  };

  return (
    <div className={classes.searchBar}>
      <div onSubmit={handleSubmit} 
      className={classes.searchForm}>
        <TextField
          className={classes.searchTextField}
          label="Search"
          value={termFromSearchBar}
          onChange={handleChange}
          onKeyPress={handleSubmit}
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
