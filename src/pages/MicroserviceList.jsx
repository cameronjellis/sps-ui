import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import getMicroList from "../utils";
import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import MicroListItem from "../components/MicroListItem";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

const MicroserviceList = (props) => {
  // on render call getMicroList, and pass the data into the list component. call this at a higher level and pass into this component? component did mount for instantly setting state?
  // context api for state
  const [serviceList, setServiceList] = useState({});

  let data = {};
  const url = "http://localhost:3001/fullmenu";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setServiceList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(serviceList.menu);

  return serviceList.menu ? (
    <div className="container">
      <h3>Microservice List</h3>
      {serviceList.menu.map((entry, index) => (
        <div key={index}>
          <MicroListItem entry={entry} index={index} />
        </div>
      ))}
      <div>
        <Badge bg="primary">+Add</Badge>
      </div>
    </div>
  ) : (
    <h4> </h4>
  );
};

export default MicroserviceList;
