import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [arr,setArr] = useState([]);
  const [newName, setNewName] = useState();

  useEffect(()=>{
    Axios.get(url).then((res)=> setArr(res.data))
  },[])
 
  const obj = {name: newName};
  const handleClick = ()=>{
    Axios.post(url,obj).then((res)=> setArr([...arr, res.data]))
  }

  const handleGetId = () => {
    Axios.get(url+"/1").then((res)=> setArr([res.data]))
  }
  const handleUpdate = ()=>{
    Axios.put(url+"/1",obj).then((res)=> setArr([res.data]))
  }

  const handleDelete = ()=>{
    Axios.put(url+"/1").then((res)=> setArr([res.data]))
  }

  return (
    <div class="container">
      { arr.map((val) => {return <p key={val.id}>{val.name}</p>})}
      <input value={newName} onChange={(e)=>setNewName(e.target.value)} />
      <button onClick={handleClick}>Post</button>
      <button onClick={handleGetId}>Get name id 1</button>
      <button onClick={handleUpdate}>Update id 1</button>
      <button onClick={handleDelete}>Delete id 1</button>
    </div>
  );
}

export default App;
