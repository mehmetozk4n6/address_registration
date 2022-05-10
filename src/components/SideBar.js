import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faUserGroup,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className=" sideBar text-secondary">
      <ul className="d-flex flex-column align-items-start">
        <li>
          <FontAwesomeIcon icon={faCity} />
          Distributors
        </li>
        <li>
          <FontAwesomeIcon icon={faUserGroup} />
          Customers
        </li>
        <li className="text-danger">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
