import React, {useState} from 'react'

export default function RegisterWithUseState() {

    var initialFormData={
        name:"",
        email:"",
    }

   var [newFormData, setnewFormData]=useState({name:"", email:""});
   const [formData,setFormData]=useState(initialFormData);



    const onHandleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onButtonClick=()=>{
        //console.log(formData);
        setnewFormData(
        newFormData={
            name:formData.name,
            email:formData.email,
        }
        );
        //console.log(newFormData);
    }
    return (
        <div>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" onChange={onHandleChange}  />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="text" name="email" onChange={onHandleChange} />
            </div>
            <button onClick={onButtonClick}>Submit</button>

            <p>{newFormData.name}</p>
            <p>{newFormData.email}</p>
        </div>
    )
}
