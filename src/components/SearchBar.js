import { InputGroup, FormControl } from "react-bootstrap";
import { useContext } from "react";
import { AdressContext } from "../context/AddressContext";

function SearchBar() {
  const { setSearchValue, searchValue } = useContext(AdressContext);

  return (
    <InputGroup className="mx-3 w-50">
      <FormControl
        aria-label="First name"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBar;
