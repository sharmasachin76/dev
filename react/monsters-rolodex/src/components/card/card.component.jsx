import React from 'react';
import './card.styles.css';


export const Card = props => (

    <div className='card-container'>
        <img 
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=${props.monster.email}&size=180x180`} 
        />
        <h2> {props.monster.name}  </h2>
        <button class='button'>Add to cart</button>
    </div>


);