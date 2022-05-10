import { useFormik } from "formik";
import validationSchema from "./validations";
import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { AdressContext } from "../context/AddressContext";
import moment from "moment";

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
      openingTime: moment(adress.openingTime).format("HH:mm:ss"),
      closingTime: moment(adress.closingTime).format("HH:mm:ss"),
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      // values.openingTime = Date.parse(`01 Jan 1970 ${values.openingTime} GMT`);
      // values.closingTime = Date.parse(`01 Jan 1970 ${values.closingTime} GMT`);
      // console.log(values.openingTime);
      // console.log(values.closingTime);
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
            {/* {errors.adress && touched.adress && (
              <div className="error">{errors.adress}</div>
            )} */}
            <br />
            <br />
            <input
              type="time"
              name="openingTime"
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
              type="time"
              name="closingTime"
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
