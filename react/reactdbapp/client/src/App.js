import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [name,setName] = useState('');
  const [age,setAge] = useState('');

  const url = 'http://localhost:3001/api/users/';
  
useEffect(()=>{
fetch(url)
//.then((resp)=>resp.json())
.then((users)=>console.log(users))
.catch((error=> console.log(error)))
});

  return (
    <div className="App">
      <h1>React App with DB operations</h1>
     
     
        <input type="text" className='form-control' name='name' placeholder='Enter Name'/>
        <br/>
        <input type="text" className='form-control' name='age' placeholder='Enter Age'/>
        <br/>
        <button className='btn'>  Add </button>
        <br/>
                    
<h2>Result of user</h2>

    </div>
  );
}

export default App;
