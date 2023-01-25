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
  return await response.json();
};

export default getMicroList;
