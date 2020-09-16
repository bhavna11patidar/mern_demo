import React, {useState} from 'react';

export default function Hooks() {

    const [name, setName]=useState("Bhavna");

    const [count, setCount]=useState(0);

    const [count2,setCou]=useState(0);


    const [fname, setFname]=useState("");
    const[lname, setLname]=useState('');




    const setCount2=()=>{
        setCou(count2+1);
    }
   
    return (
        <div className="container mt-5">
            <h1>Welcome {name}</h1>
            <button onClick={()=>setName('Joney')}>Change name</button>

            <h1>Clicked {count}</h1>
            <button onClick={()=>setCount(count+1)}>Counter</button>
       
            <p>Count 2: {count2}</p>
            <button onClick={setCount2}>Counter 2</button>


            <input type="text" name='fname' onChange={(e)=>setFname(e.target.value)} />
            <input type="text" name='lname' onChange={(e)=>setLname(e.target.value)} />
            <h2>Hello {fname} {lname}</h2>

        </div>
    )
}
