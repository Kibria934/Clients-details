import React, { useEffect, useState } from "react";
import axios from "axios";

const useClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);
  const [firsClients, setFirstClients] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://swapi.dev/api/people/").then((res) => {
      console.log(res.data);
      setClients(res.data);
      setFirstClients(res.data);
      setLoading(false);
    });
  }, []);

  const handlePagination = (query) => {
    if (query === 1) {
      setLoading(true);
      setClients(firsClients);
      setActive(query);
      setLoading(false);
    }
    if (query !== 1) {
      setLoading(true);
      fetch(`https://swapi.dev/api/people/?page=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setClients(data);
          setActive(query);
          setLoading(false);
        });
    }
  };
  return {
    clients,
    setClients,
    loading,
    setLoading,
    active,
    setActive,
    // firsClients,
    // setFirstClients,
    handlePagination,
  };
};

export default useClients;
