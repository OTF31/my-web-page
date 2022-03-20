import React from "react";

import ActualizarPerfil from "./ActualizarPerfil.jsx";
import Login from "./Login.jsx"
import Images from "./Images.jsx"

const ContenedorPrincipal = (props) => {
  return (
    <>
      <div className={`${props.isOpenSideMenu ? "ml-[18%]" : "ml-[10%]"}`}>
        <ActualizarPerfil isOpenSideMenu={props.isOpenSideMenu} />
        <Login />
        <Images />
      </div>
    </>

  )
}

export default ContenedorPrincipal;