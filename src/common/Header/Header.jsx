import React from 'react';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(props) {
  return <div className="Header">
    <div className='leftSide'>
        <div className='frame1'>
            <MenuIcon className='menu'/>
        </div>
        <div className='youTube'>
            YOUTUBE
        </div>
    </div>
    <div className='centerSide'>
        <div className='searchBar'>
            <div className='inputArea'></div>
            <div className='submitButton'>
                <SearchIcon/>
            </div>
            <div className='searchBarRecommendedList'></div>
        </div>
    </div>
    <div className='rightSide'>
        <div className='loginButton'>
            <div className='accountCircle'>
                <AccountCircleIcon/>
            </div>
            <div className='login'>
                로그인
            </div>
        </div>
    </div>
  </div>;
}


export default Header;