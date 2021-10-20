import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/storage';


// import seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBHUZSd1AWTq88glSA6eV65W67mgrkqzJ4",
  authDomain: "razum-3a1e6.firebaseapp.com",
  projectId: "razum-3a1e6",
  storageBucket: "razum-3a1e6.appspot.com",
  messagingSenderId: "219703900822",
  appId: "1:219703900822:web:b0dee87769cf4d049520b7"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// seedDatabase(firebase);

export { firebase, FieldValue };
