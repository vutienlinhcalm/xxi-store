import  React from 'react';
import './Header.css'
import xxilogo from '../../asset/images/XXI-Logo.webp'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {

    return(
        
        <div className='header'>
            <nav className='nav'>
                <div className='nav__category'>
                    <div className='nav__category__link'>
                        <a href='https://xxivstore.com/' className=''>trang chủ</a>
                    </div>
                    <div className='nav__category__link'>
                        <a href='https://xxivstore.com/' className=''>giới thiệu</a>
                    </div >
                    <div className='nav__category__link'>
                        <a href='https://xxivstore.com/' className=''>thương hiệu</a>
                    </div>
                    <div className='nav__category__link'>
                        <a href='https://xxivstore.com/' className=''>sản phẩm</a>
                    </div>
                    <div className='nav__category__link'>
                        <a href='https://xxivstore.com/' className=''>blog</a>
                    </div>
                </div>
                <div className = "nav__logo">
                    <img src={xxilogo} alt="logo"></img>
                </div>
                <div className='nav__tool'>
                    <div className='nav__tool__search nav__tool__link'>
                        <SearchIcon />
                    </div>
                    <div className='nav__tool__user nav__tool__link'>
                        <PersonIcon />
                    </div>
                    <div className='nav__tool_cart nav__tool__link'>
                        <ShoppingCartIcon />
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;