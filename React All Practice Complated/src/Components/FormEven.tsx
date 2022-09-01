import React, { useState } from 'react'

interface data {
    name:string
    sty:string
    age:number | string
}


const defaultdata:data  = {
    name:"",
    sty:"",
    age:""
    
}

const FormEven = () => {

    const [fordata , setFordata] = useState(defaultdata);
    const {name ,sty ,age} = fordata;

    const onChangehander = (event:React.ChangeEvent<HTMLInputElement>) =>{
        // setFordata((prevState)=>({
        //     ...prevState,
        //   [event.target.id]:event.target.value,
        // }));
        setFordata((prevState)=>({
            ...prevState,[event.target.id]: event.target.value,
            // ...prevState,[event.target.id]: event.target.value,  event.target.id ae pela id check kare che pache value che le che other wich data cetch nat kare
            
        }));
    }

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(fordata);
        setFordata(defaultdata)
        
    }

  return (
    <div>
      <h1>Form</h1>
      <p>create a post</p>
      <form onSubmit={ onSubmit} >
        <label htmlFor="title">Name</label>
        <br />
        {/* form event id and value both are same and true the return output ,  id="Name" value="name" =' not allow' id="name" value={name}  = "both are same" */}
        <input type="text"   name="title" id="name" placeholder='Enter Name'  value={name} onChange={onChangehander}  />
        <br />
      
        <br />
        <label htmlFor="nody">Study  </label>
        <br />
        <input type="text"name="body" id="sty"  value={sty}  placeholder='Enter Stduy'  onChange={onChangehander}/>
        <br /><br />
        <label htmlFor="age">Age</label>
        <br />
        <input type="text" name="age" id="age" value={age} placeholder="Enter Age" onChange={onChangehander}/>
        <br /><br />
        <button type='submit'>Post</button>
      </form>
    </div>
  )
}

export default FormEven
