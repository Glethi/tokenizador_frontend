import Swal from "sweetalert2";
import { postData } from "../../../services/dashService";

export async function createUser(formValue){
    if(formValue.name == "" || formValue.firstname == "" || formValue.username == ""|| 
    formValue.password == "" || formValue.type == ""){
        Swal.fire({
            icon: 'warning',
            title: 'Campos obligatorios',
            text: 'Algunos campos son obligatorios'
        })
    }else{
        const response = await postData('createUser', formValue);
        if(response.data === 1){
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado',
                text: 'El usuario '+formValue.username+' se creó correctamente',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({
                icon: 'Error',
                title: 'El nombre de usuario ya existe',
                text: 'El nombre de usuario '+formValue.username+' ya está registrado, ingrese uno diferente',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}