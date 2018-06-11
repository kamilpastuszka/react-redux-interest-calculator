import React from 'react'

export const Button = (props) => {
  return (
    <div>
      <button className="btn btn-success btn-lg flex-grow:1" type="button" onClick={props.calculate} > Calculate </button> 
    </div>
  )
}
