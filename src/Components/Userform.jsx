import React, { useState } from 'react';
import './Style/Userform.css'

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
    socialMediaLinks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profileImg: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, for example, send the data to the server
    console.log(formData);
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
      socialMediaLinks: '',
    });
  };

  return (
    <>
    <div className="user-profile-form-container">
    
      <div className="user-card">
        <div className="left-side">
        <label htmlFor="profileImage">
              <img
                src={
                  formData.profileImg
                    ? URL.createObjectURL(formData.profileImg)
                    : 'https://via.placeholder.com/150'
                }
                alt="Profile"
                className="profile-image"
              />
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleFileChange}
            />
        </div>
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
              <label htmlFor="socialLinks">Social Media Links</label>
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
