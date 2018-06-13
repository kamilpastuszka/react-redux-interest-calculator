import React from 'react'

 export const Input = (props) => (
        <div>
            <input type="text" 
            value={props.value} name={props.name}
            onChange={props.changed}
            />
        </div>
    )



  
