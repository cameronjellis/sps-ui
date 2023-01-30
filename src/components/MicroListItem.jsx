import React from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import EditPage from "../pages/EditPage";
import "../styles/App.css";

const MicroListItem = (props) => {
  return (
    <Container className="m-2 microList" key={props.index}>
      <li key={props.index}>
        {props.entry.name} {props.entry.importName}
        <Badge bg="secondary">
          <Link to="edit" state={{ props: props }}>
            edit
          </Link>
        </Badge>
      </li>
    </Container>
  );
};

export default MicroListItem;
