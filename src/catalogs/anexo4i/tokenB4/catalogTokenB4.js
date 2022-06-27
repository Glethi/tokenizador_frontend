import { types } from "./typesTokenB4"

export const findValueTokenB4 = (prop, data) => {
    let descrip
    switch(prop){
        case types.Cap_Term :{
            switch(data){
                case '0': descrip = 'Desconocido'; break
                case '2': descrip = 'Capacidad lectura banda'; break
                case '5': descrip = 'Capacidad lectura chip'; break
                default: descrip = 'Desconocido'; break
            }
            break
        }
        case types.EVM_S: {
            switch(data){
                case '': descrip = 'Campo no utilizado'; break
                case '0': descrip = 'Tarjeta sin chip'; break
                case '1': descrip = 'Tarjeta con chip'; break
            }
            break
        }
        case types.Data_S: {
            switch(data){
                case '': descrip = 'Campo no utilizado'; break
                case '0': descrip = 'Datos CAM correctos'; break
                case '1': descrip = 'Datos CAM no confiables'; break
            }
            break
        }
        case types.PAN_N:{
            switch(data){
                case "": descrip = 'Tarjeta no incluye número de secuencia'; 
                default: descrip = 'Numero de secuencia de aplicación PAN';
            }
            break
        }
        case types.ARQC_Vr: {
            switch(data){
                case '': descrip = 'Default'; break
                case '0': descrip = 'ARQC no verificado'; break
                case '1': descrip = 'ARQC revisado por switch y falló verificación'; break
                case '2': descrip = 'ARQC revisado por switch y pasó verificación'; break
                case '3': descrip = 'ARQC revisado por emisor y falló verificación'; break
                case '4': descrip = 'ARQC revisado por emisor y pasó verificación'; break
                case '9': descrip = 'ARQC no verificado, transacción degreadada a banda magnética en lugar de chip'; break
                default: descrip = 'Desconocido'; break
            }
            break
        }
        case types.ID_Resp_Iso: {
            switch(data){
                case '': descrip = 'No existe información'; break
                case '0': descrip = 'No utilice el código de respuesta de intercambio'; break
                case '1': descrip = 'Utilice el código de respuesta provisto'; break
            }
            break
        }
    }
    return descrip
}