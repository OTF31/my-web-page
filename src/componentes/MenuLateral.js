import React from "react";

class MenuLateral extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <>
        {
          this.state.isOpen ?
            <div className="top-0 left-0 fixed bg-blue-500 w-1/6 h-full p-10" >
              <h2 className="text-2xl text-white">Menu lateral</h2>
            </div > :
            <button onClick={this.openMenu}>
              Menu
            </button>
        }
      </>
    );
  }
}

export default MenuLateral;