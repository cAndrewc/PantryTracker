import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxa-3JVf3I_xFHrBYNcTHyjPej7KM0bzw",
  authDomain: "pantryapp-f9561.firebaseapp.com",
  projectId: "pantryapp-f9561",
  storageBucket: "pantryapp-f9561.appspot.com",
  messagingSenderId: "957092381491",
  appId: "1:957092381491:web:4f23a73db3c47665643446"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };