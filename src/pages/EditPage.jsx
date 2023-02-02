import { React, useState } from "react";
import { FormControl } from "react-bootstrap";
import { useHref, useLocation } from "react-router-dom";
import MicroListItem from "../components/MicroListItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";
require("dotenv").config();

const EditPage = (props) => {
  const location = useLocation();

  const [fields, setFields] = useState(location.state.props.entry);

  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = () => {
    console.log(fields);

    const url = "http://localhost:3001/api/microservice";

    if (fields.id === "") {
      console.log("add new");
      axios
        .post(url + "/add", {
          ...fields,
        })
        .then((response) => {
          console.log(response);
          props.onHide();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("update");
      axios
        .post(url + "/add", {
          ...fields,
        })
        .then((response) => {
          console.log(response);
          props.onHide();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = () => {
    serviceDTO.id = fields.id;
    console.log("delete  " + serviceDTO.id);
  };

  const handleCancel = () => {
    useHref();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setFields({ ...fields, [name]: e.target.value });
  };

  return (
    <div className="container micro-form">
      <h3>Edit Microservice Information</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="name"
            value={fields.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="/example"
            name="url"
            value={fields.url}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Display"
            name="display"
            value={fields.display}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Icon</Form.Label>
          <Form.Control
            type="text"
            placeholder="/example"
            name="icon"
            value={fields.icon}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Import Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="importName"
            value={fields.importName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Import Location</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="importLocation"
            value={fields.importLocation}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Parent Application</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="parentId"
            value={fields.parentId}
            onChange={handleChange}
          />
        </Form.Group>
        {/* check if there are routes and if so render extra form boxes? */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Routes</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="routes"
            value={fields.routes}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Parcels</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="parcels"
            value={fields.parcels}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          className="m-3"
          variant="outline-primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <Button
          className="m-3"
          variant="outline-warning"
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button
          className="m-3"
          variant="outline-danger"
          onClick={() => {
            setModalShow(true);
          }}
        >
          Delete
        </Button>
        <DeleteModal
          fields={fields}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Form>
    </div>
  );
};

export default EditPage;
