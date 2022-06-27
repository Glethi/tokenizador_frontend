import { types } from "./typesTokenC4"

export const findValueTokenC4 = (prop, data) => {
    let descrip = '';
    switch(prop){
        case types.ID_Term_At: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Terminal atendida'; break
                case '1': descrip = 'Terminal no atendida'; break
                case '2': descrip = 'No se usa terminal'; break
                default : descrip = 'Desconocido'; break;
            }
            break;
        }
        case types.ID_Term: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Reservado'; break
                default : descrip = 'Desconocido'; break;
            }
            break;
        }
        case types.Term_Loc: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Terminal en local'; break
                case '1': descrip = 'Terminal remota'; break
                case '2': descrip = 'Terminal en ubicación de Tarjetahabiente'; break
                case '3': descrip = 'No se usó terminal'; break
                default : descrip = 'Desconocido'; break;
            }
            break;
        }
        case types.ID_CH_Pre: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Tarjetahabiente presente'; break
                case '1': descrip = 'Tarjetahabiente no presente'; break
                case '2': descrip = 'Tarjetahabiente no presente (correo o fax)'; break
                case '3': descrip = 'Tarjetahabiente no presente (voz)'; break
                case '4': descrip = 'Tarjetahabiente no presente (recurrente)'; break
                case '5': descrip = 'Tarjetahabiente no presente (orden electronica)'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
        case types.ID_Card_Pres: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Tarjeta presente'; break
                case '1': descrip = 'Tarjeta no presente'; break;
                default : descrip = 'Desconocido'; break

            }
            break;
        }
        case types.ID_Card_Cap: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'No captura tarjetas'; break
                case '1': descrip = 'Captura tarjetas'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
        case types.ID_Sts: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Requerimiento normal'; break
                case '4': descrip = 'Requerimiento preautorizado'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
        case types.Sec_Lvl: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Sin seguridad'; break
                case '1': descrip = 'Sospechoso de fraude'; break
                case '2': descrip = 'Identificación verificada'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
        case types.Rot_Ind: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'EMV Early'; break
                case '1': descrip = 'EMV Full'; break
                case '3': descrip = 'No EMV'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
        case types.Term_Act_Ch: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'No activada por tarjeta'; break
                case '1': descrip = 'Automática con PIN'; break
                case '2': descrip = 'Autoservicio'; break
                case '3': descrip = 'Monto limitado'; break
                case '4': descrip = 'Comercio in-flag'; break
                case '6': descrip = 'Comercio electrónico'; break
                case '7': descrip = 'Contactless'; break
                case '8': descrip = 'Uso futuro'; break;
                case '9': descrip = 'mPOS'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
        case types.ID_Term_DT: {
            switch(data){
                case '': descrip = 'Espacio en blanco'; break
                case '0': descrip = 'Desconocida'; break
                case '1': descrip = 'No hay terminal'; break
                case '2': descrip = 'Lector Banda magnética'; break
                case '3': descrip = 'Contactless EMV'; break
                case '4': descrip = 'Contactless Magstripe'; break
                case '5': descrip = 'Lector banda y chip EMV'; break
                case '6': descrip = 'Entrada Manual'; break 
                case '7': descrip = 'Lector banda y entrada manual'; break
                case '8': descrip = 'Lector banda, entrada manual y chip EMV'; break
                case '9': descrip = 'Solo chip EMV'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
        case types.ID_CH_Met:{
            switch(data){
                case '': descrip = 'Desconocido (default)'; break
                case '0': descrip = 'Desconocido (default)'; break
                case '1': descrip = 'Firma'; break
                case '2': descrip = 'PIN'; break
                case '3': descrip = 'Terminal no atendida'; break
                case '4': descrip = 'Orden por correo electrónico'; break
                case '5': descrip = 'Transacción QPS'; break
                case '9': descrip = 'Desconocido (default)'; break
                default : descrip = 'Desconocido'; break
            }
            break;
        }
    }
    return descrip
} 