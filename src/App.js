import React, { useState } from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Menus from "./components/Menus";

// data
import smoothieMenu from "./data/Juice";
console.log(smoothieMenu)
const App = () => {

const  [menus, setMenus] = useState(smoothieMenu)

  return (
    <div>
      <Nav />
      <Homepage />
      <Menus menus={menus} />
    </div>
  );
};

export default App;
