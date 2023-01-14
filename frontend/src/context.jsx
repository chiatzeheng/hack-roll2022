import axios from "axios";
import React, { createContext, useContext, useCallback } from "react";
import { initialState, reducer } from "./reducer";
const AppContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    console.log(state);
  }, [state]);

  const loadUser = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
      }
      const response = await axios.get("/api/auth/user");
      dispatch({ type: "SET_USER", payload: response.data });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "CLEAR_USER" });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        loadUser,
        dispatch,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
export { useGlobalContext };
