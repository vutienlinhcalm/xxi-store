import  React from 'react';
import './brand/Brand';
import Brand from './brand/Brand';
import Product from './product/Product';
import Entertaiment from './entertaiment/Entertaiment';
import './HomePage.css'

const HomePage =()=>{
    return (
        <div>
            <Brand />
            <Product />
            <Entertaiment />
        </div>
    )
}
export default HomePage;