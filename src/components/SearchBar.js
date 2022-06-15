import { InputGroup, FormControl } from "react-bootstrap";
import { useContext } from "react";
import { AdressContext } from "../context/AddressContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const { setSearchValue, searchValue } = useContext(AdressContext);

  return (
    <InputGroup className="mx-3 w-50 align-items-center border border-secondary rounded-3">
      <FontAwesomeIcon icon={faSearch} className="ms-2" />
      <FormControl
        aria-label="First name"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="border-0"
      />
    </InputGroup>
  );
}

export default SearchBar;
