import Swal from "sweetalert2";
import { postData } from "../../../services/dashService";

export const editUser = (row, flag, setFlag) => {
    Swal.fire({
        title: 'Editar Registro',
        html: 
        `
        <div class="row w-100">
            <hr />
            <div class="col">
                <h5><b>Datos personales</b></h5>
                <label class="mt-2 text-left"><b>Nombre*: </b></label>
                <input value=${row.name} id="name" class="form-control m-1">

                <label class="mt-2 text-left"><b>Primer Apellido*: </b></label>
                <input value=${row.firstname} id="firstname" class="form-control m-1">

                <label class="mt-2 text-left"><b>Segundo Apellido: </b></label>
                <input value=${row.secondname} id="secondname" class="form-control m-1">
            </div>
            <div class="col">
                <h5><b>Datos de la cuenta</b></h5>
                <label class="mt-2 text-left"><b>ID: </b></label>
                <input value=${row.id} id="id" class="form-control m-1" disabled>

                <label class="mt-2 text-left"><b>Nombre Usuario*:</b></label>
                <input value=${row.username} id="username" class="form-control m-1">

                <label class="mt-2 text-left"><b>Rol*:</b></label>
                <select class="form-select m-1" id="type">
                    <option value="admin" ${row.type == "admin" ? `selected` : ``}>Adminstrador</option>
                    <option value="op" ${row.type == "op" ? `selected` : ``}>Operador</option>
                </select>
            </div>
        </div>
        <div class="row w-100">
            <div class="col mt-3">
                <p class="text-left">* Campos obligatorios</p>
            </div>
        </div>
        `,
        //Boton para actualizar
        confirmButtonText: 'Actualizar',
        showConfirmButton: true,
        confirmButtonColor: 'green',
        //Boton para cancelar la acción 
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        cancelButtonColor: 'red',
        width: '70%',
        //Función para la actualización del usuario
        preConfirm: () => {
            const id = Swal.getPopup().querySelector('#id').value
            const name = Swal.getPopup().querySelector('#name').value
            const firstname = Swal.getPopup().querySelector('#firstname').value
            const secondname = Swal.getPopup().querySelector('#secondname').value
            const username = Swal.getPopup().querySelector('#username').value
            const type = Swal.getPopup().querySelector('#type').value

            //Validación de todos los campos
            const verifyData = validateData(name, firstname, username);
            if(verifyData){
                const userUpdateData = {
                    id: id,
                    name: name,
                    firstName: firstname,
                    secondName: secondname,
                    userName: username,
                    type: type
                }
                updateUser(userUpdateData, flag, setFlag);
            }else{
                Swal.showValidationMessage('Ingrese los campos obligatorios')
            }
        }
    })
}

const validateData = (name, firstname, username) => {
    if(name == "" || firstname == "" || username == ""){
        return false;
    }else{
        return true;
    }
}

async function updateUser(userUpdateData, flag, setFlag){
    const response = await postData('updateUser', userUpdateData);
    if(response.status === 200){
        if(response.data == 1){
            Swal.fire({
                icon: 'success',
                title: 'Registro actualizado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            setFlag(!flag);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error en la actualización, intente de nuevo',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}