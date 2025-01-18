const getData = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phone")
   if(!res.ok){
    throw new Error("Faild to feach data");
  
   }
   return res.json();
  }
  type Props ={
    _id: number;
    product: object;
}
  export const getSingleProduct = async (_id:number)=>{
    const items = await getData();
    /* console.log(item); */
    const singleItem = items.find( (product:Props )=> product._id === _id )
   return singleItem;
    

  }