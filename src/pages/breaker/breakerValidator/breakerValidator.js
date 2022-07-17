import { breakerTypes, messageTypes, proccesingCode, entryModeValues } from "./breakerTypes"
//response = 'text-subField-OK'

export const breakerValidator =  (prop, value) => {
    let response = '';
    switch(prop){
        case breakerTypes.header: {
            const literal = value[0]+value[1]+value[2]; //Validar la palabra ISO
            if(literal === 'ISO' && value.length === 12){
                const header = getChain(value, 3, value.length-1);
                if(header[0]+header[1] === '00' || header[0]+header[1] === '02'){ //Product Indicator
                    if(header[2]+header[3] === '60'){ //Relase Number
                        let flagStatus = false;
                        switch(header[4]+header[5]+header[6]){ //Status
                            case '000': flagStatus = true; break;
                            case '196': flagStatus = true; break;
                            case '199': flagStatus = true; break;
                            case '210': flagStatus = true; break;
                            case '211': flagStatus = true; break;
                            case '220': flagStatus = true; break;
                            case '221' : flagStatus = true; break;
                            case '230' : flagStatus = true; break;
                            case '231' : flagStatus = true; break;
                            default: flagStatus = false; break;
                        }
                        if(flagStatus){
                            let flagCode = false;
                            //Originator Code
                            if(header[7] > '-1' && header[7] < '8'){ flagCode = true }

                            if(flagCode){
                                //Responser Code
                                if(header[8] > '-1' && header[8] < '10'){ response = 'text-subField-OK' }
                            }else{
                                response = 'text-subField-Error';
                            }
                        }
                    }else{
                        response = 'text-subField-Error';
                    }
                }else{
                    response = 'text-subField-Error';
                }
            }else{
                response = 'text-subField-Error';
            }
            break;
        }
        case breakerTypes.type:{
            if(value.length === 4){
                messageTypes.forEach(e => {
                    if(value === e){ response = 'text-subField-OK' }
                })
            }
            break;
        }
        case breakerTypes.BitMap: {
            if(value.length === 32){ response = 'text-subField-OK' }
            break;
        }
        case breakerTypes.SecBitmap: { //P1
            if(value.length === 64){ response = '1' }
            break;
        }
        case breakerTypes.PrimaryAccountNumber: { //P2
            if(value.length === 19){ response = '1' }
            break;
        }
        case breakerTypes.ProccesingCode: { //PENDIENTE  P3
            if(value.length === 6){
                proccesingCode.forEach(e => {
                    e.firstField.forEach(first => {
                        if(value[0]+value[1] === first){ //Primer campo
                            e.secondField.forEach(second => {
                                if(value[2]+value[3] === second){ //Segundo campo 
                                    response = '1';
                                }
                            })
                        }
                    })
                })
            }
            break;
        }
        case breakerTypes.TransactionAmount: { //P4
            if(value.length === 12){ response = '1' }
            break;
        }
        case breakerTypes.SettlementAmount: { //P5
            if(value.length === 12){ response = '1' }
            break;
        }
        case breakerTypes.CardholderBillingAmount: { //P6
            if(value.length === 12){ response = '1' }
            break;
        }
        case breakerTypes.TransmissionDateTime: { //P7
            if(value.length === 10){ //Formato MM/DD/hh/mm/ss
                if(value[0]+value[1] > '01' && value[0]+value[1] < '13'){ //MM
                    if(value[2]+value[3] > '01' && value[2]+value[3] < '32'){ //DD
                        if(value[4]+value[5] > '00' && value[4]+value[5] < '25'){ //hh
                            if(value[6]+value[7] > '00' && value[6]+value[7] < '61'){ //mm
                                if(value[8]+value[9] > '00' && value[8]+value[9] < '61'){ //ss
                                    response = '1'
                                }
                            }
                        }
                    }
                }
            }
            break;
        }
        case breakerTypes.CardholderBillingFeeAmount: { //P8
            if(value.length === 8){ response = '1' }
            break
        }
        case breakerTypes.SettlementConversionDate: { //P9
            if(value.length === 8){ response = '1' }
            break
        }
        case breakerTypes.CardholderBillingConvRate: { //P10
            if(value.length === 8){ response = '1' }
            break
        }
        case breakerTypes.SystemTraceAuditNumber: { //P11
            if(value.length === 6){ response = '1' }
            break
        }
        case breakerTypes.LocalTransactionTime: { //P12
            if(value.length === 6){
                if(value[0]+value[1] >= '00' && value[0]+value[1] < '25'){ //HH
                    if(value[2]+value[3] >= '00' && value[2]+value[3] < '61'){ //mm
                        if(value[4]+value[5] >= '00' && value[4]+value[6] < '61'){ //ss
                            response = '1'
                        }
                    } 
                }
            }
            break
        }
        case breakerTypes.LocalTransactionDate :{ //P13
            if(value.length === 4){
                if(value[0]+value[1] > '00' && value[0]+value[1] < '13'){//MM
                    if(value[2]+value[3] > '00' && value[2]+value[3] < '32'){//DD
                        response = '1'
                    }
                }
            }
            break
        }
        case breakerTypes.ExpirationDate: { //P14
            if(value.length === 4){
                if(value[0]+value[1] > '00' && value[0]+value[1] < '50'){//YY
                    if(value[2]+value[3] > '00' && value[2]+value[3] < '13'){//MM
                        response = '1'
                    }
                }
            }
            break
        }
        case breakerTypes.SettlementDate: { //P15
            if(value.length === 4){ response = '1' }
            break
        }
        case breakerTypes.ConversionDate: { //P16
            if(value.length === 4){
                if(value[0]+value[1] > '00' && value[0]+value[1] < '13'){//MM
                    if(value[2]+value[3] > '00' && value[2]+value[3] < '32'){//DD
                        response = '1'
                    }
                }
            }
            break
        }
        case breakerTypes.CaptureDate: { //P17
            if(value.length === 4){
                if(value.length === 4){
                    if(value[0]+value[1] > '00' && value[0]+value[1] < '13'){//MM
                        if(value[2]+value[3] > '00' && value[2]+value[3] < '32'){//DD
                            response = '1'
                        }
                    }
                }
            }
            break
        }
        case breakerTypes.MerchantType: { //P18
            if(value.length === 4){ response = '1' }
            break
        }
        case breakerTypes.AcquiringInstitutionCountryCode: { //P19
            if(value.length === 3){ response = '1' }
            break
        }
        case breakerTypes.CountryCodePrimaryAccount: { //P20
            if(value.length === 3){ response = '1' }
            break
        }
        case breakerTypes.ForwardingCountryCode: { //P21
            if(value.length === 3){ response = '1' }
            break
        }
        case breakerTypes.POSEntryMode: { //P22
            if(value.length === 3){
                entryModeValues.forEach(e => {
                    e.firstField.forEach(first => {
                        if(value[0]+value[1] === first){
                            e.secondField.forEach(second => {
                                if(value[2] === second){
                                    response = '1'
                                }
                            })
                        }
                    })
                })
            }
            break
        }
    }
    return response;
}

const getChain = (str, initPos, finalPos) => {
    let chain = '';
    for(let i = initPos; i < finalPos+1; i++){
        chain += str[i];
    }
    return chain;
}