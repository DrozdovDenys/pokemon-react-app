import { useState, useEffect } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
import Template from "./components/Template";

const P = new Pokedex();
const rowsPerPageOptions = [10, 20, 50];

const App = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    P.getTypesList().then(({ results }) => {
      setPokemonTypes(results.map(({ name }) => ({ type: name })));
    });
    P.getPokemonsList().then(({ results, count }) => {
      setPokemonNames(results.map(({ name }) => ({ name })));
      setPokemonCount(count);
    });
  }, []);
  useEffect(() => {
    setPokemons([]);

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    P.getPokemonByName(
      pokemonNames.slice(startIndex, endIndex).map(({ name }) => name)
    ).then((result) => {
      setPokemons(
        result.map(({ name, sprites, types, stats }) => ({
          name,
          avatar:
            sprites.other.home.front_default ??
            sprites.other["official-artwork"].front_default,
          types,
          stats,
        }))
      );
    });
  }, [page, rowsPerPage, pokemonNames]);

  return (
   <Template pokemons={pokemons} pokemonTypes={pokemonTypes} pokemonNames={pokemonNames} pokemonCount={pokemonCount} page={page} handleChangePage={handleChangePage} rowsPerPage={rowsPerPage} rowsPerPageOptions={rowsPerPageOptions} handleChangeRowsPerPage={handleChangeRowsPerPage} />
  );
};

export default App;
