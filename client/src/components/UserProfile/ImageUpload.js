import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import customFetch from '../../utils/axios'

import Wrapper from '../../assets/Wrappers/ImageUpload';
import { updateProfilePhoto } from '../../features/user/userSlice';

const ImageUpload = () => {
  const dispatch = useDispatch();
  const { user, } = useSelector((store) => store.user);
  const userVerified = user.status === 'Active'

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

  const uploadImage = (base64EncodedImage) => {
    dispatch(updateProfilePhoto({ data: base64EncodedImage }));
    setFileInputState('');
    setPreviewSource('');
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
          : <img src={user?.avatar?.url} alt="avatar" />}
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
          disabled={!userVerified}
        />
        <label htmlFor="fileInput" >Choose a file</label>
        <button className="btn" type="submit" disabled={!userVerified || !selectedFile || selectedFile?.size > 1000000}>
          Save
        </button>
      </form>

    </Wrapper>
  )
}

export default ImageUpload