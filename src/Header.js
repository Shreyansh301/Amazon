import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Header() {
  return (
    <div className='header'>
      <img 
      className="header_logo"
      src="logo.png"
      /> 

    <div
    className="header_search">
        <input
        className="header_searchInput" 
        type="text" />
        <SearchIcon
        className="header_searchIcon" />
    </div>

    <div className="header_nav">
        <div className='header_option'>
             <span className='header_optionlineOne'>Hello Guest</span>
             <span className='header_optionlinetwo'>Sign In</span>
        </div>

        <div className='header_option'>
            <span className='header_optionlineOne'>Returns</span>
             <span className='header_optionlinetwo'>& Orders</span>
        </div>

        <div className='header_option'>
             <span className='header_optionlineOne'>Your</span>
             <span className='header_optionlinetwo'>Prime</span>
        </div>
      
        <div className='header_optionBasket'>
          <AddShoppingCartIcon />
          <span className='header_optionlinetwo header_basketCount'>0</span>
        </div>


    </div>
    </div>
  )
}

export default Header
