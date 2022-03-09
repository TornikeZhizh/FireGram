import { useState, UseEffect, useEffect } from "react";
import { projectFireStore } from "../firebase/config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

const useFireStore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(projectFireStore, collectionName);

    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collectionName]);
  return docs;
};

export default useFireStore;
