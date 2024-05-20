import React from 'react'
import { Link } from 'react-router-dom'


import IconProfl from "../assets/Image/IconProfl.svg"
import Union  from "../assets/Image/Union.svg"
import DelIcon  from "../assets/Image/DelIcon.svg"
function MyAcaunt() {
  return (
    <div className='w-[23%]  overflow-y-auto px-5 bg-black h-[100vh]'>
      <div className='flex justify-between items-center py-5'>
        <samp className=' font-bold text-xl text-[#d7cfcfd8]'>Friend Activity</samp>
        <Link className='text-white flex space-x-4' to={'login'}>
            <img src={Union} alt="Add profil icon" />
            <img src={DelIcon} alt="delit icon " />
        </Link>
      </div>
      <div>
        <p className='text-[#d7cfcfd8] mb-5 text-lg'>Let friends and followers on Spotify see what you’re listening to.</p>
        <ul>
            <li className='h-[80px]'>
        <img className='mb-4 cursor-pointer transition-all hover:p-1' src={IconProfl} alt=" icon acaund iskiz" />
            </li>
            <li className='h-[80px]'>
        <img className='mb-4 cursor-pointer transition-all hover:p-1' src={IconProfl} alt=" icon acaund iskiz" />
            </li>
            <li className='h-[80px]'>
        <img className='mb-4 cursor-pointer transition-all hover:p-1' src={IconProfl} alt=" icon acaund iskiz" />
            </li>
           
            
        </ul>
        <p className='text-[#d7cfcfd8] mb-5 text-lg'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
        <button className='w-[233px] hover:w-[235px] transition-all hover:h-[64px] h-[62px] rounded-[40px] text-lg font-bold ml-9 cursor-pointer shadow-md bg-white'>SETTINGS</button>
      </div>
    </div>
  )
}

export default MyAcaunt
