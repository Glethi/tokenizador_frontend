import React from 'react';
import { Kq2Select } from './filters/Kq2Select';
import { CodeResponseSelect } from './filters/CodeResponseSelect';
import { EntryModeSelect } from './filters/EntryModeSelect';

export const FormFilterDashboard = () => {

    return (
        <div className='form'>
            <div className='row w-100'>
                <div className='col-md-4'>
                    <label>Medio de Acceso</label>
                    <Kq2Select />
                </div>
                <div className='col-md-4'>
                    <label>Código de Respuesta</label>
                    <CodeResponseSelect />
                </div>
                <div className='col-md-4'>
                    <label>Entry Mode</label>
                    <EntryModeSelect />
                </div>
            </div>
            
        </div>
    )
}
