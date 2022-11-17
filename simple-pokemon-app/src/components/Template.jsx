import React from "react";
import {
    Box,
    Container,
    Unstable_Grid2 as Grid,
  } from "@mui/material";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import AutocompleteField from "./AutocompleteField";
import Header from "./Header";
import PokemonTypesField from "./PokemonTypesField";

const Template = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Container>
          <Box sx={{ my: 2 }}>
            <Grid container>
              <Grid xs={12} md={6}>
                <PokemonTypesField pokemonTypes={props.pokemonTypes} />
              </Grid>
              <Grid
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: { xs: 2, md: 0 },
                }}
              >
                <AutocompleteField pokemonNames={props.pokemonNames} />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container>
          <Box sx={{ my: 2 }}>
            <Pagination pokemonCount={props.pokemonCount} page={props.page} handleChangePage={props.handleChangePage} rowsPerPage={props.rowsPerPage} rowsPerPageOptions={props.rowsPerPageOptions} handleChangeRowsPerPage={props.handleChangeRowsPerPage} />
            <PokemonCard pokemons={props.pokemons} />
            <Pagination pokemonCount={props.pokemonCount} page={props.page} handleChangePage={props.handleChangePage} rowsPerPage={props.rowsPerPage} rowsPerPageOptions={props.rowsPerPageOptions} handleChangeRowsPerPage={props.handleChangeRowsPerPage} />
          </Box>
        </Container>
      </Box>
    )
}

export default Template;