import numeral from 'numeral';
import React, { useContext } from 'react'
import { FilterContext } from '../../services/FilterContext'
import { Card } from './dashboard/Card';

export const CardsToken = () => {

    const { dataTable: data } = useContext(FilterContext);

    let total_tx = 0, total_amount = 0.0
    let tx_Accepted = 0, amount_Accepted = 0.0
    let tx_Rejected = 0, amount_Rejected = 0.0

    data.map(e => {
        total_tx++ //total de transacciones
        total_amount += parseFloat(numeral(e.amount).value()) //total monto
        if(e.ID_Code_Response < '011'){
            tx_Accepted++
            amount_Accepted += parseFloat(numeral(e.amount).value())
        }else{
            tx_Rejected++
            amount_Rejected += parseFloat(numeral(e.amount).value())
        }
    })
    const totalPercent = (total_tx / total_tx * 100)
    const percentAccepted = (tx_Accepted / total_tx * 100);
    const percentRejected = (tx_Rejected / total_tx * 100);

    const cards = [
        {
            id: 1,
            title: 'General',
            tx: numeral(total_tx).format('0,0'),
            amount: numeral(total_amount).format('$0,0.00'),
            percent: totalPercent.toFixed(2)+"%",
            color: 'primary'
        },
        {
            id: 2,
            title: 'Aprobadas',
            tx: numeral(tx_Accepted).format('0,0'),
            amount: numeral(amount_Accepted).format('$0,0.00'),
            percent: percentAccepted.toFixed(2)+"%",
            color: 'success'
        },
        {
            id: 3,
            title: 'Rechazadas',
            tx: numeral(tx_Rejected).format('0,0'),
            amount: numeral(amount_Rejected).format('$0,0.00'),
            percent: percentRejected.toFixed(2)+"%",
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
                            color={card.color}
                            percent={card.percent}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
