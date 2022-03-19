import React from "react";

import ActualizarPerfil from "./ActualizarPerfil.jsx";
import Login from "./Login.jsx"
import Images from "./Images.jsx"

const ContenedorPrincipal = (props) => {
  return (
    <>
      <div className={`${props.isOpenSideMenu ? "ml-[18%]" : "ml-[5%]"}`}>
        <ActualizarPerfil isOpenSideMenu={props.isOpenSideMenu} name="Denis" />
        <Login />
        <Images />
      </div>
    </>

  )
}

export default ContenedorPrincipal;