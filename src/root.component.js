import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPage from "./pages/EditPage";
import MicroserviceList from "./pages/MicroserviceList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Root(props) {
  //react router here -> rendering top level components/pages based on nav app
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/micromanager">
          <Route index element={<MicroserviceList />} />
          <Route path="edit" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="container">
    //   <section>{props.name} is mounted!</section>
    //   <div className="col-sm-4">
    //     <MicroserviceList />
    //   </div>
    //   <div className="col-sm-4">
    //     <FieldEditor />
    //   </div>
    // </div>
  );
}
