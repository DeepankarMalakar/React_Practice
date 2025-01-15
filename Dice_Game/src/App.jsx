import StartGame from "./Components/StartGame"
import Gameplay from "./Components/Gameplay"
import {useState} from 'react'
const App  = () => {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGameStarted = () => {
    setIsGameStarted(true)
  }

  return (
    <>
    {
      isGameStarted ? <Gameplay /> : <StartGame toggle = {toggleGameStarted}/>
    }
    </>
  )
}

export default App