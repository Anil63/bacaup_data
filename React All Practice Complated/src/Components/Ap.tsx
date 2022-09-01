import React, { useContext } from 'react'
import { InputContex } from './InputContex';

const Ap = () => {
    const {state , dispatch } = useContext(InputContex);

  return (
    <div>
      <p>Value:{state.inputValue}</p>
      <button onClick={()=> dispatch({type: "SET_INPUT_VALUE_TO_100"}) } >
        SET VALUE TO 100
      </button>
    </div> 
  )
}

export default Ap
