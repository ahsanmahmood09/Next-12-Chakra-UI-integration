// Chakra imports
import { useState } from 'react';

// Assets
import { FilePond } from 'react-filepond';

function Dropzone() {
  const [files, setFiles] = useState([]);

  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={false}
      server='/api'
      name='files' /* sets the file input name, it's filepond by default */
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    />
  );
}

export default Dropzone;
