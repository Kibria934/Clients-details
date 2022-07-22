import React, { useState } from "react";
import Clients from "./components/Clients";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ClipLoader, HashLoader } from "react-spinners";

const Home = ({ clients, loading, active, handlePagination }) => {
  return (
    <div className="App">
      {loading ? (
        <div className="l_container">
          <HashLoader color="#0f4883" loading size={96} speedMultiplier={1} />
        </div>
      ) : (
        <section className="container">
          {clients?.results?.map((client) => (
            <Clients key={client.url} client={client} />
          ))}
          <div className="p_container">
            {clients.previous && <BsChevronLeft />}
            {clients.count &&
              [...Array(Math.ceil(clients.count / 10)).keys()].map((num) => (
                <p
                  key={num}
                  onClick={() => handlePagination(num + 1)}
                  className={active === num + 1 ? `page active` : "page"}
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
};

export default Home;
