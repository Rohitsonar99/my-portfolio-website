import React from 'react'

const Company = () => {
  return (
    <div className='w-full border border-slate-600'>
      <div className="py-[130px] bg-[#55E6C1]">
        <h1 className='flex justify-center text-3xl font-bold mb-5 '>Graduation</h1>
        <p className='flex justify-center text-xl font-semibold'>D.N.Patel College Of Engineering </p> 
        <span className='flex justify-center text-xl font-semibold'>Shahada</span>
          <h3 className='flex justify-center text-xl font-semibold'>B.Tech In Electrical</h3>
      </div>
      <div className="py-[180px] bg-[#F8EFBA]">
      <h1 className='flex justify-center text-3xl font-bold mb-5 '>HSC</h1>
      <p className='flex justify-center text-xl font-semibold'>K.N.Noorani Arts/Sci/Com College</p> 
        <span className='flex justify-center text-xl font-semibold '>Shahada</span>
          <h3 className='flex justify-center text-xl font-semibold '>12th</h3>
      </div>
      <div className="py-[180px] bg-[#55E6C1]">
      <h1 className='flex justify-center text-3xl font-bold mb-5 '>SSC</h1>
      <p className='flex justify-center text-xl font-semibold'>Shree Satpuda Vidyalay</p> 
        <span className='flex justify-center text-xl font-semibold '>Lonkheda,Shahada</span>
          <h3 className='flex justify-center text-xl font-semibold '>10th</h3>
      </div>
    </div>
  )
}

export default Company