import { createFirebaseUser } from "../../../../services/firebase/firebaseAuth";

const SocialSignup: React.FC = () => {
  const onSignup = async () => {
    const test = await createFirebaseUser(
      "vipulwaghmare222@gmail.com",
      "vipul1234",
    );
    console.log({ test });
  };
  return (
    <>
      <button onClick={onSignup}>test</button>
    </>
  );
};

export default SocialSignup;
