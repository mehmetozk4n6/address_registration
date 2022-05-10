import axios from "axios";
import { createContext, useState, useEffect } from "react";

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
      .then(() => getAdresses());
  const editAdresses = (adress, id) =>
    axios
      .put(`${process.env.REACT_APP_ADRESSES_API_URL}${id}`, adress)
      .then(() => getAdresses());
  const deleteAdresses = (id) =>
    axios
      .delete(`${process.env.REACT_APP_ADRESSES_API_URL}${id}`)
      .then(() => getAdresses());

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
