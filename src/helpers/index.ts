const getData = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phone")
   if(!res.ok){
    throw new Error("Faild to feach data");
  
   }
   return res.json();
  }
  
  export const getSingleProduct = async (_id:number)=>{
    const items = await getData();
    /* console.log(item); */
    const singleItem = items.find( (product: )=> product._id === _id )
   return singleItem;
    

  }