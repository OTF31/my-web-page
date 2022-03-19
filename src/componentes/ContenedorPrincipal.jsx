import React from "react";

import ActualizarPerfil from "./ActualizarPerfil.jsx";
import Login from "./Login.jsx"
import Images from "./Images.jsx"

class ContenedorPrincipal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className={this.props.isOpenSideMenu ? "ml-40" : "ml-1"}>
          <ActualizarPerfil />
          <Login />
          <Images />
        </div>
      </>

    )
  }
}

export default ContenedorPrincipal;