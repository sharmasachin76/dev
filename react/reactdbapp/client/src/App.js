import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [userData, setUserData] = useState([]);

  const url = 'http://localhost:3001/api/users/';
  
 const addUser =()=>{
  Axios.post ('http://localhost:3001/api/user/',{name:name,age:age})
  .then (alert('user added'));

  setName('');
  setAge('');

 }

useEffect(()=>{
Axios.get(url)
.then((resp)=>{
  setUserData(resp.data);
})
.catch((error=> console.log(error)))
},[userData]);

  return (
    <div className="App">
      <h1>React App with DB operations</h1>
     
     
        <input type="text" className='form-control' name='name' value = {name} placeholder='Enter Name' onChange={
          (e)=>{setName(e.target.value)}}/>
        <br/>
        <input type="text" className='form-control' name='age' value={age} placeholder='Enter Age' onChange={
          (e)=>{setAge(e.target.value)}
        }/>
        <br/>
        <button className='btn' onClick={()=>{addUser()}}>  Add </button>
        <br/>
                    
<h2>Result of user</h2>
 {

  userData.map((person)=>{
    return <p key={person.id}> {person.name} {person.age}</p>
  })

 }   



    </div>
  );
}

export default App;
