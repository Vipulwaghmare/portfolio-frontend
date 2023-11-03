import { createContext, useReducer, FC } from "react";
import socialReducer from "./reducer";
import {
  SocialContextInterface,
  SocialContextProps,
  SocialStateInterface,
} from "../../interfaces/social/socialContext";

const initialState: SocialStateInterface = {};

export const SocialContext = createContext<SocialContextInterface | undefined>(
  undefined,
);

const SocialContextProvider: FC<SocialContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(socialReducer, initialState);

  return (
    <SocialContext.Provider value={{ state, dispatch }}>
      {children}
    </SocialContext.Provider>
  );
};

export default SocialContextProvider;
