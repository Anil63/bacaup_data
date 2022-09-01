import React, { useReducer, createContext } from "react";

type Appstate = typeof initialState;
type Action =
  | { type: "SET_INPUT_VALUE"; payload: number }
  | { type: "SET_INPUT_VALUE_TO_100" };

interface InputProviderProps {
  children: React.ReactNode;
}
const initialState = {
  inputValue: 0,
};

const reducer = (state: Appstate, action: Action) => {
  // const {type,payload} = action; remove

  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SET_INPUT_VALUE_TO_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};

const InputContex = createContext<{
  state: Appstate;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function InputContexProvider({ children }: InputProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputContex.Provider value={{ state, dispatch }}>
      {children}
    </InputContex.Provider>
  );
}

export { InputContex, InputContexProvider };
