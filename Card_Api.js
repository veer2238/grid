import React from 'react'
import { Button, Card, CardMedia, CardActions, CardContent } 
from '@mui/material';
import './grid.css'


var Data = require("./Card.json")

const Card_Api = () => {
  return (
    <div class="grid-container">

    {Data.map((items)=>{
        return(

          <div>

          <Card raised={true} sx={{ height:340,width:300 }}>
          <CardMedia
              component="img"
              
              image={items.avatar_url}

              alt="GFG Logo"
          />

          <h1 style={{fontSize:22}}>{items.login}</h1>
          
          
      </Card>
      </div>

        )
    })}
   

    
</div>
  )
}

export default Card_Api



