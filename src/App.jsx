import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import get10mons from './getPokemon'

function App() {
  const [count, setCount] = useState(0);
  console.log(get10mons(9));
  return (
    <>
      <p>Hello World</p>
    </>
  )
}

export default App
