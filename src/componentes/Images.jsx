import React from "react";

class Images extends React.Component {
  render() {
    return (
      <div className="py-8 mt-4 mb-4 ml-16 mr-4 rounded-md bg-stone-800 px-30">
        <h1 className="mx-10 text-2xl font-bold text-center text-white">
          Imágenes
        </h1>

        <div className="flex flex-wrap justify-around gap-2">
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/300"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/301"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/302"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/303"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/304"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/305"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/306"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/307"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/308"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/309"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/310"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/311"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/312"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/313"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/314"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/315"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/316"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/317"
            alt="" />
          <img className="h-56 border-2 rounded-lg hover:border-cyan-600 hover:border-4 hover:scale-95" src="https://picsum.photos/200/318"
            alt="" />
        </div>

        <div className="w-1/4 mx-auto border-2">
          <button className="px-4 py-2 font-bold bg-blue-600 rounded text-red hover:bg-blue-800">
            Ver más ...
          </button>
        </div>
      </div>
    );
  }
}

export default Images;