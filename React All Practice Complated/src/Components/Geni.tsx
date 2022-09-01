import React from 'react';
import Gity from './Gity'


export interface User{
  id:number
  name:string
  age:number
}

function Geni() {

  const users: User[] = [
    {id:1 ,name:"anil" , age:20},
    {id:2 ,name:"ail" , age:55},
    
    {id:3 ,name:"anl" , age:5},
    

  ]

  const orders = [
   
    {id:1, oid:5 , a:30  },
    {id:2, oid:2 , a:20  },
    {id:3, oid:1 , a:10  },
  ]
  return (
    <div className="App">
     <Gity  items={users} />
     <br />
     <Gity items={orders} />
    </div>
  );
}

export default Geni;
