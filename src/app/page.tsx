import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Tittle from "./components/Tittle";

const getData = async()=>{
  const res = await fetch("https://jsonserver.reactbd.com/phone")
 if(!res.ok){
  throw new Error("Faild to feach data");

 }
 return res.json();
}


export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
 
    <main>
     <Header/>
      <Tittle title="Get your phone Case"/>
      <Products myProducts ={products}/>
      <Footer/>
    </main>
  );
}
