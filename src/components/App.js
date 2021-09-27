import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState('App light')
  function ToggleMode(){
    if (appClass === 'App light'){
      setAppClass('App dark')
    } else setAppClass('App light')
  }
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {() => ToggleMode(appClass)}>{appClass === 'App light' ? 'Dark Mode' : 'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
