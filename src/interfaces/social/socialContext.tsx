import { User } from "firebase/auth";
import { Dispatch } from "react";

export interface SocialStateInterface {
  user?: User;
}

export interface SocialActionsInterface {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export interface SocialContextInterface {
  state: SocialStateInterface;
  dispatch: Dispatch<SocialActionsInterface>;
}
