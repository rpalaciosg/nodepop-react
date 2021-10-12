import React, { useEffect, useState } from "react";
import Anuncios from "./components/Anuncios/Anuncios";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [anuncios, setAnuncios] = useState([]);

  // const baseUrl = 'http://127.0.0.1:8080/apiv1/anuncios';
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const getAnuncios = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAnuncios(data.results))
      .catch((err) => console.log(error));
  };

  useEffect(() => {
    getAnuncios(baseUrl);
  }, []);

  return (
    <>
      <header>
        <Navbar brand="Nodepop" />
      </header>
      <main>
        <Jumbotron/>
        <div className="container mt-5">
          <h2 className="">Lista de Anuncios</h2>
          <Pagination/>
          <Anuncios anuncios={anuncios} />
          <Pagination/>
        </div>
      </main>
    </>
  );
}

export default App;
