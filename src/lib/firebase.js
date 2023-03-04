import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// import seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCwWNBBjF_nLF5ZvWqc8Iyg1vlJvYcGPT4",
  authDomain: "razum-110bc.firebaseapp.com",
  projectId: "razum-110bc",
  storageBucket: "razum-110bc.appspot.com",
  messagingSenderId: "625048968840",
  appId: "1:625048968840:web:12fa950e50eec6d2de093d"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// seedDatabase(firebase);

export { firebase, FieldValue };
