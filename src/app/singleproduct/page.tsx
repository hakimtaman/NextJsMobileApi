import { getSingleProduct } from '@/helpers';
import React from 'react'
type Props = {
  searchParams: {[key: string]:string | string[] | undefined};
};
const SingleProduct = async ({searchParams}: Props) => {
    /* console.log(searchParams._id); */
    const idString = searchParams?._id;
    const _id =Number (idString);
 /*    console.log(typeof idNum); */
 const product = await getSingleProduct(_id);
 
  return (
    <div className='max-w-screen-xl mx-auto grid items-center grid-cols-1  md:grid-cols-2 xl:grid-cols-2 gap-10 py-10'>
        <img src={product.image} alt="" />

        <div className=' flex flex-col gap-3 px-8 pb-2'>
            <p className='text-xl font-semibold pb-3'>{product.title}</p>
            <p>{product.description}</p>
            <p className='font-semibold'>Price: ${product?.price}</p>
            <p>Category: {product?.category}</p>
            <p>Status: {product?.isNew && "New item"}</p>
        </div>
        

    </div>
  )
}

export default SingleProduct;