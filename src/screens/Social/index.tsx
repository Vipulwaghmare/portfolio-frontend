import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SocialContextProvider from "../../utils/socialContext";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../services/firebase/firebaseAuth";
import useSocialContext from "../../utils/socialContext/useSocialContext";
import { SOCIAL_ACTIONS } from "../../utils/socialContext/actions";

const SocialAuth = () => {
  const { dispatch } = useSocialContext();

  useEffect(() => {
    const subscriber = onAuthStateChanged(firebaseAuth, (user) => {
      dispatch({ type: SOCIAL_ACTIONS.SET_USER, payload: user });
    });
    return subscriber;
  }, [dispatch]);

  return <Outlet />;
};

const Social: React.FC = () => {
  return (
    <SocialContextProvider>
      <SocialAuth />
    </SocialContextProvider>
  );
};

export default Social;
