import { initializeApp,  } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs, getDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

initializeApp(firebaseConfig)

const db = getFirestore()

export {
    db,
    addDoc,
    collection,
    getDocs,
    getDoc,
    doc,
    deleteDoc,
    updateDoc
}