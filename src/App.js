import "./App.css";
import Title from "./components/title";
import UploadForm from "./components/uploadForm";
import ImageGrid from "./components/imageGrid";
import React, { useEffect, useState } from "react";
import Modal from "./components/modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <React.Fragment>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </React.Fragment>
  );
}

export default App;
