import React, { useState } from 'react'

enum check {
    Details = "Details",
    Shipping = "Shipping",
    Payment = "Payment",
}

const Shiping = () => {
    const [che , setche] = useState<check>(check.Details)
  return (
    <div>
      
      {che === check.Details && (
        <>
        <h1>Details</h1>
        <button type='button' onClick={() => setche(check.Shipping)} >Next</button>
        </>
      )}
      {che === "Shipping" && (
        <>
        <h1>Shipping</h1>
        <button type='button' onClick={() => setche(check.Payment)} >Next</button>
        </>

      )

      }
      {
        che === "Payment" && (
            
            <>
            <h1>Payment</h1>
            </>
        )
      }
    </div>
  )
}

export default Shiping
