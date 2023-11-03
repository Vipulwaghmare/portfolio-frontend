import {
  SocialActionsInterface,
  SocialStateInterface,
} from "../../interfaces/social/socialContext";
import { SOCIAL_ACTIONS } from "./actions";

const socialReducer = (
  state: SocialStateInterface,
  action: SocialActionsInterface,
) => {
  switch (action.type) {
    case SOCIAL_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default socialReducer;
