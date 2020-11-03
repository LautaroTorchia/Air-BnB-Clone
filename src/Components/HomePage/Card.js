import React from 'react'
import './Card.css'

function Card({title,description,src,price}) {
    return (
        <div className='card'>
            <img alt='' src={src} />
            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>

        </div>
    )
}

export default Card
