import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./build/index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className="flex mx-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
      <div className="min-h-screen h-72 w-96 flex items-center justify-center bg-gray-100">
        <div class="max-w-md px-15 py-15 bg-white rounded-lg shadow-lg flex-row space-y-9 mx-auto space-x-4 ">
        <h2 className="text-gray-900 text-5xl font-bold leading-snug">Нужно залогиниться!</h2>
        <button className="flex mx-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={() => setLogin(true)}>
          Войти
        </button>
        </div>
      </div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
