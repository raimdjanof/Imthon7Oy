import React from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback'
function PlayBack({accessToken , player}) {
  return (
    <div className=' w-[100%] absolute bottom-0 left-0'>
        <SpotifyWebPlayer className="spotify-web-player" token={accessToken}
     uris={player ? [player] : []}
    />
    </div>
  )
}

export default PlayBack
