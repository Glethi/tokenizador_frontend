import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import { getData } from '../../services/dashService'
import numeral from 'numeral'

export const Cards = () => {


const [data, setData] = useState({});

useEffect(() => {
    async function loadData() {
        const response = await getData();
        if(response.status == 200){
            setData(response.data); 
        }      
    }
    loadData();
}, []) 

const cards = [
    {
        id: 1,
        title: 'General',
        tx: numeral(data.totalTX).format('0,0'),
        amount: numeral(data.totalAmount).format('$0,0.00'),
        color: 'primary'
    },
    {
        id: 2,
        title: 'Aprobadas',
        tx: numeral(data.totalTX_Accepted).format('0,0'),
        amount: numeral(data.totalAmount_Accepted).format('$0,0.00'),
        color: 'success' 
    },
    {
        id: 3,
        title: 'Rechazadas',
        tx: numeral(data.totalTX_Rejected).format('0,0'),
        amount: numeral(data.totalAmount_Rejected).format('$0,0.00'),
        color: 'danger' 
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
                        color={card.color}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
