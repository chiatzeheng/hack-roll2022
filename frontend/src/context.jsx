import axios from "axios";
import React, { createContext, useContext, useCallback, useState } from "react";
import { initialState, reducer } from "./reducer";
const AppContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // React.useEffect(() => {
  //   console.log(state);
  //   window.state = state;
  //   console.log(state?.user?.cringe[0].body);
  // }, [state]);

  const extract = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const h = doc.querySelectorAll('table')[2]
    
    return h


  };
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

  const getTransactions = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await axios.get("/api/user/transactions");
      dispatch({ type: "SET_TRANSACTIONS", payload: response.data });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);

  const dateTime = extract(state?.user?.cringe[0].body);
  console.log(dateTime)

  return (
    <AppContext.Provider
      value={{
        loadUser,
        getTransactions,
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
