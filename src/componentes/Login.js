import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="grid flex-row grid-cols-2 p-2 mx-auto mt-2 border-2 h-36 w-72 rounded-2xl font-[Montserrat]">
          <div>
            <label className="block" for="user">
              Usuario:
            </label>
            <input className="border-2" type="text" id="user" />
          </div>
          <div className="row-start-2">
            <label className="block" for="user">
              Contraseña:
            </label>
            <input className="border-2" type="text" id="user" />
          </div>
        </div>
      </>
    )
  }
}

export default Login;