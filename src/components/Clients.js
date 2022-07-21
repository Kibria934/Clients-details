import React from "react";
import { Link } from "react-router-dom";

const Clients = ({ client }) => {
  return (
    <div className="card">
      <div className="flex_1">
        <h3>{client.name}</h3>
      </div>
      <div className="flex_1">
        <h3>Birth Year</h3>
        <h3>{client.birth_year}</h3>
      </div>
      <div className="flex_1">
        <h3>Height</h3>
        <h3>
          {client.height} <sub>inc</sub>
        </h3>
      </div>
      <div className="flex_1">
        <h3>Gender</h3>
        <h3>{client.gender}</h3>
      </div>
      <Link className="details_btn" to={"/"}>
        View Details
      </Link>
    </div>
  );
};

export default Clients;
