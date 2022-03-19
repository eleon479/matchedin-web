import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYpAh4xjo0b_w4RCWSr6-Oa1JT3LwfG1o',
  authDomain: 'matchedin-43d61.firebaseapp.com',
  projectId: 'matchedin-43d61',
  storageBucket: 'matchedin-43d61.appspot.com',
  messagingSenderId: '1070168908730',
  appId: '1:1070168908730:web:dfad853254db7d1f4df383',
  measurementId: 'G-WSYK1DTSQW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
