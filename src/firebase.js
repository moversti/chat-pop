import firebase from 'firebase/app';
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyDTw0Li4ov52btSmxz7ze8UpQskznSMPTg",
    authDomain: "chat-pop.firebaseapp.com",
    databaseURL: "https://chat-pop.firebaseio.com",
    projectId: "chat-pop",
    storageBucket: "chat-pop.appspot.com",
    messagingSenderId: "147424514677",
    appId: "1:147424514677:web:4e48f4185b914820"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.database()
export default db;
