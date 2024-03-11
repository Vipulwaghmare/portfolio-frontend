// import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
// import { firestore } from "../../../config/firebase";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

const ChatApp = () => {
  // const [messages, setMessages] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // useEffect(() => {
  //   // Subscribe to the chat collection in Firestore
  //   const unsubscribe = firestore
  //     .collection("chat")
  //     .orderBy("timestamp")
  //     .onSnapshot((snapshot) => {
  //       const newMessages = snapshot.docs.map((doc) => doc.data());
  //       setMessages(newMessages);
  //     });
  //   // Clean up the subscription
  //   return () => unsubscribe();
  // }, []);
  // const sendMessage = () => {
  //   // Add a new message to the chat collection in Firestore
  //   firestore.collection("chat").add({
  //     text: inputValue,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setInputValue("");
  // };
  // return (
  //   <div>
  //     <ul>
  //       {messages.map((message, index) => (
  //         <li key={index}>{message.text}</li>
  //       ))}
  //     </ul>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <button onClick={sendMessage}>Send</button>
  //   </div>
  // );
};

export default ChatApp;
