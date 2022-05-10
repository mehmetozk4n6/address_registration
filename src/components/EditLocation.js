import { useFormik } from "formik";
import validationSchema from "./validations";
import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { AdressContext } from "../context/AddressContext";
import Timepicker from "./Timepicker";

function EditLocation({ handleClose, show, adress }) {
  const { editAdresses, deleteAdresses } = useContext(AdressContext);

  const handleDelete = () => {
    handleClose();
    deleteAdresses(adress.id);
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    enableReinitialize,
  } = useFormik({
    initialValues: {
      name: adress.name,
      adress: adress.adress,
      openingTime: adress.openingTime,
      closingTime: adress.closingTime,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      editAdresses(values, adress.id);
      handleClose();
    },
    validationSchema,
  });
  console.log(values);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Location</Modal.Title>
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
              value={values.openingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Opening Time"
              className="ps-2"
            />
            {errors.openingTime && touched.openingTime && (
              <div className="error">{errors.openingTime}</div>
            )}
            <br />
            <br />
            <Timepicker
              value={values.closingTime}
              handleChange={handleChange}
              className="ps-2"
            />
            {/* <input
              name="closingTime"
              value={values.closingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Closing Time"
              className="ps-2"
            /> */}
            {/* {errors.closingTime && touched.closingTime && (
              <div className="error">{errors.closingTime}</div>
            )} */}
            <br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default EditLocation;
