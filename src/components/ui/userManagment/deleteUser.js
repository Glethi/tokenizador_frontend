import Swal from "sweetalert2";
import { postData } from "../../../services/dashService";

export const deleteUser = (row, flag, setFlag) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar el siguiente registro?',
        html:
            `
            <div class="row w-100">
            <hr />
            <div class="col">
                <h5><b>Datos personales</b></h5>
                <label class="mt-2 text-left"><b>Nombre*: </b></label>
                <input value=${row.name} id="name" class="form-control m-1" disabled>

                <label class="mt-2 text-left"><b>Primer Apellido*: </b></label>
                <input value=${row.firstname} id="firstname" class="form-control m-1" disabled>

                <label class="mt-2 text-left"><b>Segundo Apellido: </b></label>
                <input value=${row.secondname} id="secondname" class="form-control m-1" disabled>
            </div>
            <div class="col">
                <h5><b>Datos de la cuenta</b></h5>
                <label class="mt-2 text-left"><b>ID: </b></label>
                <input value=${row.id} id="id" class="form-control m-1" disabled>

                <label class="mt-2 text-left"><b>Nombre Usuario*:</b></label>
                <input value=${row.username} id="username" class="form-control m-1" disabled>

                <label class="mt-2 text-left"><b>Rol*:</b></label>
                <select class="form-select m-1" id="type" disabled>
                    <option value="admin" ${row.type == "admin" ? `selected` : ``}>Adminstrador</option>
                    <option value="op" ${row.type == "op" ? `selected` : ``}>Operador</option>
                </select>
            </div>
        </div>
        `,
        //Botón para eliminar el registro
        showConfirmButton: true,
        confirmButtonText: 'Si, Eliminar',
        confirmButtonColor: 'green',
        //Botón para cancelar la acción
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: 'red',
        width: '70%',
        //Función para eliminar al usuario
        preConfirm: () => {
            const id = Swal.getPopup().querySelector('#id').value
            eraseUser(id, flag, setFlag)
        }
    })
}

async function eraseUser(id, flag, setFlag){
    const response = await postData('deleteUser', {id: id});
    if(response.status === 200){
        if(response.data == 1){
            Swal.fire({
                icon: 'success',
                title: 'Registro eliminado',
                showConfirmButton: false,
                timer: 1500
            })
            setFlag(!flag)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error en la eliminación, intente de nuevo',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}