import React from 'react'
import { Card } from './Card'
import numeral from 'numeral'

export const Cards = ({data, flag}) => { 
    
    let total_TX = 0, total_Amount = 0.0, tx_Accepted = 0, amount_Accepted = 0.0;
    let tx_Rejected = 0, amount_Rejected = 0.0;

    data.map((e) => {
        total_TX += parseInt(e.tx);
        total_Amount += parseFloat(e.amount);
        if(e.code_Response < '011'){
            tx_Accepted += parseInt(e.tx);
            amount_Accepted += parseFloat(e.amount);
        }else{
            tx_Rejected += parseInt(e.tx);
            amount_Rejected += parseFloat(e.amount);
        }
    })

    const cards = [
        {
            id: 1,
            title: 'General',
            tx: numeral(total_TX).format('0,0'),
            amount: numeral(total_Amount).format('$0,0.00'),
            color: 'primary',
            type: 'general'
        },
        {
            id: 2,
            title: 'Aprobadas',
            tx: numeral(tx_Accepted).format('0,0'),
            amount: numeral(amount_Accepted).format('$0,0.00'),
            color: 'success', 
            type: 'ok'
        },
        {
            id: 3,
            title: 'Rechazadas',
            tx: numeral(tx_Rejected).format('0,0'),
            amount: numeral(amount_Rejected).format('$0,0.00'),
            color: 'danger',
            type: 'error'
        }
    ]

    return ( 
        <div className='container'>
            <div className='row'>
                {
                    cards.map( card => (
                        <div className='col-md-4' key={card.id}>
                            <Card 
                            title={card.title}
                            tx={card.tx}
                            amount={card.amount}
                            color={card.color}
                            flag={flag}
                            type={card.type}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
