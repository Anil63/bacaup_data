interface Item{
  id:number
}


interface DataProps <T> {
  items:T[]
}

export default function DaGris<T extends Item >({items} :DataProps<T>) {
return (
  <div>
       
      {
         items.map((it)=>(
          <p  key={it.id} > {JSON.stringify(it)}</p>
         ))
      }
    
  </div>  
)
}
