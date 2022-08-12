import React from 'react'
import {Link } from  'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar} from '@mui/material';
import './Header.css'
import Home from './Home';
const Header = () => {
  return (

    <div className='header'>
    <Link to='/'>
      <img
        className='header__icon'
        src='./images/logo.jpeg'
        alt=''
      />
      </Link>
      <div className="header__center">
      <input type="text" />
        <SearchIcon/>
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <Avatar/>
      </div>

    </div>
  )
}

export default Header
