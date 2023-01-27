import React from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import EditPage from "../pages/EditPage";

const MicroListItem = (props) => {
  return (
    <li key={props.index}>
      {props.entry.name} {props.entry.importName}
      <Badge bg="secondary">
        <Link to="edit" state={{ props: props }}>
          edit
        </Link>
      </Badge>
    </li>
  );
};

export default MicroListItem;
