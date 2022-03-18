import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    }
    this.userHandleChange = this.userHandleChange.bind(this);
    this.passHandleChange = this.passHandleChange.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  userHandleChange(e) {
    this.setState({
      user: e.target.value,
    })
  }

  passHandleChange(e) {
    this.setState({
      password: e.target.value,
    })
  }

  submitHandle(e) {
    this.props.updateProfile(this.state.user);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form className="grid flex-row grid-cols-2 p-2 mx-auto mt-8 border-2 h-44 w-64 rounded-2xl font-[Montserrat] border-primary-color" onSubmit={this.submitHandle}>
          <div>
            <label className="block" for="user">
              Usuario:
            </label>
            <input className="pl-2 border-2 " type="text" id="user" value={this.state.user} onChange={this.userHandleChange} />
          </div>

          <div className="row-start-2">
            <label className="block" for="password">
              Contraseña:
            </label>
            <input className="pl-2 border-2" type="password" id="password" value={this.state.password} onChange={this.passHandleChange} />
          </div>

          <button className="col-span-2 col-start-1 row-start-3 p-2 mt-4 mr-2 text-sm text-white border-2 rounded-md justify-self-stretch border-secondary-color bg-primary-color/90 hover:bg-secondary-color hover:border-primary-color hover:text-black hover:scale-95" onClick={() => this.props.updateProfile(this.state.user)}>
            Ingresar
          </button>
        </form>
      </>
    )
  }
}

export default Login;