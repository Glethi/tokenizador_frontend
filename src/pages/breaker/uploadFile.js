import Swal from "sweetalert2";
import { postData } from "../../services/dashService";

export const uploadFile = () => {
    Swal.fire({
        title: 'Desglosador de Mensajes',
        html:
        `
        <input type="file" id="file" class="form-control" accept=".txt"></input>
        `,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: 'red',
        confirmButtonText: 'Enviar',
        confirmButtonColor: 'green',
        preConfirm: () => {
            const file = Swal.getPopup().querySelector('#file').files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                const message = e.target.result;
                const breaks = sendMessage(message)
                return breaks;
            }
            reader.readAsText(file);
        }
    })
}

async function sendMessage(message) {
    console.log('mensaje', message);
    const response = await postData('breaker', {message: message});
    if(response.status === 200){
        return response.data;
    }
}