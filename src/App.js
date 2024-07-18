import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import classes from "./components/theme.css";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
