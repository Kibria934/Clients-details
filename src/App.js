import "./App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Clients from "./components/Clients";
import UseClients from "./hooks/UseClients";

function App() {
  const {
    clients,
    setClients,
    loading,
    setLoading,
    active,
    setActive,
    handlePagination,
  } = UseClients();

  return (
    <div className="App">
      {loading ? (
        <div className="l_container">
          <div>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <section className="container">
          <h2>Bismlahir rahmanir rahim</h2>
          {clients?.results?.map((client) => (
            <Clients
              key={client.url.split("/")[client.url.split("/").length - 2]}
              client={client}
            />
          ))}
          <div className="p_container">
            {clients.previous && <BsChevronLeft />}
            {clients.count &&
              [...Array(Math.ceil(clients.count / 10)).keys()].map((num) => (
                <p
                  key={num}
                  onClick={() => handlePagination(num + 1)}
                  className={active == num + 1 ? `page active` : "page"}
                >
                  {num + 1}
                </p>
              ))}
            {clients.next && <BsChevronRight />}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
