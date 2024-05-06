// App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable to determine whether the app is in dark mode or light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark mode and light mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Determining the class name based on the current mode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      {/* Render the Header component and pass toggleDarkMode function as a prop */}
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
