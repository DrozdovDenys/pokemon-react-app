import React from "react";
import { useState, useEffect } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
import Template from "./components/Template";

const P = new Pokedex();
const rowsPerPageOptions = [10, 20, 50];

const state = {

    [page, setPage] : useState(0),
    [rowsPerPage, setRowsPerPage] : useState(10),

    [pokemonTypes, setPokemonTypes] : useState([]),
    [pokemonNames, setPokemonNames] : useState([]),
    [pokemonCount, setPokemonCount] :  useState(0),
    [pokemons, setPokemons] : useState([]),


    handleChangePage = (event, value) => {
      setPage(value);
    },
  
    handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
  



   useEffect = useEffect(() => {
      P.getTypesList().then(({ results }) => {
        setPokemonTypes(results.map(({ name }) => ({ type: name })));
      });
      P.getPokemonsList().then(({ results, count }) => {
        setPokemonNames(results.map(({ name }) => ({ name })));
        setPokemonCount(count);
      });
    }, []),

    useEffect = useEffect(() => {
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
    }, [page, rowsPerPage, pokemonNames])

}

export default state;