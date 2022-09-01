import { type } from '@testing-library/user-event/dist/type';
import React from 'react'


interface Imaf {
    id:number;
    title:string;
    image:string
}

interface qqi {
    id:number;
    qq:string
}

export type Item =  Imaf |  qqi;

// export interface Item{
//     id:number;
//     title?:string
//     image?:string
//     qq?:string
//  }
// jayre ? option type use na karvu hoy to uper aaple methos use kari shako cho same out put 
 interface Com {
    items : Item[];
 }

const Compe = ({items}:Com) => {
  return (
    <div>

{items.map((ii)=>{
    if("title" in ii) return  <li key={ii.id}>
    {ii.title && <p>{ii.title}</p> }
    {ii.image && (
        <img style={{maxWidth:"15rem"}} 
        src={ii.image} alt={ii.title} />

    
    )}
    
</li>
return <li  key={ii.id} >

{ii.qq && <p >{ii.qq}</p> }
</li>

})}










      {/* {
        items.map((ii)=>{
            return(
                <li >
                    {ii.title && <p>{ii.title}</p> }
                    {ii.image && (
                        <img style={{maxWidth:"15rem"}} 
                        src={ii.image} alt={ii.title} />

                    
                    )}
                    {ii.qq && <p >{ii.qq}</p> }
                </li>
              
            )
        })
      } */}
    </div>
  )
}

export default Compe
