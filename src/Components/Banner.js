import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './Banner.css';
import Search from './Search';
// import {useHistory} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  // const history=useHistory();
  
const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
      {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton">
          {showSearch ? 'Hide' : 'SearchDates'}
        </Button>
     
      </div>
  
      <div className="banner__info">
        <h1>Get Out and Stretch your imagination</h1>
        <h5>
          Plan a differ kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button onClick={()=>navigate('/search')} variant="outlined ">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
