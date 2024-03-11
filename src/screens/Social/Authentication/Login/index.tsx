import { useNavigate } from "react-router-dom";
import {
  firebaseSignout,
  firebaseUserLogin,
} from "../../../../services/firebase/firebaseAuth";

const SocialLogin = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    const test = await firebaseUserLogin(
      "vipulwaghmare222@gmail.com",
      "vipul1234",
    );
    console.log({ test });
    navigate("/social/dashboard");
  };

  return (
    <>
      <button onClick={onClick}>onSignIn</button>
      <button
        onClick={async () => {
          const rest = await firebaseSignout();
          console.log({ rest });
        }}
      >
        Signout
      </button>
    </>
  );
};

export default SocialLogin;
