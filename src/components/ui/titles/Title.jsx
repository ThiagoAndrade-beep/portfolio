import React from 'react'
import './title.css'

const Title = ({title, titleSpan}) => {
    return (
        <div className='titles'>
            <h1>{title} <span className='title-span'>{titleSpan}</span></h1>
            <div className='gradient-line'></div>
        </div>

    )
}

export default Title