import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD4Tk6t9q3jI8Oun29hyWwmyaJKiRk0ey8",
    authDomain: "lfb-dronubilurin.firebaseapp.com",
    projectId: "lfb-dronubilurin",
    storageBucket: "lfb-dronubilurin.firebasestorage.app",
    messagingSenderId: "783851315001",
    appId: "1:783851315001:web:ff88a977a006ac689412e8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Get Firebase services
export const storage = getStorage(app);

export { auth, db };
export default app; 