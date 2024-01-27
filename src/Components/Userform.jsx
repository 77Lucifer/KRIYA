import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './CropUtils'; // Import the getCroppedImg function
import './Style/Userform.css';

const Userform = () => {
  const [formData, setFormData] = useState({
    profileImg: null,
    username: '',
    email: '',
    bio: '',
    description: '',
    chatPrice: '',
    callPrice: '',
    videoPrice: '',
    Instagram: '',
    Facebook: '',
    Linkeden: '',
    youtube: '',
  });

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  const onCropChange = (crop) => setCrop(crop);
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onZoomChange = (zoom) => setZoom(zoom);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profileImg: file,
    });
    setShowCropper(true);
  };

  const handleCropImage = async () => {
    try {
      const croppedImage = await getCroppedImg(formData.profileImg, croppedAreaPixels);
      setCroppedImage(croppedImage);
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  const handleDone = () => {
    setShowCropper(false);
    handleCropImage(); // Trigger cropping when the user clicks "Done"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, for example, send the data to the server
    console.log(formData, croppedImage);
    // Reset the form after submission
    setFormData({
      profileImg: null,
      username: '',
      email: '',
      bio: '',
      description: '',
      chatPrice: '',
      callPrice: '',
      videoPrice: '',
      Instagram: '',
      Facebook: '',
      Linkeden: '',
      youtube: '',
    });
    setCroppedImage(null);
  };

  return (
    <>
      <div className="user-profile-form-container">
        <div className="user-card">
          <div className="left-side">
            {showCropper && (
              <div>
                <Cropper
                  image={URL.createObjectURL(formData.profileImg)}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={onCropChange}
                  onCropComplete={onCropComplete}
                  onZoomChange={onZoomChange}
                />
                <button onClick={handleDone}>Done</button>
              </div>
            )}
            {!showCropper && (
              <label htmlFor="profileImage">
                <img
                  src={
                    croppedImage
                      ? croppedImage
                      : formData.profileImg
                      ? URL.createObjectURL(formData.profileImg)
                      : 'https://via.placeholder.com/150'
                  }
                  alt="Profile"
                  className="profile-image"
                />
              </label>
            )}
            <input type="file" id="profileImage" accept="image/*" onChange={handleFileChange} />
          </div>``
        <div className="right-side">
          {/* Form section */}
          <form onSubmit={handleSubmit}>
            <div className="label-input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>

            <div className="label-input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>

            <div className="label-input-group">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" rows="4"></textarea>
            </div>

            <div className="label-input-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" rows="4"></textarea>
            </div>

            <div className="label-input-group">
              <label htmlFor="chatPrice">Chat Price</label>
              <input type="number" id="chatPrice" />
            </div>

            <div className="label-input-group">
              <label htmlFor="callPrice">Call Price</label>
              <input type="number" id="callPrice" />
            </div>

            <div className="label-input-group">
              <label htmlFor="videoPrice">Video Price</label>
              <input type="number" id="videoPrice" />
            </div>

            <div className="label-input-group">
              <label htmlFor="Instagram">Instagram</label>
              <input type="text" id="socialLinks" />
            </div>


            <div className="label-input-group">
              <label htmlFor="Facebook">Facebook</label>
              <input type="text" id="socialLinks" />
            </div>

            
            <div className="label-input-group">
              <label htmlFor="Linkeden">Linkden</label>
              <input type="text" id="socialLinks" />
            </div>


            
            <div className="label-input-group">
              <label htmlFor="Youtube">Youtube</label>
              <input type="text" id="socialLinks" />
            </div>



            <button className='btn u-button' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Userform;
