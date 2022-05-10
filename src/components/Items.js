import { useState } from "react";
import { Table } from "react-bootstrap";

import EditLocation from "./EditLocation";

function Items({ currentItems }) {
  const [show, setShow] = useState(false);
  const [adress, setAdress] = useState({});
  const handleClose = () => setShow(false);

  const getAdress = (id) =>
    setAdress(currentItems.filter((item) => item.id === id)[0]);

  return (
    <>
      <Table hover>
        <thead className="text-start">
          <tr>
            <th>NAME</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {currentItems?.map((adress) => (
            <tr
              key={adress.id}
              onClick={() => {
                setShow(true);
                getAdress(adress.id);
              }}
            >
              <td>{adress.name}</td>
              <td>{adress.adress}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EditLocation adress={adress} handleClose={handleClose} show={show} />
    </>
  );
}

export default Items;
