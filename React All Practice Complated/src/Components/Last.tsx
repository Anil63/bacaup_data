import React from 'react'
import Compe, { Item } from './Compe'

const Last = () => {
    const items:Item[] = [
       { id:1,
        title:"A nice sun",
        image:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
    },
    {
        id:2 ,
       
        qq:
         "This program is free software; you can redistribute it and/or it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or (at  your option) any later version"
    }
    ]
  return (
    <div>
      <Compe items={items}/>
    </div>
  )
}

export default Last
