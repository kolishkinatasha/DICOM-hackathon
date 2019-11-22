import React from 'react';
import style from '../style.css';
import image from '../image 2.png';
const App = () => {
  const showFileInput = () => {
    let fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  return (
    <div>
      <h1>DICOM</h1>
      <div className="buttons">
        <button onClick={showFileInput}>Загрузить файл</button>
        <button>Анализировать</button>
        <input type="file" id="fileInput"></input>
      </div>
      <img src={image}></img>
    </div>
  );
};

export default App;
