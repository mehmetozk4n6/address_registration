import axios from "axios";
import { createContext, useState, useEffect } from "react";

import Swal from "sweetalert2";

export const AdressContext = createContext();

export const AdressProvider = ({ children }) => {
  const [adresses, setAdresses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);

  const getAdresses = () => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_ADRESSES_API_URL}`)
      .then((response) => setAdresses(response.data))
      .then(() => setIsLoading(false));
    setItemOffset(0);
  };

  const addAdresses = (adress) =>
    axios
      .post(`${process.env.REACT_APP_ADRESSES_API_URL}`, adress)
      .then(() => getAdresses())
      .then(() =>
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Record has been added.",
          showConfirmButton: false,
          timer: 1000,
        })
      );

  const editAdresses = (adress, id) => {
    axios
      .put(`${process.env.REACT_APP_ADRESSES_API_URL}${id}`, { ...adress })
      .then(() => getAdresses())
      .then(() =>
        Swal.fire({
          position: "bottom-end",
          icon: "info",
          title: "Record has been changed.",
          showConfirmButton: false,
          timer: 1000,
        })
      );
  };

  const deleteAdresses = (id) =>
    axios
      .delete(`${process.env.REACT_APP_ADRESSES_API_URL}${id}`)
      .then(() => getAdresses())
      .then(() =>
        Swal.fire({
          position: "bottom-end",
          icon: "warning",
          title: "Record has been deleted.",
          showConfirmButton: false,
          timer: 1000,
        })
      );

  useEffect(() => {
    getAdresses();
  }, []);

  useEffect(() => {
    setFilteredItems(
      adresses?.filter((adress) =>
        adress?.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setItemOffset(0);
  }, [searchValue, adresses]);

  const values = {
    itemOffset,
    setItemOffset,
    filteredItems,
    setSearchValue,
    searchValue,
    getAdresses,
    addAdresses,
    editAdresses,
    deleteAdresses,
    adresses,
    setAdresses,
    isLoading,
  };
  return (
    <AdressContext.Provider value={values}>{children}</AdressContext.Provider>
  );
};
