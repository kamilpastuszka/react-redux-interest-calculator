import React from 'react'

export const Button = (props) => {
  return (
    
      <button className="row btn btn-success btn-round-lg" type="button" onClick={props.calculate} > {props.children} </button> 
  
  )
}
