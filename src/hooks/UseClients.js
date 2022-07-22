import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);
  const [firsClients, setFirstClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("https://swapi.dev/api/people/").then((res) => {
      console.log(res.data);
      setClients(res.data);
      setFirstClients(res.data);
      navigate("/");
      setLoading(false);
    });
  }, []);

  const handlePagination = (query) => {
    if (query === 1) {
      setLoading(true);
      setClients(firsClients);
      setActive(query);
      navigate("/");
      setLoading(false);
    }
    if (query !== 1) {
      setLoading(true);
      fetch(`https://swapi.dev/api/people/?page=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setClients(data);
          setActive(query);
          navigate("/");
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
    handlePagination,
  };
};

export default useClients;
