import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Unstable_Grid2 as Grid,
  Skeleton,
} from "@mui/material";

const PokemonCard = (props) => {

    return (
      <Grid container spacing={2}>
      {props.pokemons.length > 0
        ? props.pokemons.map(({ avatar, name }) => (
      <Grid key={name} xs={12} sm={6} md={4} xl={3}>
        <Card>
        <CardMedia component="img" image={avatar} alt={name} />
        <CardHeader
          title={name}
          subheader="type (should visually look as a colored tag)"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            the main pokemon stats (whichever additional pokemon
            info you want to show)
          </Typography>
        </CardContent>
      </Card>
      </Grid>
        ))
        : [...new Array(props.rowsPerPage)].map((v, i) => (
          <Grid key={i} xs={12} sm={6} md={4} xl={3}>
            <Card>
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
              <CardHeader
                title={
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={
                  <Skeleton animation="wave" height={10} width="40%" />
                }
              />
              <CardContent>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
    )
}

export default PokemonCard;