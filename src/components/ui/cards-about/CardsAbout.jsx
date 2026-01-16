import React from 'react'
import './cardsAbout.css'

const CardsAbout = ({title, description}) => {
  return (
    <div className='card-about'>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default CardsAbout