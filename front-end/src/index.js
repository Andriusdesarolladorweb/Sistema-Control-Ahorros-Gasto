import React from "react";
import ReactDOM from 'react-dom';
import Menu from "./componte/Menu.js"
import Citas from "./componte/crud_citas/citas.js";
import 'bootstrap/dist/css/bootstrap.min.css';



// Variable para controlar qué componente se debe renderizar
let currentComponent = <Citas />;

// Función para cambiar el componente a renderizar
const changeComponent = (component) => {
  currentComponent = component;
  renderApp();
};

// Función para renderizar la aplicación
const renderApp = () => {
  ReactDOM.render(
    <div>
      <Menu changeComponent={changeComponent} />
      {currentComponent}
    </div>,
    document.getElementById("root"),
  );
};

// Renderizar la aplicación por primera vez
renderApp();
