import "./App.css";
import MenuLateral from "./componentes/MenuLateral.js";

const App = () => {
  return (
    <div className="mx-auto mt-8">
      <MenuLateral />
      <h1 className="text-4xl text-center">
        Contenido principal
      </h1>
    </div>
  );
}

export default App;
