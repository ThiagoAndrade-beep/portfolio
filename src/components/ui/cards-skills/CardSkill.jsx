import React from 'react'
import "./cardSkill.css"

const CardSkill = ({ icon, title, description }) => {
    return (
        <div className='card-container'>
            <div className='card-skill'>
                <img src={icon} alt="" className='img-icon'/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardSkill