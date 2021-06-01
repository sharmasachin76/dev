import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userData, setUserData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [studentData, setStudentData] = useState([]);

  const url = "http://localhost:3001/api/users/";
  const urlSpring = "http://localhost:8080/students";

  const addUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/user/", {
      name: name,
      age: age,
    }).then(setIsShow(true));
    setName("");
    setAge("");
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  };

  const removeUser = (id) => {
    console.log(`http://localhost:3001/api/user/${id}`);
    Axios.delete(`http://localhost:3001/api/user/${id}`)
      .then(console.log("user deleted"))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get(url)
      .then((resp) => {
        setUserData(resp.data);
      })
      .catch((error) => console.log(error));
  });

  useEffect(() => {
    Axios.get(urlSpring)
      .then((resp) => {
        setStudentData(resp.data);
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>React App with DB operations</h1>
      <h2>Result of Students from Spring Rest service</h2>
      <div className="container">
        {studentData.map((student) => {
          return (
            <div className="student" key={student.id}>
              <p>Name: {student.name} </p>
              <p>Email: {student.email}</p>
            </div>
          );
        })}
      </div>

      <h2>Result of Users from Node JS rest service</h2>

      <input
        type="text"
        className="form-control"
        name="name"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        className="form-control"
        name="age"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <button
        className="btn"
        onClick={(e) => {
          addUser(e);
        }}
      >
        {" "}
        Add{" "}
      </button>
      <p></p>
      {isShow ? <div className="msg">User added</div> : <p></p>}

      <div className="container">
        {userData.map((person) => {
          return (
            <div className="user" key={person.id}>
              <p>Name: {person.name} </p>
              <p>Age: {person.age}</p>
              <p>
                <button
                  className="btn"
                  onClick={() => {
                    removeUser(person.id);
                  }}
                >
                  {" "}
                  Delete
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
