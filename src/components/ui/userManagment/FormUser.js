import React, { useState } from 'react';
import { postData } from '../../../services/dashService';
import Swal from 'sweetalert2';


export const FormUser = () => {

    const [formValue, setFormValue] = useState({
        name: '',
        firstname: '',
        secondname: '',
        username: '',
        password: '',
        type: ''
    });

    function sysChanges(value, prop){
        var state = {...formValue}
        state[prop] = value
        setFormValue(state)
    }

    async function createUser(){
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


    return (
        <div className='form-user'>
            <form className='row'>
                <div className='row mt-5'>
                    <h5>Datos personales</h5>
                    <div className='col'>
                        <label>Nombre*</label> 
                        <input 
                        name='name' 
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)}></input>
                    </div>
                    <div className='col'>
                        <label>Primer Apellido*</label>
                        <input 
                        name='firstname'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)}></input>
                    </div>
                    <div className='col'>
                        <label>Segundo Apellido</label>
                        <input 
                        name='secondname'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)}></input>
                    </div>
                </div>
                <div className='row mt-5'>
                    <h5>Datos de la cuenta</h5>
                    <div className='col'>
                        <label>Nombre de Usuario*</label><br />
                        <input 
                        name='username'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)}></input><br />
                    </div>
                    <div className='col'>
                        <label>Contraseña*</label><br />
                        <input 
                        name='password' 
                        type='password'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)}></input><br />
                    </div>
                    <div className='col'>
                        <label>Rol*</label><br />
                        <select onChange={(ev) => sysChanges(ev.target.value, 'type')}>
                            <option>Seleccionar Rol</option>
                            <option value={'admin'}>Administrador</option>
                            <option value={'op'}>Operador</option>
                        </select><br />
                    </div>
                </div>
            </form>
            <div className='row m-4'>
                <div className='col'>
                    <button 
                    className='register-botton'
                    onClick={createUser}
                    >Registrar</button>
                </div>
                <p>* Datos obligatorios</p>
            </div>
        </div>
    )
}
