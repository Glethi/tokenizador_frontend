import numeral from "numeral";
import { types } from "./types";

export const interatorCards = (data, dataCard, catalog, flag) => {
    let cards = [], id = 0;

    for(let i = 0; i < dataCard.length; i++){
        let tx = 0, txAccepted = 0, txRejected = 0; 
        let amount = 0.0, amountRejected = 0.0, amountAccepted = 0.0;
        let percent = 0.0, percentAccepted = 0.0, percentRejected = 0.0;
        let subtitle = '';
        data.forEach(e => {
            switch(flag){
                case types.FCom:{
                    if(e.Fiid_Comer === dataCard[i]){
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
                    break
                }
                case types.FTerm: {
                    if(e.Fiid_Term === dataCard[i]){
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
                    break
                }
                case types.FCard: {
                    if(e.Fiid_Tarj === dataCard[i]){
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
                    break
                }
                case types.LNCom: {
                    if(e.Ln_Comer === dataCard[i]){
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
                    break
                }
                case types.LNTerm: {
                    if(e.Ln_Term === dataCard[i]){
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
                    break
                }
                case types.LNTarj: {
                    if(e.Ln_Tarj === dataCard[i]){
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
                    break
                }
            }
            
        })
        catalog.forEach(e => {
            switch(flag){
                case types.FCom:{
                    if(dataCard[i] === e.Fiid_Comer){
                        subtitle = e.Fiid_Comer_Des
                    }
                    break
                }
                case types.FTerm:{
                    if(dataCard[i] === e.Fiid_Term){
                        subtitle = e.Fiid_Term_Des
                    }
                    break
                }
                case types.FCard: {
                    if(dataCard[i] === e.Fiid_Tarj){
                        subtitle = e.Fiid_Tarj_Des
                    }
                    break
                }
                case types.LNCom: {
                    if(dataCard[i] === e.Ln_Comer){
                        subtitle = e.Ln_Comer_Des
                    }
                    break
                }
                case types.LNTerm: {
                    if(dataCard[i] === e.Ln_Term){
                        subtitle = e.Ln_Term_Des
                    }
                    break
                }
                case types.LNTarj: {
                    if(dataCard[i] === e.Ln_Tarj){
                        subtitle = e.Ln_Tarj_Des
                    } 
                }
            }
            
        })
        id++;
        percent = (tx / tx) * 100;
        percentAccepted = (txAccepted / tx) * 100;
        percentRejected = (txRejected / tx) * 100;
        cards.push({
            id: id,
            title: dataCard[i],
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
    return cards;
}