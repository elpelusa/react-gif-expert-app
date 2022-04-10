import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGif(category);

  return (
    <>
      <h4 className="animate__animated animate__fadeIn">{category}</h4>
      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
