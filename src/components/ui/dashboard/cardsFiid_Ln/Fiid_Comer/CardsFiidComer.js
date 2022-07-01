import React from 'react';
import { CardCarrousel } from '../CardCarousel';
import ReactElasticCarousel from 'react-elastic-carousel';
import { breakpoints } from '../breakpoints';
import { interatorCards } from '../iteratorCards';
import { FaStoreAlt } from 'react-icons/fa';
import { BsBank2, BsArrowLeftRight } from 'react-icons/bs';
import { types } from '../types';

export const CardsFiidComer = ({data, catalog}) => {

    const fiidComer = [...new Set (data.map(e => e.Fiid_Comer))].sort(); 

    //Iteracion de las cartas FIID_COMER
    const cards = interatorCards(data, fiidComer, catalog, types.FCom);

    return (
        <div className='container'>
            <div className='row mt-0 cont-carousel'>
                <h3><b>FIID COMERCIOS</b> <BsBank2 size={30} className='pb-2'/> <BsArrowLeftRight size={25} className='pb-2'/> <FaStoreAlt size={30} className='pb-2'/></h3> 
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
