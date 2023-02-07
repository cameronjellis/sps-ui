import "../App.css";
import React from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import EditPage from "../pages/EditPage";

const MicroListItem = (props) => {
  // would cards look better than a list...?
  return (
    <Container className="m-2 micro-item" id="micro">
      <div>
        {props.entry.name} {props.entry.importName}
      </div>
      <div id="edit-badge">
        <Badge bg="" className="badge-link">
          <Link
            className="links"
            to="edit"
            style={{ textDecoration: "none", color: "whitesmoke" }}
            state={{ props: props }}
          >
            Edit
          </Link>
        </Badge>
      </div>
    </Container>
  );
};

export default MicroListItem;
