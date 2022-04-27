import axios from 'axios';
import Swal from 'sweetalert2';

const host = "http://localhost:8000"

export async function getData (controller) {
    try{
        const response = await axios({
            url: host+"/api/"+controller,
            method: 'GET'
        })
    return response;
    }catch(e){
        Swal.fire({
            icon: 'error',
            title: '¡ERROR!',
            text: 'Sin conexión a la base de datos',
            showConfirmButton: false
        })
    }
}

export async function postData(controller, objectData){
    try{
        const response = await axios({
            url: host+"/api/"+controller,
            method: 'POST',
            data: objectData,
            headers: {
                'content-type': 'application/json'
            }
        })
        return response;
    }catch(e){
        Swal.fire({
            icon: 'error',
            title: '!ERROR!',
            text: 'Sin conexión a base de datos',
            showConfirmButton: false
        })
    }
}