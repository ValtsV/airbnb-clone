import React, { useState } from "react";
import "./Banner.scss";
import { Button } from "@material-ui/core";
import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner-search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          className="banner-searchbutton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Ocultar" : "Buscar fechas"}
        </Button>
      </div>
      <div className="banner-info">
        <h1>Empieza tu nueva aventura</h1>
        <h5>
          Planea otro tipo de escapada para descubrir nuevas cosas cerca de ti.
        </h5>
        <Button variant="outlined">Explora los alrededores</Button>
      </div>
    </div>
  );
}

export default Banner;
