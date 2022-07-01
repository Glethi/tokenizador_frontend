import React from 'react';
import { BiChip } from 'react-icons/bi';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaStoreAlt } from 'react-icons/fa';
import ReactElasticCarousel from 'react-elastic-carousel';
import { breakpoints } from '../breakpoints';
import { interatorCards } from '../iteratorCards';
import { types } from '../types';
import { CardCarrousel } from '../CardCarousel';

export const CardsLnComer = ({data, catalog}) => {

    const lnComer = [...new Set(data.map(e => e.Ln_Comer))].sort()
    const cards = interatorCards(data, lnComer, catalog, types.LNCom);

    return (
        <div className='container'>
            <div className='row mt-0 cont-carousel'>
                <h3><b>LN COMERCIOS</b> <BiChip size={30} className='pb-2'/> <BsArrowLeftRight size={25} className='pb-2'/> <FaStoreAlt size={30}className='pb-2'/></h3>
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
