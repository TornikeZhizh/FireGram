import "./App.css";
import Title from "./components/title";
import UploadForm from "./components/uploadForm";
import ImageGrid from "./components/imageGrid";
import React, { useEffect, useState } from "react";
import Modal from "./components/modal";
import Login from "./components/login";
import LoginInfo from "./components/loginInfo";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <>
      <Title />
      {user && <LoginInfo user={user} />}
      {!user && <Login user={user} setUser={setUser} />}
      {user && <UploadForm user={user} />}
      {user && <h2 className="text-center">Your Pictures</h2>}
      {user && <ImageGrid setSelectedImg={setSelectedImg} user={user} />}
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
}

export default App;
