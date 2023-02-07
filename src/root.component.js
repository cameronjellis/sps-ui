import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPage from "./pages/EditPage";
import MicroserviceList from "./pages/MicroserviceList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import * as dotenv from "dotenv";
// dotenv.config();
// require("dotenv").config();

export default function Root() {
  // console.log(process.env);
  //react router here -> rendering top level components/pages based on nav app
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/micromanager">
          {/* if 200 render MicroserviceList else render 404 page? */}
          <Route index element={<MicroserviceList />} />
          <Route path="edit" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
