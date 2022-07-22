import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { BiHide } from "react-icons/bi";

const Clients = ({ client }) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleView = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="details_container">
      <section className="card">
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
            {client.height} <sub>/cm</sub>
          </h3>
        </div>
        <div className="flex_1">
          <h3>Gender</h3>
          <h3>{client.gender}</h3>
        </div>
        {/* --------- view button ----------*/}
        {!isOpen ? (
          <Link
            className="details_btn"
            onClick={handleView}
            to={`/client/${
              client.url.split("/")[client.url.split("/").length - 2]
            }`}
          >
            View Details
            <span style={{ marginLeft: "8px" }}>
              <TbListDetails />
            </span>
          </Link>
        ) : (
          <Link className="details_btn" onClick={handleView} to={`/client`}>
            Hide Details
            <span style={{ marginLeft: "8px" }}>
              <BiHide />
            </span>
          </Link>
        )}
      </section>

      {/* -------- Details section ------- */}
      <>
        {client.url.split("/")[client.url.split("/").length - 2] === id && (
          <div className="d_area">
            <Outlet />
          </div>
        )}
      </>
    </div>
  );
};

export default Clients;
