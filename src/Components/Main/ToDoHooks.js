import React ,{useState}  from 'react'


export default function TodoHooks() {
  const initialVal={
      name:"",
      email:"",
      contact:""
  }
    const [formData,sethandleValue]=useState(initialVal);
    var [list,setTodoList]= useState([]);
    

    const handleChange=(e)=>{
        sethandleValue({
          ...formData,
          [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = () => {
        setTodoList(list=>list.concat({name:formData.name,email:formData.email,contact:formData.contact}));
            sethandleValue({
                name:"",
                email:"",
                contact:""
            });
 };
      const removeTask = i => {
        const temp = [...list];
         temp.splice(i,1);
            setTodoList(temp);
        
      };

    return (
      <div className="container mt-5">
      <div className="row justify-content-center">
     <div className="form-group col-md-3">
     <label>Name </label>
     <input className="form-control" type="text" name="name" value={formData.name}  onChange={handleChange}></input>
     </div>
     <div className="form-group col-md-3">
     <label>Email </label>
     <input  className="form-control" type="email" name="email"  onChange={handleChange}></input>
     </div>
     <div className="form-group col-md-3">
     <label>Contact No. </label>
     <input  className="form-control" type="number"name="contact"  onChange={handleChange} ></input>
     </div>
     <div className="col-md-1 ml-3 mt-4">
     <button className="btn btn-info form-control" onClick={handleSubmit}>Add</button>
     </div>
     </div>
     <table className="table">
                    <thead>
                        <tr>
                        <th>Serial No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((d,i)=>(
                            <tr>
                                <td>{i}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.contact}</td>
                                <td key={i}><button className="abc btn-info" onClick={removeTask.bind(i)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
           </div>

     
  
    )
}