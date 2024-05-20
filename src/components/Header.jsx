import React from 'react'
import Minusc from "../assets/Image/Minus.svg"
import Pilus from "../assets/Image/Pilus.svg"
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
  return (
    <header className='w-full h-[510px] pb-20 bg-gradient-to-b from-[#3333A3] to-[#121212]'>
      <div className='space-x-5 text-start px-10 py-5'>
      <button onClick={()=> {navigate(-1)}} ><img src={Minusc} alt="minus icon img" /></button>
      <button onClick={()=> {navigate(+1)}} ><img src={Pilus} alt="pilus icon img" /></button>
      </div>
      <div className='px-10'>
      <h1 className='font-bold text-[39px] text-white'>Good afternoon</h1>
      </div>
    </header>
  )
}

export default Header
