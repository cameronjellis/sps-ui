import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import getMicroList from "../utils/utils";
import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import MicroListItem from "../components/MicroListItem";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
// require("dotenv").config();

const MicroserviceList = (props) => {
  // on render call getMicroList, and pass the data into the list component. call this at a higher level and pass into this component? component did mount for instantly setting state?
  // if 200 render MicroserviceList else render 404 page?
  // context api for state
  // .env file for urls
  // move axios calls to util file?
  const [serviceList, setServiceList] = useState({});

  let data = {};
  const url = "http://localhost:3001/fullmenu";
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setServiceList(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, []);

  const serviceDTO = {
    id: "",
    name: "",
    url: "",
    display: false,
    icon: "",
    importName: "",
    importLocation: "",
    parentAppName: "",
    routes: [],
    parcels: [],
  };

  return serviceList.menu ? (
    <div className="container col-sm-7 micro-list">
      <h3 className="p-2">Microservice List</h3>
      {serviceList.menu.map((entry, index) => (
        <div key={index}>
          <MicroListItem entry={entry} />
        </div>
      ))}
      <div>
        <Badge bg="" className="badge-link">
          <Link
            className="links"
            to="edit"
            style={{ textDecoration: "none", color: "whitesmoke" }}
            state={{ props: { entry: serviceDTO } }}
          >
            +Add
          </Link>
        </Badge>
      </div>
    </div>
  ) : error ? (
    <h4> Whoops... Something went wrong...</h4>
  ) : (
    <h4> </h4>
  );
};

export default MicroserviceList;

// import { useAsync } from "react-async"

// You can use async/await or any function that returns a Promise
// const loadPlayer = async ({ playerId }, { signal }) => {
//   const res = await fetch(`/api/players/${playerId}`, { signal })
//   if (!res.ok) throw new Error(res.statusText)
//   return res.json()
// }

// const MyComponent = () => {
//   const { data, error, isPending } = useAsync({ promiseFn: loadPlayer, playerId: 1 })
//   if (isPending) return "Loading..."
//   if (error) return `Something went wrong: ${error.message}`
//   if (data)
//     return (
//       <div>
//         <strong>Player data:</strong>
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       </div>
//     )
//   return null
// }import { useAsync } from "react-async"

// // You can use async/await or any function that returns a Promise
// const loadPlayer = async ({ playerId }, { signal }) => {
//   const res = await fetch(`/api/players/${playerId}`, { signal })
//   if (!res.ok) throw new Error(res.statusText)
//   return res.json()
// }

// const MyComponent = () => {
//   const { data, error, isPending } = useAsync({ promiseFn: loadPlayer, playerId: 1 })
//   if (isPending) return "Loading..."
//   if (error) return `Something went wrong: ${error.message}`
//   if (data)
//     return (
//       <div>
//         <strong>Player data:</strong>
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       </div>
//     )
//   return null
// }
