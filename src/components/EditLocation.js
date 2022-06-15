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
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: adress.name || "",
        adress: adress.adress || "",
        openingTime: moment(adress.openingTime).format("HH:mm") || "",
        closingTime: moment(adress.closingTime).format("HH:mm") || "",
      },
      enableReinitialize: true,
      onSubmit: (values) => {
        values.openingTime = moment(
          `1970-01-01T${values.openingTime}:00.000`
        ).format();

        values.closingTime = Date.parse(`01 Jan 1970 ${values.closingTime}:00`);
        editAdresses(values, adress.id);
        handleClose();
      },
      validationSchema,
    });

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Location</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column justify-content-center align-items-start modalAddEdit">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
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
            <label htmlFor="adress">Address</label>
            <input
              name="adress"
              id="adress"
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
            <label htmlFor="openingTime">Opening Time</label>
            <input
              type="time"
              name="openingTime"
              id="openingTime"
              value={values.openingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Opening Time"
              className="ps-2"
              min="00:00"
              max="23:59"
            />

            <br />
            <br />
            <label htmlFor="closingTime">Closing Time</label>
            <input
              type="time"
              name="closingTime"
              id="closingTime"
              value={values.closingTime}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Closing Time"
              className="ps-2"
            />

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
