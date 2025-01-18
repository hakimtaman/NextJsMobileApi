"use client";
import React from "react";
import Link from "next/link"; 

interface ProductProps {
  _id: number;
  title: string;
  description: string;
  image:string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props{
  myProducts: ProductProps[];
}
 const Products = ({myProducts}: Props) => {
  /*   console.log(myProducts); */
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {myProducts.map( (product)=>(
        
          <Link href={{pathname:"/singleproduct", query:{_id: product?._id}}} key={product?._id} > 
            <div className=" border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
              <img 
                src={product?.image} 
                width={500}
                height={500}
                alt ="product image"
                className="w-full h-80 object-cover"
              />
              <div className="px-4 pt-2 pb-2 flex flex-col gap-1">

                <p className="text-gray-600">{product?.title}</p>
                <p className="font-semibold">${product?.price}</p>
                <div className=" flex items-center justify-between">
                  <button>Add to Cart</button>
                  <button className=" uppercase text-xs font-semibold hover:text-blue-600 duration-200">More Info</button>
                </div>

              </div>

            </div>
          
          </Link>

      ))}
    </div>
  )
}

export default Products;