import React from 'react'
import { NavLink } from 'react-router-dom'


import HomeIcon from "../assets/Image/HomeIcon.svg"
import AddIcon from "../assets/Image/AddIcon.svg"
import SearchIcon from "../assets/Image/SearchIcon.svg"
import LikeIcon from "../assets/Image/LikeIcon.svg"
import LibraryIcon from "../assets/Image/LibraryIcon.svg"
import logo from '../assets/Image/Logo.png'
function Navigator() {
  return (
    <div className='w-[23%]  min-h-screen overflow-y-auto px-10 bg-black h-[100vh] '>
      <div className='mb-5  mt-5'>
        <img className='mr-2' src={logo} width={160} alt="" />
      </div>
      <nav className='flex border-[#333] border-b-[1px] flex-col'>
        <NavLink className={'font-bold flex text-lg text-[#d7cfcfd8] py-1'} to={"/"}> <img className='mr-5' src={HomeIcon} alt="img" />Home</NavLink>
        <NavLink className={'font-bold flex text-lg text-[#d7cfcfd8] py-1'} to={"/search"}> <img className='mr-5'  src={SearchIcon} alt="img" />Search </NavLink>
        <NavLink className={'font-bold flex text-lg text-[#d7cfcfd8] py-1 mb-6'} to={"/library"}> <img className='mr-5'  src={LibraryIcon} alt="img" />Your Library</NavLink>
        <NavLink className={'font-bold flex text-lg text-[#d7cfcfd8] py-1'} to={"/create"}> <img className='mr-5'  src={AddIcon} alt="img" />Create Playlist</NavLink>
        <NavLink className={'font-bold flex text-lg text-[#d7cfcfd8] py-1 mb-3'} to={"/like"}> <img className='mr-5'  src={LikeIcon} alt="img" />Liked Songs</NavLink>
      </nav>
      <ul className='mt-4'>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Chill Mix</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Insta Hits</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Your Top Songs 2021</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Mellow Songs</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Anime Lofi & Chillhop Music</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">BG Afro “Select” Vibes</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Afro “Select” Vibes</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Happy Hits!</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Deep Focus</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Instrumental Study</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">OST Compilations</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Nostalgia for old souled mill...</a></li>
        <li className='py-1'><a className='text-[#d7cfcfd8] text-lg font-[450px]' href="#">Mixed Feelings</a></li>
      </ul>
    </div>
  )
}

export default Navigator
