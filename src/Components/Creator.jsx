import React, { useState } from 'react'
import './Style/Creator.css'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Creator = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Your creator data with unique IDs
  const creators = [
    {
      id: 1,
      name: 'Aubree Valentine',
      image:
        'https://firebasestorage.googleapis.com/v0/b/creators-dev-prod.appspot.com/o/profile_images%2F114cc239-a903-49d9-9272-77b009d7c868?alt=media&token=c66d9b6c-7cab-46c1-8bc4-a459ecc6a4ff',
      profession: 'Actor',
    },
    {
      id: 2,
      name: 'Connect and Collabs',
      image:
        'https://firebasestorage.googleapis.com/v0/b/creators-dev-prod.appspot.com/o/profile_images%2F2dce5e8b-da2e-4573-aa6c-274be2118108?alt=media&token=b2a699b8-5493-41d7-82ff-3517d699578d',
      profession: 'Influencer, Model',
    },
    {
      id: 3,
      name: 'Rion king',
      image:
        'https://firebasestorage.googleapis.com/v0/b/creators-dev-prod.appspot.com/o/profile_images%2F72ed31c2-a7bb-4ab0-a77b-b972591769c9?alt=media&token=d5e86b68-3d10-4765-871e-0c11fe361116',
      profession: 'Photographer',
    },
  ];

  const filteredCreators = creators.filter((creator) =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <Nav />
      <div className="creator-main">
        <h1>Our Creator</h1>
       <div className="creator-inner">
          <div className="input">
            <i class="fa-solid fa-user"></i>
            <input
              placeholder="Search"
              type="search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="creator-box">
           {filteredCreators.map((creator) => (
          <div
                className="creator"
                key={creator.id}
              > <Link to='/Creatorcard'>    
                <img src={creator.image} alt="" />
                <h3>{creator.name}</h3>
                <h5>{creator.profession}</h5>
              </Link>
              </div>
            ))} 
          </div>
        </div>
        <svg
          id="wave"
          style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
          viewBox="0 0 1440 220"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
              <stop stopColor="rgba(243.936, 243.936, 243.936, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 0px)', opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,176L80,150.3C160,125,320,73,480,73.3C640,73,800,125,960,124.7C1120,125,1280,73,1440,73.3C1600,73,1760,125,1920,143C2080,161,2240,147,2400,124.7C2560,103,2720,73,2880,84.3C3040,95,3200,147,3360,165C3520,183,3680,169,3840,168.7C4000,169,4160,183,4320,179.7C4480,176,4640,154,4800,154C4960,154,5120,176,5280,183.3C5440,191,5600,183,5760,165C5920,147,6080,117,6240,113.7C6400,110,6560,132,6720,121C6880,110,7040,66,7200,73.3C7360,81,7520,139,7680,150.3C7840,161,8000,125,8160,124.7C8320,125,8480,161,8640,179.7C8800,198,8960,198,9120,165C9280,132,9440,66,9600,55C9760,44,9920,88,10080,95.3C10240,103,10400,73,10560,73.3C10720,73,10880,103,11040,106.3C11200,110,11360,88,11440,77L11520,66L11520,220L11440,220C11360,220,11200,220,11040,220C10880,220,10720,220,10560,220C10400,220,10240,220,10080,220C9920,220,9760,220,9600,220C9440,220,9280,220,9120,220C8960,220,8800,220,8640,220C8480,220,8320,220,8160,220C8000,220,7840,220,7680,220C7520,220,7360,220,7200,220C7040,220,6880,220,6720,220C6560,220,6400,220,6240,220C6080,220,5920,220,5760,220C5600,220,5440,220,5280,220C5120,220,4960,220,4800,220C4640,220,4480,220,4320,220C4160,220,4000,220,3840,220C3680,220,3520,220,3360,220C3200,220,3040,220,2880,220C2720,220,2560,220,2400,220C2240,220,2080,220,1920,220C1760,220,1600,220,1440,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </>
  )
}



export default Creator
