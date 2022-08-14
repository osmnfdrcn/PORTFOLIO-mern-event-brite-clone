import React, { useState } from 'react'
import Wrapper from '../../assets/Wrappers/ImageUpload';

const ImageUpload = () => {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 500000) { return }
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error('Error');
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-Type': 'application/json' },
      });
      setFileInputState('');
      setPreviewSource('');
    } catch (err) {
      console.error(err);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };


  return (
    <Wrapper>
      {/* <p>Profile Photo </p> */}
      <div className='image-container'>
        {previewSource
          ? (
            <img
              src={previewSource}
              alt="chosen"
            // style={{ height: '200px' }}
            />)
          : <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50XUNVmCwLBsiboW_ezv-O6FK2KRmh38SQ&usqp=CAU`} alt="avatar" />}
      </div>
      <form onSubmit={handleSubmitFile} className="upload-form">
        <input
          id="fileInput"
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="inputfile"
        />
        <label htmlFor="fileInput">Choose a file</label>
        <button className="btn" type="submit" disabled={!selectedFile || selectedFile?.size > 1000000}>
          Save
        </button>
      </form>

    </Wrapper>
  )
}

export default ImageUpload