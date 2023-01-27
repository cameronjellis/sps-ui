import { React, useState } from "react";
import { FormControl } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MicroListItem from "../components/MicroListItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditPage = (props) => {
  const location = useLocation();
  const [fields, setFields] = useState(location.state.props.entry);
  console.log(fields);

  // fields to edit ~ name, url, display, icon, importName, importLocation, parentApplication(id), routes[], parcels[]

  const [serviceDTO, setServiceDTO] = useState({
    name: "",
    url: "",
    display: false,
    icon: "",
    importName: "",
    importLocation: "",
    parentAppName: "",
    routes: [],
    parcels: [],
  });

  return (
    <div className="container">
      <h3>Edit Microservice Information</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="" value={fields.name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" placeholder="/example" value={fields.url} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Display" value={fields.display} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Icon</Form.Label>
          <Form.Control
            type="text"
            placeholder="/example"
            value={fields.icon}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Import Name</Form.Label>
          <Form.Control type="text" placeholder="" value={fields.importName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Import Location</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={fields.importLocation}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Parent Application</Form.Label>
          <Form.Control type="text" placeholder="" value={fields.parentId} />
        </Form.Group>
        {/* check if there are routes and if so render extra form boxes? */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Routes</Form.Label>
          <Form.Control type="text" placeholder="" value={fields.routes} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Parcels</Form.Label>
          <Form.Control type="text" placeholder="" value={fields.parcels} />
        </Form.Group>

        <Button className="m-3" variant="outline-primary" type="submit">
          Submit
        </Button>

        <Button className="m-3" variant="outline-warning" type="cancel">
          Cancel
        </Button>
      </Form>
      {/* <Form>
        {Object.entries(fields).map((field, index) => (
          <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
            <Form.Label>{field[0]}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={field[1]}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        ))}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </div>
  );
};

export default EditPage;
