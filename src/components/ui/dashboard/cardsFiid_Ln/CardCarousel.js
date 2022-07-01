import React from 'react';
import { BsArrowLeftRight, BsCheck, BsX, BsCashCoin, BsPieChart } from 'react-icons/bs';

export const CardCarrousel = ({title, subtitle, tx, txAccepted, txRejected, amount, amountRejected, amountAccepted, 
    percent, percentAccepted, percentRejected}) => {
    return (
        <div className='card card-info'>
            <div className='card-body'> 
                <h4 className='card-title'><b>{title}</b></h4>
                <h5 className='card-title'>{subtitle}</h5>
                <hr />
                <div className='row'>
                    <p className='card-title'><b>TX'S</b></p>
                    <p className='col card-text text-primary'><BsArrowLeftRight size={20}/><br/>{tx}</p>
                    <p className='col card-text text-success'><BsCheck size={20}/><br/>{txAccepted}</p>
                    <p className='col card-text text-danger'><BsX size={20}/><br/>{txRejected}</p>
                </div>
                <hr />
                <div className='row'>
                    <p className='card-title'><b>Monto</b></p>
                    <p className='col card-text text-primary'><BsCashCoin size={20}/><br />{amount}</p> 
                    <p className='col card-text text-success'><BsCheck size={20}/><br />{amountAccepted}</p>
                    <p className='col card-text text-danger'><BsX size={20}/><br />{amountRejected}</p>
                </div>
                <hr />
                <div className='row'>
                <p className='card-title'><b>Porcentaje</b></p>
                <p className='col card-text text-primary'><BsPieChart size={20}/> <br />{percent}</p>
                <p className='col card-text text-success'><BsCheck size={20}/> <br />{percentAccepted}</p>
                <p className='col card-text text-danger'><BsX size={20}/><br />{percentRejected}</p>
                </div>
            </div>
        </div>
    )
}
