import React from "react";

import "./App.css";

import MenuLateral from "./componentes/MenuLateral.js";
import Login from "./componentes/Login.js"
import Images from "./componentes/Images.js"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Denis Omar",
      id: "182906"
    }
    this.updateProfile = this.updateProfile.bind(this);
  }

  updateProfile = (user) => {
    this.setState({
      user: user,
    })
  }

  render() {
    return (
      <>
        <MenuLateral user={this.state.user} id={this.state.id} />
        <Login updateProfile={this.updateProfile} />
        <Images />
      </>
    );
  }
}

export default App;
