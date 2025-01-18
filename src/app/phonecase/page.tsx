import React from 'react'
import Tittle from '../components/Tittle';
import Products from '../components/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const getData = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phonecase")
   if(!res.ok){
    throw new Error("Faild to feach data");
  
   }
   return res.json();
  }
  

const PhoneCase = async () => {
    const products = await getData();
  return (
    <div>
        <Header/>
            <Tittle title="Make your phone looks cools with beautiful phonecase"/>    
            <Products myProducts={products}/>    
        <Footer/>

    </div>
  )
}

export default PhoneCase