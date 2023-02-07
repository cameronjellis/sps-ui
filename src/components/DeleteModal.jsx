import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DeleteModal = (props) => {
  const url = "http://localhost:3001/api/microservice";
  let navigate = useNavigate();
  const handleDelete = (id) => {
    axios
      .get(url + `/delete/${id}`)
      .then((response) => {
        if (response.status === 200) {
          props.onHide();
          navigate("/micromanager");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Warning...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Are you sure you want to delete this microservice?</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="m-3"
          variant="outline-warning"
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          className="m-3"
          variant="outline-danger"
          onClick={() => {
            handleDelete(props.fields.id);
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
