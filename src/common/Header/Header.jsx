import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecommendListItem from './RecommendListItem';

function Header(props) {
    const [isOpenedSearchBar, setOpenSearchBar] = useState(false);
    const toggleSearchBar = e =>{
        setOpenSearchBar(isOpened => !isOpened);
    }


    return <div className="Header">
        <div className='leftSide'>
            <div className='frame1'>
                <MenuIcon className='menu'/>
            </div>
            <Link className='youTube' to="/">
                YOUTUBE
            </Link>
        </div>
        <div className='centerSide'>
            <form className='searchBar' onClick={toggleSearchBar}>
                {isOpenedSearchBar &&
                    <div className='searchBarRecommendedList'>
                        <RecommendListItem/>
                    </div>}
                <input type="text" className='inputArea' placeholder='검색'></input>
                <button type="submit" className='submitButton'>
                    <SearchIcon/>
                </button>
            </form>
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