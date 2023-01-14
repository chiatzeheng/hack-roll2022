import React from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Global = ({ children }) => {
  const { loadUser, state } = useGlobalContext();
  const navigate = useNavigate();
  React.useEffect(() => {
    loadUser();
  }, []);
  React.useEffect(() => {
    if (state.loading) return;
    if (state.user) {
      navigate("/transactions");
    }
  }, [state.user, state.loading]);

  return <>{children}</>;
};

export default Global;
