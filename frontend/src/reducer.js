const initialState = {
  user: null,
  transactions: [],
  loading: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: payload };

    case "SET_USER":
      return { ...state, user: payload, listing: null };
    case "CLEAR_USER":
      // localStorage.removeItem("token");
      return { ...state, user: null };
    default:
      return state;
  }
};

export { initialState, reducer };
