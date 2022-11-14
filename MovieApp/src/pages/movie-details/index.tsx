import { Button, Typography } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LayoutContainer from "../../components/containers/LayoutContainer";
import useFavourite from "../../hooks/useFavourite";

export default function MovieDetails() {
  const {
    state: { movie },
  } = useLocation();
  const { setFavouriteMovie, removeFromFavourite, isFavourited } =
    useFavourite();

  return (
    <LayoutContainer>
      <div style={{ display: "flex", gap: 40 }}>
        <img alt={`${movie.title} Poster`} src={movie.posterurl} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography.Title level={3}>{movie.title}</Typography.Title>

          <div style={{ display: "flex", margin: "10px 0", gap: 30 }}>
            <div>
              <span style={{ fontWeight: 500 }}>Genre:</span>{" "}
              {movie.genres.map((v: string, index: number) => (
                <span key={index}>{v}</span>
              ))}
            </div>

            <span>
              <span style={{ fontWeight: 500 }}>Release Date: </span>
              <span>{movie.releaseDate}</span>
            </span>
          </div>

          <Typography.Text>{movie.storyline}</Typography.Text>

          <span style={{ margin: "20px 0" }}>
            {isFavourited(movie.id) ? (
              <Button onClick={() => removeFromFavourite(movie.id)}>
                Remove from favorite
              </Button>
            ) : (
              <Button onClick={() => setFavouriteMovie(movie)}>
                Add to favourite
              </Button>
            )}
          </span>
        </div>
      </div>
    </LayoutContainer>
  );
}
