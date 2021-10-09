import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import {menus} from "./Data"

function App() {
  const [menu, setMenu] = useState(menus);
  return (
    <div className="App">
      <Header />
      <Nav filter={setMenu} data={menus}/>

      <main className="flexed">
        {menu.map((menu) => {
          return <Cards key={menu.id} menu={menu} />;
        })}
      </main>
    </div>
  );
}

export default App;
