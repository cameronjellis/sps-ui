const { Module } = require("webpack");
const fetch = require("node-fetch");

const url = "http://localhost:3001/";

const getMicroList = async () => {
  await fetch(url + "/get", {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
};

module.exports = { getMicroList };
