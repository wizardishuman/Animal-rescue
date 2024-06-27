import React, { useEffect, useState } from "react";
import axios from "axios";

function Incident() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/users/getIncident")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching incident data:", error);
      });
  }, []);

  return (
    <div
      className="flex justify-center flex-col items-center gap-4 bg-red-50 text-slate-700 font-bold mt-4"
      id="incident"
    >
      <h1 className="text-3xl mt-10 text-red-700">Incident Near You</h1>
      <ul className="flex items-center justify-center gap-4 flex-wrap">
        {data.map((incident) => (
          <li key={incident._id} className="bg-white p-4 rounded-xl">
            <p>Title: {incident.title}</p>
            <p>Description: {incident.description}</p>
            <p>Location: {incident.location}</p>
            <p>Date: {incident.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Incident;
