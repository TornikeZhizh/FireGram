import { useState } from "react";
import ProgressBar from "./progressBar";

const UploadForm = ({ user }) => {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg"];
  const [error, setError] = useState(null);

  const onChangeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select valid file (png, jpg, jpes)");
    }
  };
  return (
    <form>
      <label className="uploadForm">
        <input
          className="uploadFormInput"
          type="file"
          onChange={onChangeHandler}
        />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} user={user} />}
      </div>
    </form>
  );
};

export default UploadForm;
