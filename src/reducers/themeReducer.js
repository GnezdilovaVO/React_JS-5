import { TOGGLE_THEME } from "./themeActions";

const initState = {
  theme: "light",
};
export const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
