import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYpAh4xjo0b_w4RCWSr6-Oa1JT3LwfG1o',
  authDomain: 'matchedin-43d61.firebaseapp.com',
  projectId: 'matchedin-43d61',
  storageBucket: 'matchedin-43d61.appspot.com',
  messagingSenderId: '1070168908730',
  appId: '1:1070168908730:web:dfad853254db7d1f4df383',
  measurementId: 'G-WSYK1DTSQW',
};

// new
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
