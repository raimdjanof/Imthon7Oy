import React from 'react'
// import Header from '../components/Header'
import LoginSpo from '../SpotifyPages/LoginSpo'
import Doashbard from '../SpotifyPages/Doashbard'

function Home() {
  const code = new URLSearchParams(window.location.search).get("code")
  return  code ? <Doashbard code={code}/> : <LoginSpo/>

}

export default Home
