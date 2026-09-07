import Nav from './Component/navbar'
import Banner from './Component/Banner'
import Players from './Component/players/Players'
import { Suspense } from 'react'


const playerFetch = async ()=>{
  const response = await fetch('/data.json')
  const data = await response.json()
  return data
}

function App() {
  const playerPromise = playerFetch()

  return (
    <>
   <Nav></Nav>
   <Banner></Banner>
   <Suspense fallback={<h2>Loading...</h2>}>
    <Players playersPromise={playerPromise}></Players>
</Suspense>
    </>
  )
}

export default App
