import React from 'react'
import Capa from './Capa/Capa'
import Alimentos from './Alimentos/Alimentos'
import Banner from './Banner/Banner'


const Home = () => {
  return (
    <div>
      <Capa />
      <Alimentos/>
      <Banner />
    </div>
  )
}

export default Home