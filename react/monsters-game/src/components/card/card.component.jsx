import React from 'react';
import './card.styles.css';


export const Card = props => (

    <div className='card-container'>
       <div className="card-container-inner">
            <div className="card-container-front"> 
            <p>Flip Card to See </p>
            </div>
            <div className="card-container-back"> 
            <img 
                    alt='monster'
                    src={`https://robohash.org/${props.monster.id}?set=${props.monster.email}&size=180x180`} 
                />
                <button class='button'>Click to Match</button>
            </div>
        </div>      
    </div>
);