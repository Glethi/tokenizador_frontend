import React from 'react';
import { BiChip } from 'react-icons/bi';
import { BsArrowLeftRight, BsFillCreditCard2BackFill } from 'react-icons/bs';
import { interatorCards } from '../iteratorCards';
import { types } from '../types';
import ReactElasticCarousel from 'react-elastic-carousel';
import { breakpoints } from '../breakpoints';
import { CardCarrousel } from '../CardCarousel';

export const CardsLnTarj = ({data, catalog}) => {

    const lnTarj = [...new Set(data.map(e => e.Ln_Tarj))].sort()
    const cards = interatorCards(data, lnTarj, catalog, types.LNTarj)

    return (
        <div className='container'>
            <div className='row mt-0 cont-carousel'>
                <h3><b>LN TARJETAS </b><BiChip size={30}/> <BsArrowLeftRight size={25}/> <BsFillCreditCard2BackFill size={30}/></h3>
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
