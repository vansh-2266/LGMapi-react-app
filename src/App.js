import React from 'react';
import './App.css';
import Axios from'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  // p1
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const[image, setImage] = useState("");

  // p2
  const [name2, setName2] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [email2, setEmail2] = useState("");
  const[image2, setImage2] = useState("");

  // p3
  const [name3, setName3] = useState("");
  const [lastName3, setLastName3] = useState("");
  const [email3, setEmail3] = useState("");
  const[image3, setImage3] = useState("");
  // p4
  const [name4, setName4] = useState("");
  const [lastName4, setLastName4] = useState("");
  const [email4, setEmail4] = useState("");
  const[image4, setImage4] = useState("");

  // p5
  const [name5, setName5] = useState("");
  const [lastName5, setLastName5] = useState("");
  const [email5, setEmail5] = useState("");
  const[image5, setImage5] = useState("");
  // p6
  const [name6, setName6] = useState("");
  const [lastName6, setLastName6] = useState("");
  const [email6, setEmail6] = useState("");
  const[image6, setImage6] = useState("");

  const fetchData = () => {
      Axios.get("https://reqres.in/api/users?page=1").then((res) => {
        setName(res.data.data[0].first_name);
        setLastName(res.data.data[0].last_name);
        setEmail(res.data.data[0].email);
        setImage(res.data.data[0].avatar);

        setName2(res.data.data[1].first_name);
        setLastName2(res.data.data[1].last_name);
        setEmail2(res.data.data[1].email);
        setImage2(res.data.data[1].avatar);

        setName3(res.data.data[2].first_name);
        setLastName3(res.data.data[2].last_name);
        setEmail3(res.data.data[2].email);
        setImage3(res.data.data[2].avatar);

        setName4(res.data.data[3].first_name);
        setLastName4(res.data.data[3].last_name);
        setEmail4(res.data.data[3].email);
        setImage4(res.data.data[3].avatar);

        setName5(res.data.data[4].first_name);
        setLastName5(res.data.data[4].last_name);
        setEmail5(res.data.data[4].email);
        setImage5(res.data.data[4].avatar);

        setName6(res.data.data[5].first_name);
        setLastName6(res.data.data[5].last_name);
        setEmail6(res.data.data[5].email);
        setImage6(res.data.data[5].avatar);

    })
  }

  return (
    <div className="App">

      <div className='navbar'>
        <button onClick={fetchData}>Get Employee Data</button>
      </div>

      <div className='card-body'>
          <div className='emp-card'>
            <img src={image}></img>
            <p>{name}</p>
            <p>{lastName}</p>
            <p>{email}</p>
          </div>

          <div className='emp-card'>
            <img src={image2}></img>
            <p>{name2}</p>
            <p>{lastName2}</p>
            <p>{email2}</p>
          </div>

          <div className='emp-card'>
            <img src={image3}></img>
            <p>{name3}</p>
            <p>{lastName3}</p>
            <p>{email3}</p>
          </div>

          <div className='emp-card'>
            <img src={image4}></img>
            <p>{name4}</p>
            <p>{lastName4}</p>
            <p>{email4}</p>
          </div>

          <div className='emp-card'>
            <img src={image5}></img>
            <p>{name5}</p>
            <p>{lastName5}</p>
            <p>{email5}</p>
          </div>
          
          <div className='emp-card'>
            <img src={image6}></img>
            <p>{name6}</p>
            <p>{lastName6}</p>
            <p>{email6}</p>
          </div>

      </div>
       
    </div>
  );
}

export default App;
