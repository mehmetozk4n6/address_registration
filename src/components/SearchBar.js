import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

function SearchBar() {
  return (
    <InputGroup className="mx-3 w-50">
      <FormControl aria-label="First name" placeholder="Search" />
    </InputGroup>
  );
}

export default SearchBar;
