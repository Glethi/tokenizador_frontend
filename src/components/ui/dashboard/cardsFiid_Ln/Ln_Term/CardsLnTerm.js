import React from 'react';
import { BiChip } from 'react-icons/bi';
import { BsArrowLeftRight } from 'react-icons/bs';
import { MdPointOfSale } from 'react-icons/md';
import ReactElasticCarousel from 'react-elastic-carousel';
import { breakpoints } from '../breakpoints';
import { interatorCards } from '../iteratorCards';
import { types } from '../types';
import { CardCarrousel } from '../CardCarousel';

export const CardsLnTerm = ({data, catalog}) => {

    const lnTerm = [...new Set(data.map(e => e.Ln_Term))].sort()
    const cards = interatorCards(data, lnTerm, catalog, types.LNTerm)
    return (
        <div className='container'>
            <div className='row mt-0 cont-carousel'>
                <h3><b>LN TERMINNALES </b><BiChip size={30} className='mb-2'/> <BsArrowLeftRight size={25} className='mb-2'/> <MdPointOfSale size={20} className='mb-2'/></h3>
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
