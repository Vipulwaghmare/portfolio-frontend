import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseApp from "../../config/firebase";

export const firebaseAuth = getAuth(firebaseApp);

export const createFirebaseUser = async (email: string, password: string) => {
  try {
    const response = createUserWithEmailAndPassword(firebaseAuth, email, password)
    return response;
  } catch (e) {
    console.log({ e })
    return { error: e }
  }
}
