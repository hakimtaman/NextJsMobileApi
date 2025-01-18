import React from 'react'

type Props ={
    title: string;
}
const Tittle = ({title}:Props) => {
  return (
    <div>
        <p className='text-center mt-10 font-semibold text-xl underline underline-offset-8 decoration-teal-400 decoration-[1px]'>
            {title}
        </p>

    </div>
  )
}

export default Tittle