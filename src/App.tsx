import Nav from './Component/navbar'
import Banner from './Component/Banner'
import Players from './Component/players/Players'
import { Suspense } from 'react'
import type { iPlayer } from './Component/playerTypes/playerTypes'
import { useState } from 'react'


const playerFetch = async ():Promise<iPlayer[]>=>{
  const response = await fetch('/data.json')
  const data = await response.json()
  return data
}

function App() {
  // const playerPromise = playerFetch()
  const [playerPromise]=useState(()=>playerFetch())
  const [coin,setCoin]= useState(30000000);

  return (
    <>
  <Nav coin={coin} />
   <Banner></Banner>
     <Suspense fallback={<h2>Loading...</h2>}>
    <Players playersPromise={playerPromise} coin={coin} setCoin={setCoin}></Players>
</Suspense>
    </>
  )
}

export default App
