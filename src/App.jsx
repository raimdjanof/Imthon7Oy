import './App.css'
import MyAcaunt from './components/MyAcaunt'
import Navigator from './components/Navigator'
import RoutesPage from "./rotes/GloIndex"
function App() {

  return (
   <>
    <div className='flex justify-between  '>
    <Navigator/>
    <RoutesPage/>
    <MyAcaunt/>
    </div>

   </>
  )
}

export default App
