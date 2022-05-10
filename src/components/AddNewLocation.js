import { useFormik } from "formik";
import validationSchema from "./validations";
import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { AdressContext } from "../context/AddressContext";
import moment from "moment";

function AddNewLocation({ handleClose, show }) {
  const { addAdresses } = useContext(AdressContext);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        adress: "",
        openingTime: "",
        closingTime: "",
      },
      onSubmit: (values) => {
        console.log(values);
        addAdresses(values);
        values.name = "";
        values.adress = "";
        values.openingTime = moment(Date.now()).format("HH:mm:ss");
        values.closingTime = moment(Date.now).format("HH:mm:ss");
        handleClose();
      },
      validationSchema,
    });
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Location</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              className="ps-2"
            />
            {errors.name && touched.name && (
              <div className="error">{errors.name}</div>
            )}
            <br />
            <br />
            <input
              name="adress"
              value={values.adress}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address"
              className="ps-2"
            />
            {errors.adress && touched.adress && (
              <div className="error">{errors.adress}</div>
            )}
            <br />
            <br />
            <input
              name="openingTime"
              type="time"
              value={values.openingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Opening Time"
              className="ps-2"
            />
            {/* {errors.openingTime && touched.openingTime && (
              <div className="error">{errors.openingTime}</div>
            )} */}
            <br />
            <br />

            <input
              name="closingTime"
              type="time"
              value={values.closingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Closing Time"
              className="ps-2"
            />
            {/* {errors.closingTime && touched.closingTime && (
              <div className="error">{errors.closingTime}</div>
            )} */}
            <br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default AddNewLocation;
