import { createContext, useReducer } from "react";
import socialReducer from "./reducer";
import {
  SocialContextInterface,
  SocialStateInterface,
} from "../../interfaces/social/socialContext";
import { IWrapper } from "../../interfaces/common";

const initialState: SocialStateInterface = {};

export const SocialContext = createContext<SocialContextInterface | null>(null);

const SocialContextProvider = ({ children }: IWrapper) => {
  const [state, dispatch] = useReducer(socialReducer, initialState);

  return (
    <SocialContext.Provider value={{ state, dispatch }}>
      {children}
    </SocialContext.Provider>
  );
};

export default SocialContextProvider;
