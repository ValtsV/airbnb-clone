import React from "react";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import "./SearchPage.scss";

const SearchPage = (props) => {
  return (
    <div className="searchpage">
      <div className="searchpage-info">
        <p>62 lugares · 26 de agosto a 30 de agosto · 2 huespedes</p>
        <h1>Lugares cercanos</h1>
        <Button variant="outlined" className="searchpage-button">
          Cancelation
        </Button>
        <Button variant="outlined" className="searchpage-button">
          Tipo de lugar
        </Button>
        <Button variant="outlined" className="searchpage-button">
          Precio
        </Button>
        <Button variant="outlined" className="searchpage-button">
          Habitaciones
        </Button>
        <Button variant="outlined" className="searchpage-button">
          Mas filtros
        </Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Habitacion privada en Londres"
        title="Disfruta de esta casa amplia Eduardiana"
        desc="1 huesped · 1 dormitorio · 1 cama · 1.5 banos compartidos · Wifi · Cocina · Aparcamiento gratis · Lavadora"
        star={4.73}
        price="30€ / noche"
        total="117€ total"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Habitacion privada en Londres"
        title="Apartamento de lujo tipo estudio"
        desc="2 huespedes · 3 dormitorios · 1 cama · 1 bano · Wifi · Cocina"
        star={4.3}
        price="40€ / noche"
        total="157€ total"
      />
    </div>
  );
};

export default SearchPage;
