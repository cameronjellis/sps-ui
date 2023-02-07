import { React, useState } from "react";
import { FormControl } from "react-bootstrap";
import { useNavigate, useHref, useLocation } from "react-router-dom";
import MicroListItem from "../components/MicroListItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";
// require("dotenv").config();
// BASE_URL="http://localhost:3001/"
// GET_URL="http://localhost:3001/fullmenu"
// SEND_URL="http://localhost:3001/api/microservice"
// # /service/get maybe enum?

const EditPage = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const url = "http://localhost:3001/api/microservice";
  const [fields, setFields] = useState(location.state.props.entry);
  const [modalShow, setModalShow] = useState(false);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const handleSubmit = () => {
    axios
      .post(url + "/add", {
        ...fields,
      })
      .then((response) => {
        if (response.status == 200) {
          navigate("/micromanager");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    navigate("/micromanager");
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
