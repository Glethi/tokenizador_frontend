import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { CardFiid } from './Card';
import { getData } from '../../../../services/dashService';

export const CardsFiid = ({data, catalog}) => {;  

    let cards = []
    const fiidComer = [...new Set (data.map(e => e.Fiid_Comer))]; 

    //Cartas para FIID_COMER
    for(let i = 0; i < fiidComer.length; i++){
        let amount = 0.0, amountRejected = 0.0, amountAccepted = 0.0;
        let tx = 0, txAccepted = 0, txRejected = 0; 
        let percent = 0.0, percentAccepted = 0.0, percentRejected = 0.0;
        let id = 0, subtitle = '';
        data.forEach(e => {
            if(e.Fiid_Comer === fiidComer[i]){
                //Transacciones
                tx += parseInt(e.tx)
                amount += parseFloat(e.amount)
                if(e.code_Response < '011'){
                    txAccepted += parseInt(e.tx)
                    amountAccepted += parseFloat(e.amount)
                }else{
                    txRejected += parseInt(e.tx)
                    amountRejected += parseFloat(e.amount)
                }
            }
        })
        catalog.forEach(e => {
            if(fiidComer[i] === e.Fiid_Comer){
                subtitle = e.Fiid_Comer_Des
            }
        })
        id++;
        percent = (tx / tx) * 100;
        percentAccepted = (txAccepted / tx) * 100;
        percentRejected = (txRejected / tx) * 100;
        cards.push({
            id: id,
            title: fiidComer[i],
            subtitle: subtitle,
            tx: numeral(tx).format('0,0'),
            txAccepted: numeral(txAccepted).format('0,0'),
            txRejected: numeral(txRejected).format('0,0'),
            amount: numeral(amount).format('$0,0.00'),
            amountAccepted: numeral(amountAccepted).format('$0,0.00'),
            amountRejected: numeral(amountRejected).format('$0,0.00'),
            percent: numeral(percent).format('0.0')+'%',
            percentAccepted: numeral(percentAccepted).format('0.0')+'%',
            percentRejected: numeral(percentRejected).format('0.0')+'%'
        })
    }

    console.log(catalog, fiidComer);

    return (
        <div className='container'>
            <div className='row'>
                <h3>FIID COMERCIOS</h3>
                {
                    cards.map(card => (
                        <div className='col-md-4 mt-2 mb-2' key={card.id}>
                            <CardFiid
                            title={card.title}
                            subtitle={card.subtitle}
                            tx={card.tx}
                            txAccepted={card.txAccepted}
                            txRejected={card.txRejected}
                            amount={card.amount}
                            amountAccepted={card.amountAccepted}
                            amountRejected={card.amountRejected}
                            percent={card.percent}
                            percentAccepted={card.percentAccepted}
                            percentRejected={card.percentRejected}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
