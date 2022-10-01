import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDeIcEcf77LOyEAq90cxzPgp7DsfX4HQr4",
    authDomain: "tantan-b2f9c.firebaseapp.com",
    projectId: "tantan-b2f9c",
    storageBucket: "tantan-b2f9c.appspot.com",
    messagingSenderId: "152824680126",
    appId: "1:152824680126:web:b13d77597941d088ad58ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage();