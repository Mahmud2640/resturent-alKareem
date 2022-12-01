import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD0IGGogHZMW6T5op7qi7Gg5YBBuV2NuoM",
  authDomain: "alkareem-2022.firebaseapp.com",
  databaseURL: "https://alkareem-2022-default-rtdb.firebaseio.com",
  projectId: "alkareem-2022",
  storageBucket: "alkareem-2022.appspot.com",
  messagingSenderId: "770889823394",
  appId: "1:770889823394:web:d05fad31ba12cbf04593fb",
};

// Initialize Firebase
const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, firestore, storage };
