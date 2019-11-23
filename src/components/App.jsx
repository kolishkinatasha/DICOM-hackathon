// import React from 'react';
// import style from '../style.css';
// import image from '../image 2.png';
// // import Info from './src/components/Info';
// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// const App = () => {
//   const showFileInput = () => {
//     let fileInput = document.getElementById('fileInput');
//     fileInput.click();
//   };

//   return (
//     <div>
//       <h1>DICOM</h1>
//       <div className="buttons">
//         <button onClick={showFileInput}>Загрузить файл</button>
//         {/* <button>Анализировать</button> */}
//         <Link className="buttonlink" to="/Info">
//           Info
//         </Link>
//         <input type="file" id="fileInput"></input>
//       </div>
//       <img src={image}></img>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import style from '../style.css';
import image from '../image 2.png';

import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

const Standard = () => {
  const getUploadParams = () => {
    return { url: 'https://localhost:4001' };
  };
  console.log(`https://localhost:4001`);
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  return (
    <div>
      <h1>DICOM</h1>
      <div className="buttons">
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
        />
        <input type="file" id="fileInput"></input>
      </div>
      <img src={image}></img>
    </div>
  );
};
<Standard />;
export default Standard;
