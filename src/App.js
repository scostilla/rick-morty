import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./componets/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img
              className="img-home"
              src={imageRickMorty}
              alt="rick & morty image"
            />
            <button className="btn-search" onClick={reqApi}>
              Buscar Personaje{" "}
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
