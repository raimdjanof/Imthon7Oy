import React from 'react'

function LoginSpo() {
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=cadbcfa0891b4476bfc43794882415ae&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`

  return (
    <div className='flex items-center w-[54%] justify-center text-center h-[100vh]'>
      <a className='bg-white py-2 px-5 hover:py-2.5 hover:px-6  transition-all rounded-3xl font-medium border-[2px] border-[#948484]'
       href={AUTH_URL}>Go To Spotify</a>
    </div>
  )
}

export default LoginSpo
