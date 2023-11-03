import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../config/firebase";

export const firebaseAuth = getAuth(firebaseApp);

export const createFirebaseUser = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    return response;
  } catch (e) {
    console.log({ e })
    return { error: e }
  }
}

export const firebaseUserLogin = async (email: string, password: string) => {
  try {
    const response = signInWithEmailAndPassword(firebaseAuth, email, password);
    return response;
  } catch (e) {
    return { error: e }
  }
}