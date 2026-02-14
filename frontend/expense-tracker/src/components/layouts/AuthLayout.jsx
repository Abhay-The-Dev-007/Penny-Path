import React from 'react'
import Card2 from '../../assets/images/Card2.jpg'
import { LuTrendingUpDown } from 'react-icons/lu'

const AuthLayout = ({ children }) => {
  return <div className='flex'>
    <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-2xl font-bold text-black flex items-center gap-2'><img src='/wallet.png' width={40} height={40}/>Penny Path</h2>
        {children}
    </div>

    <div className='hidden md:block w-[40vw] h-screen bg-red-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative  '>
        <div className='w-48 h-48 rounded-[40px] bg-red-600 absolute -top-7 -left-5' />
        <div className='w-48 h-56 rounded-[40px] border-[20px] border-orange-600 absolute top-[30%] -right-10'/>
        <div className='w-48 h-48 rounded-[40px] bg-red-500 absolute -bottom-7 -left-5'/>

        <div className='grid grid-cols-1 z-20'>
        <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="47000"
            color="bg-primary"
            />
        </div>

        <img 
        src={Card2}
        className='w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 rounded-2xl'
        />
    </div>
  </div>
}

export default AuthLayout


const StatsInfoCard = ({icon, label, value, color}) =>{
    return  <div className=' flex gap-6 bg-white p-4 rounded-xl shaddow-md shadow-purple-400/10 border border-gray-200/50 z-10'>
        <div 
        className='w-12 h-12 flex items-center justify-center text-[26px] bg-red-400 rounded-full drop-shadow-xl'>
        {icon}
        </div>
        <div>
            <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
            <span className='text-[20px]'>₹{value}</span>
        </div>
    </div>


     
}