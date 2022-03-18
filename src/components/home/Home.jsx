import React from 'react'
import SlideB from './bootstrapSlide/SlideB'

import Featured from './featured/Featured'
import Categorie from './categorie/Categorie'

import './home.css'

function Home() {
  return (
    <div id="home">
      <div className="hero">
        <SlideB />
      </div>
      <Categorie />
      <Featured />
    </div>
  )
}

export default Home