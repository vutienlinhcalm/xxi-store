import  React from 'react';
import './brand/Brand';
import Brand from './brand/Brand';
import Product from './product/Product';
import Entertaiment from './entertaiment/Entertaiment';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './HomePage.css'

const HomePage =()=>{
    const[customers,setCustomers] =useState([])
    useEffect(()=>{
        async function getAllCustomer(){
        try{
            const customers = await axios.get("http://127.0.0.1:8000/api/customer")
            console.log(customers.data);
            setCustomers(customers.data);
        }catch(error){
            console.log(error)
        }
    }
    getAllCustomer();
    },[])
    return (
        <div>
            {
                customers.map((customer,i)=>{
                    return (
                        <h2>{customer.Cusname} {customer.password} {customer.email} </h2>
                        
                    )
                })
            }
            <Brand />
            <Product />
            <Entertaiment />
        </div>
    )
}
export default HomePage;