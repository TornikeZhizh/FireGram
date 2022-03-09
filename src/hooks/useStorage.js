import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFireStore,
  timeStamp
} from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const collectionRef = collection(projectFireStore, "images");
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state-changed",
      (snap) => {
        let perc = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(perc);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((u) => {
          setUrl(u);
          addDoc(collectionRef, { url: u, createdAt: serverTimestamp() });
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
