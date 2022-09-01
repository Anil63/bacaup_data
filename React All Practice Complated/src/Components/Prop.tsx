import React from 'react'
type Ts =   {     //  type define facttion 2 option 1)interface 2)type  
name :string
age:number 
// age ?:number  ? mark is define option data pass jo hade to appse nay to deflalt blank pass 
}


const Prop = ({name , age }:Ts) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1> {age} </h1>
    </div>
  )
}

export default Prop
