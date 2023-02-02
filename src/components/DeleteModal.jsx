import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const DeleteModal = (props) => {
  const url = "http://localhost:3001/api/microservice";
  // const deleteService = (id) => {
  //   axios
  //     .get(url + `/delete:${id}`)
  //     .then((res) => {
  //       setServiceList(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   console.log(id);
  // };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .get(url + `/delete/${id}`)
      .then((res) => {
        props.onHide();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(props.fields.id);
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
