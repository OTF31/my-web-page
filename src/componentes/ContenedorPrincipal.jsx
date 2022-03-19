import React from "react";

import ActualizarPerfil from "./ActualizarPerfil.jsx";
import Login from "./Login.jsx"
import Images from "./Images.jsx"

const ContenedorPrincipal = (props) => {
  return (
    <>
      <div className={`${this.props.isOpenSideMenu ? "ml-40" : "ml-1"}`}>
        <ActualizarPerfil isOpenSideMenu={this.props.isOpenSideMenu} name="Denis" />
        <Login />
        <Images />
      </div>
    </>

  )
}

export default ContenedorPrincipal;