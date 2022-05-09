import React from 'react';
import { BsBarChartFill } from "react-icons/bs"; 

export const Card = ({title, tx, amount, color}) => {
  return (
    <div className='card'> 
        <div className={"card-body bg-"+color}>
            <BsBarChartFill size={40}/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-title'>TX's</p>
            <p className='card-title'>{tx}</p>
            <p className='card-title'>Monto</p>
            <p className='card-title'>{amount}</p>
        </div>
    </div>
  )
}
