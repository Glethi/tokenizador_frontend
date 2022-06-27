import { types } from "./typesTokenC0"

export const findValueTokenC0 = (prop, data) => {
    let descrip;
    switch(prop){
        case types.ID_Ecom:{
            switch(data){
                case '': descrip = 'No es E-commerce'; break
                case '0': descrip = 'No es E-commerce'; break
                case '1': descrip = 'Transacción MOTO'; break
                case '5': descrip = 'Titular autenticado 3D secure'; break
                case '6': descrip = 'Titual no autenticado 3D secure'; break
                case '7': descrip = '3D secure no realizada'; break
                default: descrip = 'Desconocido'; break
            }
            break;
        }
        case types.Card_T: {
            switch(data){
                case '': descrip = 'Desconocido'; break
                case 'B': descrip = 'Business Card'; break
                case 'R': descrip = 'Corporate Card'; break
                case 'S': descrip = 'Purchasing Card'; break
                default: descrip = 'Desconocido'; break
            }
            break;
        }
        case types.CVV2: {
            switch(data){
                case '': descrip = 'Sin información'; break
                case '0': descrip = 'CV2 no incluido por el negocio'; break
                case '1': descrip = 'CV2 presente'; break
                case '2': descrip = 'CV2 impreso, ilegible'; break
                case '9': descrip = 'CV2 no impreso'; break
                default: descrip = 'Desconocido'; break
            }
            break;
        }
        case types.Info: {
            switch(data){
                case '': descrip = 'Transacción no forzada ni SAF (Preventa)'; break
                case '0': descrip = 'Transacción no forzada ni SAF (Preventa)'; break
                case 'F': descrip = 'Transacción forzada'; break
                case 'S': descrip = 'Transacción Store-And-Fordward'; break
            }
            break;
        }
    }
    return descrip
}