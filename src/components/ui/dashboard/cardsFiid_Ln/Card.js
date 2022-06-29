import React from 'react';

export const CardFiid = ({title, subtitle, tx, txAccepted, txRejected, amount, amountRejected, amountAccepted, 
    percent, percentAccepted, percentRejected}) => {
    return (
        <div className='card card-info'>
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <h5 className='card-title'>{subtitle}</h5>
                <hr />
                <div className='row'>
                    <p className='card-title'>TX'S</p>
                    <p className='col card-text'>General <br/>{tx}</p>
                    <p className='col card-text'>Aceptadas <br/>{txAccepted}</p>
                    <p className='col card-text'>Rechazadas <br/>{txRejected}</p>
                </div>
                <hr />
                <div className='row'>
                    <p className='card-title'>Monto</p>
                    <p className='col card-text'>Total <br />{amount}</p> 
                    <p className='col card-text'>Aceptado <br />{amountAccepted}</p>
                    <p className='col card-text'>Rechazado <br />{amountRejected}</p>
                </div>
                <hr />
                <div className='row'>
                <p className='card-title'>Porcentaje</p>
                <p className='col card-text'>Total <br />{percent}</p>
                <p className='col card-text'>Aprobación <br />{percentAccepted}</p>
                <p className='col card-text'>Rechazo<br />{percentRejected}</p>
                </div>
            </div>
        </div>
    )
}
