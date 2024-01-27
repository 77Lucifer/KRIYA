import React, { useState } from 'react';
import ReactCrop from 'react-easy-crop';
import { getCroppedImg } from './CropUtils';

const Crop = ({ onCropComplete }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  const handleSubmit = async () => {
    if (imageSrc) {
      const croppedImage = await getCroppedImg(imageSrc, crop);
      onCropComplete(croppedImage);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {imageSrc && (
        <>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ReactCrop
              src={imageSrc}
              crop={crop}
              onCropChange={handleCropChange}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                width: `${crop.width}px`,
                height: `${crop.height}px`,
                border: '1px dashed white', // Optional: add a dashed border for better visibility
                pointerEvents: 'none',
                zIndex: 1000,
              }}
            ></div>
          </div>
          <button onClick={handleSubmit}>Done</button>
        </>
      )}
    </div>
  );
};

export default Crop;