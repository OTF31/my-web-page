import React from "react";
import { useState, useEffect, createContext } from "react";

import MenuLateral from "./componentes/MenuLateral.jsx";
import ContenedorPrincipal from "./componentes/ContenedorPrincipal.jsx";

// Crear contexto
export const contextPersonalData = createContext();

const App = () => {
  const datosPerfil = {
    nombres: "Denis Omar",
    apellidos: "Cuyo Ttito",
    telefono: "962938820",
    direccion: "Av. Los Olivos 15304",
    email: "admin@admin.com",
    fecha: "2022-02-02",
  };

  const [isOpenSideMenu, setIsOpenSideMenu] = useState(true);
  const [personalData, setPersonalData] = useState(datosPerfil);

  const openSideMenu = () => {
    setIsOpenSideMenu(!isOpenSideMenu);
  };

  return (
    <contextPersonalData.Provider value={{ personalData, setPersonalData }}>
      <MenuLateral
        isOpenSideMenu={isOpenSideMenu}
        openSideMenu={openSideMenu}
      />
      <ContenedorPrincipal isOpenSideMenu={isOpenSideMenu} />
    </contextPersonalData.Provider>
  );
};

export default App;
