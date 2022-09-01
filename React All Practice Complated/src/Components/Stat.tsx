import React, { useState } from 'react'
import { User } from './inter/interface';

// interface addre {
//     street:string,
//     number:number,
//     zip:number
// }


// interface User {
//     name:string,
//     age:number,
//     country:string,
//     address:addre
//     admin:boolean

// }  other file define type vareble

// --------------------- typescript ma one ma pan difine kari sako cho and both alag pan kari shako cho  je uper alrdy define 
// interface User {
//     name:string,
//     age:number,
//     country:string,
//     address:{
//         street:string,
//         number:number,
//         zip:number
//     },
    // admin:boolean  

// }


const Stat = () => {

    const [user ,setUser ] = useState<User | null  >(null);


    const fetc = () =>
    
    setUser({
        name:"anil",
        age:20,
        country:"the india",
        address:{
            street:'surat',
            number:32,
            zip:395006
        },
        admin:false
    })

  return (
    <div>
        <button onClick={fetc} >Login </button>
      <h1>{user && <p> {`welcome ${user.name}`}</p> } </h1>
    </div>
  )
}

export default Stat
