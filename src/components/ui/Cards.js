import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import { getData } from '../../services/dashService'
import numeral from 'numeral'

export const Cards = () => { 

const [data, setData] = useState([{}]);

useEffect(() => {
    async function loadData() {
        const response = await getData('dashboard');
        if(response.status == 200){
            setData(response.data);
        }      
    }
    loadData();
}, [])

var total_TX = 0, total_Amount = 0, tx_Accepted = 0, amount_Accepted = 0, tx_Rejected = 0, amount_Rejected = 0;
data.map((e) => {
    total_TX += parseInt(e.tx);
    total_Amount += parseInt(e.amount);
    if(e.code_Response < '010'){
        tx_Accepted += parseInt(e.tx);
        amount_Accepted += parseInt(e.amount);
    }else{
        tx_Rejected += parseInt(e.tx);
        amount_Rejected += parseInt(e.amount);
    }
})

const cards = [
    {
        id: 1,
        title: 'General',
        tx: numeral(total_TX).format('0,0'),
        amount: numeral(total_Amount).format('$0,0.00'),
        color: 'primary',
    },
    {
        id: 2,
        title: 'Aprobadas',
        tx: numeral(tx_Accepted).format('0,0'),
        amount: numeral(amount_Accepted).format('$0,0.00'),
        color: 'success', 
    },
    {
        id: 3,
        title: 'Rechazadas',
        tx: numeral(tx_Rejected).format('0,0'),
        amount: numeral(amount_Rejected).format('$0,0.00'),
        color: 'danger',
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
                        label={card.label}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
