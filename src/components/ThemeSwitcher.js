import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../reducers/themeActions";

export const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className={theme}>
      Now: {theme}
      <button className="btn_switcher" onClick={() => dispatch(toggleTheme())}>
        Change theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
