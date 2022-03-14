import axios from 'axios';
import Swal from 'sweetalert2';

export async function getData (model) {
    try{
        const response = await axios({
            url: "http://localhost:8000/api/"+model,
            method: 'GET'
        })
    return response;
    }catch(e){
        Swal.fire({
            icon: 'error',
            title: '¡ERROR!',
            text: 'No se ha podido conectar a la base de datos, contacte con soporte',
            showConfirmButton: false,
        })
    }
}

export async function postData(model, objectData){
    try{
        const response = await axios({
            url: "http://localhost:8000/api/"+model,
            method: 'POST',
            data: objectData,
        })
        return response;
    }catch(e){
        Swal.fire({
            icon: 'warning',
            title: 'Precaución',
            text: 'Para utilizar el filtro, elija valores en el formulario',
        })
    }
}