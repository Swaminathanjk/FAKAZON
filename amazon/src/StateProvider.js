// StateProvider.jsx
import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./reducer";

const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
