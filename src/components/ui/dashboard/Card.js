import React from 'react';
import { BsBarChartFill } from "react-icons/bs";
import { Spinner } from 'reactstrap';

export const Card = ({ title, tx, amount, color, percent, flag }) => {



  return (
    <div className='card'>
      <div className={"card-body bg-" + color}>
        <BsBarChartFill size={40} />
        <h4 className='card-title'>{title}</h4>
        <p className='card-title'>TX's</p>
        {flag ? <Spinner /> : <p className='card-title'>{tx}</p>}
        <p className='card-title'>Monto</p>
        {flag ? <Spinner /> : <p className='card-title'>{amount}</p>}
        {
          percent === 'undefined'
            ?
            <div>
              <p className='card-title'>Porcentaje</p>
              <p className='card-title'>{percent}</p>
            </div>
            : <></>
        }
      </div>
    </div>
  )
}
