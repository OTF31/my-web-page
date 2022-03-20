import React from "react";

import ActualizarPerfil from "./ActualizarPerfil.jsx";
import Login from "./Login.jsx"
import Images from "./Images.jsx"

const ContenedorPrincipal = (props) => {
  return (
    <>
      <div className={`md:lg:ml-[20%] ml-[12%]`}>
        <ActualizarPerfil isOpenSideMenu={props.isOpenSideMenu} datosPerfil={props.datosPerfil} />
        <Login />
        <Images />
      </div>
    </>

  )
}

export default ContenedorPrincipal;