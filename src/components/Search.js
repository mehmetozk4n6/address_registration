import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import PaginatedTable from "./PaginatedTable";
import AddNewLocation from "./AddNewLocation";
import Timepicker from "./Timepicker";

function Search() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="p-3">
      <ul className="d-flex text-secondary subHeader">
        <li className="ms-3 text-danger">Locations</li>
        <li className="ms-3">User Accounts</li>
        <li className="ms-3">Info</li>
      </ul>
      <div className="d-flex justify-content-between m-3">
        <h2>Locations</h2>
        <div className="d-flex">
          <SearchBar />
          <Button variant="danger" onClick={handleShow} className="newButton">
            + New
          </Button>
          <AddNewLocation handleClose={handleClose} show={show} />
        </div>
        <Timepicker />
      </div>
      <PaginatedTable />
    </div>
  );
}

export default Search;
