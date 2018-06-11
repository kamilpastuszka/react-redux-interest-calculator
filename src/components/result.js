import React from 'react'

export const Result = (props) => {
  return (
    <div className="card">
        <div className="card-body">{props.paymentType}: <strong>{props.paymentAmount} </strong></div>
    </div>
  )
}
