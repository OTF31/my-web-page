import React from "react";

import MenuLateral from "./componentes/MenuLateral.jsx";
import ContenedorPrincipal from "./componentes/ContenedorPrincipal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSideMenu: true,
    };
    this.updateProfile = this.updateProfile.bind(this);
    this.openSideMenu = this.openSideMenu.bind(this);
  }

  openSideMenu = (e) => {
    this.setState({
      isOpenSideMenu: !this.state.isOpenSideMenu,
    });
  };

  updateProfile = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    const datosPerfil = {
      nombres: "Denis Omar",
      apellidos: "Cuyo Ttito",
      telefono: "962938820",
      direccion: "Av. Los Olivos 15304",
      email: "admin@admin.com",
      fecha: "2022-02-02",
    };

    return (
      <>
        <MenuLateral
          isOpenSideMenu={this.state.isOpenSideMenu}
          openSideMenu={this.openSideMenu}
          datosPerfil={datosPerfil}
        />
        <ContenedorPrincipal
          isOpenSideMenu={this.state.isOpenSideMenu}
          datosPerfil={datosPerfil}
        />
      </>
    );
  }
}

export default App;
