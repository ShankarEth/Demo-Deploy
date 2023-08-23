import Axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
function Main() {
    const url = "https://dummyjson.com/products";
    const [arr, setArr] = useState([]);
    const [title,setTitle] = useState([]);

    const show = (items) => {
        return items.map((val) => {
            return <Card obj={val} />
        })
    }
    useEffect(() => {
        Axios.get(url)
            .then((res) => setArr(res.data.products))
            .catch((err) => alert(err));
    }, [])

    const handleKeyUp = (e) =>{
        let filter = e.target.value.toUpperCase();
        
        for(let i=0;i<filter.length;i++)
        {
            
        }
    }
    return (
        <div>
            {
                arr.map((val)=>{
                    title.push(val.title);
                })
            }
            <input id="demo" onChange={handleKeyUp} class="form-control" />
            <div class="row container">
                {show(arr)}
            </div>
        </div>
    )
}

export default Main;