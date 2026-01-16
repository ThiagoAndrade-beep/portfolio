import React from 'react'
import "./cardExperience.css"
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const CardExperience = ({title, name, description, date, currentDate, achievements }) => {
  return (
    <div className='card-experience-container'>
        <div className='card-experience-content'>
            <div className='experience-content-titles'>
                <h2>{title}</h2>
                <p>
                    <FaCalendarAlt size={14}/>
                    {date} - {currentDate}
                </p>
            </div>
            <p className='name-enterprise'>
                <FaBriefcase size={14}/>
                {name}
            </p>
            <p className='experience-description'>
                {description}
            </p>
            <h4>Principais Conquistas:</h4>

            <div className='achievements'>
                {achievements.map((achievements, index) => (
                    <p key={index} className='achievements-description'>
                        <FiArrowRight size={14} color='#0BD1F7'/>
                        {achievements}
                    </p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CardExperience