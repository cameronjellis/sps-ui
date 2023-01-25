import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import getMicroList from "../utils";
import { useState, React } from "react";
import { Link } from "react-router-dom";

const MicroserviceList = () => {
  // on render call getMicroList, and pass the data into the list component. call this at a higher level and pass into this component? component did mount for instantly setting state?
  // context api for state
  const [serviceList, setServiceList] = useState({});

  let data = {};
  const url = "http://localhost:3001/";

  const getMicroList = async () => {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
    // data = await response.json();
    // console.log(data);
    setServiceList(await response.json());
  };

  // console.log(serviceList);

  return (
    <div className="col-sm-2">
      <Button
        variant="outline-warning"
        onClick={() => {
          getMicroList();
        }}
      >
        Warning
      </Button>
      <h3>Micro service List and many other things that will go here</h3>
      <Button variant="outline-secondary">
        <Link to="edit">edit</Link>
      </Button>
    </div>
  );
};

export default MicroserviceList;
