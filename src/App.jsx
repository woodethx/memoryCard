import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import get10mons from './getPokemon'
import MonCard from './components/MonCard'

function App() {
  const [count, setCount] = useState(0);
  const [mons, setMons] = useState(get10mons(1));
  console.log(mons);
  
  const allMons = mons.map((mon) => {
    console.log(mon.sprite);
    console.log(mon.name);
    return(<MonCard src={mon.sprite} name={mon.name}/>)
  });

  return (
    <>
      <p>Hello World</p>
      {allMons}
    </>
  )
}

export default App
