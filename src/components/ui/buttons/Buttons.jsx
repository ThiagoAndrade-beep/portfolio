import React from 'react'
import './buttons.css'

const Buttons = ({ children, variant, href, onClick, target = "_self" }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`btn ${variant}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Buttons
