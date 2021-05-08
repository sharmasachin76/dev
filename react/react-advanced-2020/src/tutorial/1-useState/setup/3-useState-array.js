import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
const [people, setPeople] = React.useState(data);

  return (
    <>
      {
        people.map((person)=>{
          return <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            </div>
        })
      }
    </>
  )
};

export default UseStateArray;
