import React from 'react';
import './drop-down.styles.css';

export const DropDown = ({handleOption}) => (
    
    <select name="characters" id="characters" className='dropdown' onChange={handleOption} >
        <option value="set6">Choose Characters:</option>
        <option value="set2">Monsters</option>
        <option value="set3">Robots</option>
        <option value="set4">Kittens</option>
        <option value="set5">Avatar</option>
    </select>
    
   
);