import React from 'react';
import { CardCarrousel } from '../CardCarousel';
import { breakpoints } from '../breakpoints';
import { interatorCards } from '../iteratorCards';
import ReactElasticCarousel from 'react-elastic-carousel';
import { BsBank2, BsArrowLeftRight } from 'react-icons/bs';
import { MdPointOfSale } from 'react-icons/md';
import { types } from '../types';

export const CardsFiidTerm = ({data, catalog}) => {

    const fiidTerm = [... new Set(data.map(e => e.Fiid_Term))].sort()
    console.log(data);

    //Iteración de las cartas FIID_TERM
    const cards = interatorCards(data, fiidTerm, catalog, types.FTerm);

    return (
        <div className='container'>
            <div className='row mt-0 cont-carousel'>
                <h3><b>FIID TERMINALES</b> <BsBank2 size={30} className='pb-2'/> <BsArrowLeftRight size={25} className='pb-2'/> <MdPointOfSale size={30} className='pb-2'/> </h3>
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
