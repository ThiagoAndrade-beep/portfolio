import React from 'react'
import './buttons.css'

const Buttons = ({children, variant, onClick}) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Buttons