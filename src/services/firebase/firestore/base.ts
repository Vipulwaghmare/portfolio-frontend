import { collection, addDoc, getDocs, setDoc, doc, updateDoc, onSnapshot, query, QueryConstraint } from "firebase/firestore";
import { firestore as db } from "../../../config/firebase";

export const addDataToFirestore = async (collectionName: string, data: object) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// overwrites the document
export const setDataToFirestore = async (collectionName: string, data: object, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const response = await setDoc(docRef, data);
    console.log("Document written with ID: ", response);
  } catch (e) {
    console.error("Error seting document: ", e);
  }
};

export const updateDocInFirestore = async (collectionName: string, data: object, docId: string) => {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, data);
}

export const getFirestoreData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export const firestoreSnapshot = (collectionName: string, queryConstraint: QueryConstraint[]) => {
  const q = query(collection(db, collectionName), ...queryConstraint);
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        console.log("New city: ", change.doc.data());
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
      }
      if (change.type === "removed") {
        console.log("Removed city: ", change.doc.data());
      }
    });
  });
  return unsubscribe;
}