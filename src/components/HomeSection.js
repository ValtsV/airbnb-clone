import React, { Fragment } from "react";
import Card from "./Card";
import "./HomeSection.scss";

const HomeSection = () => {
  return (
    <Fragment>
      <div className="homesection-section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Experiencias Online"
          desc="Actividas unicas que podemos hacer juntos, dirigidas por un mundo de anfitriones"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Estancias unicas"
          desc="Espacios que son mas que lugares para dormir."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Casas enteras"
          desc="Espacios privados comodos con sitio para amigos o familia."
        />
      </div>
      <div className="homesection-section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Piso de 3 dormitorios"
          desc="Anfitiron excelente con vistas preciosas de zona playera en Bournemouth."
          price="130€/noche"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse en Londres"
          desc="Disfruta de vistas impresionantes de Londres con este penthouse increible."
          price="350€/noche"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="Piso de 1 dormitorio"
          desc="Anfitrion perfecto con comodidades excelentes y centro comercial fabuloso cercano."
          price="70€/noche"
        />
      </div>
    </Fragment>
  );
};

export default HomeSection;
