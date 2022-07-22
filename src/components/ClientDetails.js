import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader, HashLoader } from "react-spinners";

const ClientDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [home, setHome] = useState([]);
  const [residents, setResidents] = useState([]);
  const [films, setFilms] = useState([]);
  const [DescLoading, setDescLaoding] = useState(true);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`).then((res) => {
      setDetails(res.data);
    });
  }, []);

  useEffect(() => {
    if (details.homeworld) {
      axios.get(`${details.homeworld}`).then((res) => {
        setHome(res.data);
      });
    }
    if (details.films) {
      setDescLaoding(true);
      axios.get(`${details.films[0]}`).then((res) => {
        setFilms(res.data);
        setDescLaoding(false);
      });
    }
  }, [details]);

  return (
    <div className="d_container">
      {DescLoading ? (
        <div className="loader_container">
          <HashLoader color="#0f4883" loading size={96} speedMultiplier={1} />
        </div>
      ) : (
        <section className="info_container">
          <div className="flex_1">
            <h1>Client Name</h1>
            <p>{details.name}</p>
            <h1>Birth year</h1>
            <p>{details.birth_year}</p>
            <h1>Gender</h1>
            <p>{details.gender}</p>
            <h1>Hair Color</h1>
            <p>{details.hair_color}</p>
            <h1>Height</h1>
            <p>
              {details.height} <sub>/cm</sub>
            </p>
            <h1>Eye Color</h1>
            <p>{details.eye_color}</p>
            <h1>Skin Color</h1>
            <p>{details.skin_color}</p>
          </div>
          <div className="flex_2">
            <h1>Home</h1>
            <p>{home.name}</p>
            <h1>Population</h1>
            <p>{home.population}</p>
            <h1>Terrain</h1>
            <p>{home.terrain}</p>
            <h1>Climate situation</h1>
            <p>{home.climate}</p>
            <>
              {DescLoading ? (
                <HashLoader
                  color="#0f4883"
                  loading
                  size={96}
                  speedMultiplier={1}
                />
              ) : (
                <>
                  <h1>Films</h1>
                  <p>
                    <strong>Film title: </strong>
                    {films.title}.<strong> Film director: </strong>{" "}
                    {films.director}. <strong>Description: </strong>{" "}
                    {films.opening_crawl}
                  </p>
                </>
              )}
            </>
          </div>
        </section>
      )}
    </div>
  );
};

export default ClientDetails;
