import React from "react";
import {
    Autocomplete,
    TextField,
  } from "@mui/material";
  import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const AutocompleteField = (props) => {
    return (
        <Autocomplete
        freeSolo
        sx={{ maxWidth: { xs: "auto", sm: 300 }, width: "100%" }}
        isOptionEqualToValue={(option, value) =>
          option.name === value.name
        }
        getOptionLabel={(option) => option.name}
        options={props.pokemonNames}
        renderInput={(params) => (
          <TextField {...params} label="Pokémon name" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.name, inputValue, {
            insideWords: true,
          });
          const parts = parse(option.name, matches);

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
    )
}

export default AutocompleteField;