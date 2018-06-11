import React from 'react'

 export const InputRange = (props) => (
        <div>
            {props.name}
            <input type="text" 
            value={props.value} name={props.name}
            onChange={props.changed}
            />
        </div>
    )



  
