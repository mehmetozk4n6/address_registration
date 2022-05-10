import axios from "axios";
import { createContext, useState, useEffect } from "react";

import Swal from "sweetalert2";

export const AdressContext = createContext();

export const AdressProvider = ({ children }) => {
  const [adresses, setAdresses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getAdresses = () => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_ADRESSES_API_URL}`)
      .then((response) => setAdresses(response.data))
      .then(() => setIsLoading(false));
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
    console.log(adress);
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

  const values = {
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
