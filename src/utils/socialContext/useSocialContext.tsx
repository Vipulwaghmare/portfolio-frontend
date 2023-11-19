import { useContext } from "react";
import { SocialContext } from ".";

const useSocialContext = () => {
  const socialData = useContext(SocialContext);
  if (socialData === null) {
    throw new Error("Context should be used inside the provider.");
  }
  return socialData;
};

export default useSocialContext;
