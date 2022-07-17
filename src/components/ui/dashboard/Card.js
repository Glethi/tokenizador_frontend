import React from 'react';
import { Spinner } from 'reactstrap';
import { BsArrowLeftRight, BsCheck, BsX, BsCashCoin, BsPieChart } from 'react-icons/bs';

export const Card = ({ title, tx, amount, color, percent, flag, type }) => {

  return (
    <div className='card'>
      <div className={"card-body rounded bg-" + color}>
        {
          type === 'general' ?
          <BsArrowLeftRight size={41}  className='mb-2'/>
          :type === 'ok' ? <BsCheck size={50}/>
          :type === 'error' ? <BsX size={50}/> : <></>
        }
        <h4 className='card-title'>{title}</h4>
        <hr />
        <p className='card-title'>TX'S</p><BsArrowLeftRight size={20}/>
        {flag ? <p className='m-2'><Spinner /></p> : <p className='card-title'>{tx}</p>}
        <hr />
        <p className='card-title'>Monto</p><BsCashCoin size={20}/>
        {flag ? <p className='m-2'><Spinner /></p> : <p className='card-title'>{amount}</p>}
        {
          percent !== undefined
            ?
            <div>
              <hr />
              <p className='card-title'>Porcentaje</p><BsPieChart size={20}/>
              { flag ? <p className='m-2'><Spinner /></p> : <p className='card-title'>{percent}</p> }
            </div>
            : <></>
        }
      </div>
    </div>
  )
}
