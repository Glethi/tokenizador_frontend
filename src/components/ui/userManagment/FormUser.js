import React, { useState } from 'react';
import Select from 'react-select';
import { createUser } from './createUser';
import { BiUserPlus } from 'react-icons/bi';

export const FormUser = () => {

    const [formValue, setFormValue] = useState({
        name: '',
        firstname: '',
        secondname: '',
        username: '',
        password: '',
        type: ''
    });

    function sysChanges(value, prop) {
        var state = { ...formValue }
        state[prop] = value
        setFormValue(state)
    }

    function sendForm(ev) {
        ev.preventDefault();
        createUser(formValue);
    }

    return (
        <div className='form-user'>
            <h3><BiUserPlus size={30}/> Registrar Usuario</h3>
            <div className='row'>
                <div className='col m-5 personalData'>
                    <h5>Datos personales</h5>
                    <label>Nombre:*</label><br />
                    <input
                        value={formValue.name}
                        name='name'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)} />
                    <label>Primer Apellido:*</label><br />
                    <input
                        name='firstname'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)} />
                    <label>Segundo Apellido:</label><br />
                    <input
                        name='secondname'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)} />
                </div>
                <div className='col m-5 profileData'>
                    <h5>Datos de la cuenta</h5>
                    <label>Nombre de Usuario:*</label><br />
                    <input
                        name='username'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)} />
                    <label>Contraseña:*</label><br />
                    <input
                        name='password'
                        type='password'
                        onChange={(ev) => sysChanges(ev.target.value, ev.target.name)} />
                    <label>Rol:*</label><br />
                    <Select
                        onChange={(ev) => sysChanges(ev.value ,'type')}
                        options={[
                            { value: 'admin', label: 'Administrador' },
                            { value: 'op', label: 'Operador' }
                        ]}
                        className={'select'}
                        placeholder={'Seleccione un rol'}
                        noOptionsMessage={() => 'No existe esta opción'} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <button className='register-botton'
                        type='button'
                        onClick={(ev) => sendForm(ev)}>
                        Enviar</button>
                </div>
            </div>
        </div>
        
    )
}
