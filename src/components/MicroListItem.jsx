import "../App.css";
import React from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import EditPage from "../pages/EditPage";

const MicroListItem = (props) => {
    // would cards look better than a list...?
  return (
    <Container className="m-2" id="micro">
      <div>
        {props.entry.name} {props.entry.importName}
      </div>
      <div id="edit-badge">
        <Badge bg="secondary">
          <Link to="edit" state={{ props: props }}>
            edit
          </Link>
        </Badge>
        <Badge className="badge" bg="secondary">
          <Link to="edit" state={{ props: props }}>
            edit
          </Link>
        </Badge>
      </div>
    </Container>
  );
};

export default MicroListItem;
