import React, { useContext, useState } from 'react'
import logo from '../../resources/logoLogin.png';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import Swal from 'sweetalert2';

export const Auth = () => {

    const { setUser } = useContext(FilterContext);

    const [formValue, setFormValue] = useState({
        username: '',
        password: ''
    });

    function handleForm (value, prop){
        var state = {...formValue}
        state[prop] = value;
        setFormValue(state);
    }

    async function findUser(){
        if(formValue.username !== '' && formValue.password !== ''){
            const response = await postData('userLogin', formValue);
            if(response.status === 200){
                switch(response.data){
                    case -2: {
                        Swal.fire({
                            icon: 'error',
                            title: 'No existe el usuario '+formValue.username,
                            text: 'El registro del usuario no existe dentro de la base de datos',
                        })
                        break;
                    }
                    case -1: {
                        Swal.fire({
                            icon: 'error',
                            title: 'Credenciales incorrectas',
                            text: 'Los campos son incorrectos',
                        })
                    }
                    default: {
                        setUser(response.data);
                        break; 
                    }
                }
                
            }
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Campos vacíos',
                text: 'Llene los campos correctamente',
            })
        }
    }

    return (
        <div className='auth'>
            <div className='auth-container'>
                <h1>SAET Tokenizado</h1>
                <div className='row p-3 mt-5 w-100'>
                    <div className='logo col p-3'>
                        <img src={logo}></img>
                    </div>
                    <div className='form-login col'>
                        <form className='col'>
                            <div className='row p-3'>
                                <label>Nombre de Usuario</label>
                                <input
                                    type='text'
                                    onChange={(ev) => {handleForm(ev.target.value, 'username')}}></input>
                            </div>
                            <div className='row p-3'>
                                <label>Contraseña</label>
                                <input
                                    type='password'
                                    onChange={(ev) => {handleForm(ev.target.value, 'password')}}></input>
                            </div>
                        </form>
                        <div className='row p-3'>
                        <button
                            className='btn btn-primary'
                            onClick={findUser}
                            >Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
