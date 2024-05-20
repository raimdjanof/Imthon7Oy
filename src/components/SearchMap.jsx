import React from 'react'

function SearchMap({ item }) {
  return (
    <div  className='bg-gray-800 rounded hover:rounded-l-xl hover:rounded-tr-xl hover:rounded-br-none w-[175px] hover:w-[176px]  transition-all p-3' key={item.id}>
      <img className='  rounded  transition-all' src={item.img}  style={{ width: '182px' ,  height: '182px' }} alt="img tracks" />
      <h2 className='text-[#d7cfcfd8] font-medium'>{item.name}</h2>
    </div>
  )
}

export default SearchMap
