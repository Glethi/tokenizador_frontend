import React from 'react';
import { BsBank2, BsArrowLeftRight, BsFillCreditCard2BackFill } from 'react-icons/bs';
import ReactElasticCarousel from 'react-elastic-carousel';
import { breakpoints } from '../breakpoints';
import { interatorCards } from '../iteratorCards';
import { types } from '../types';
import { CardCarrousel } from '../CardCarousel';

export const CardsFiidTarj = ({data, catalog}) => {

    const fiidTarj = [...new Set(data.map(e => e.Fiid_Tarj))].sort()
    const cards = interatorCards(data, fiidTarj, catalog, types.FCard);

    return (
        <div className='container'>
            <div className='row mt-0 cont-carousel'>
                <h3><b>FIID TARJETAS</b><BsBank2 size={30} className='pb-2'/> <BsArrowLeftRight size={25}className='pb-1'/> <BsFillCreditCard2BackFill size={30}className='pb-2'/></h3>
                <ReactElasticCarousel breakPoints={breakpoints}>
                    {
                        cards.map(card => (
                            <div className='col m-2' key={card.id}>
                                <CardCarrousel 
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
                </ReactElasticCarousel>
            </div>
        </div>
    )
}
