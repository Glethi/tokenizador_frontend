import React from 'react';
import { CodeResponseSelect } from '../dashboard/filters/CodeResponseSelect';

export const FilterDataCodeResp = () => {
    
    return (
        <div className='filter-CodeResponse'>
            <div className='row w-100'>
                <div className='col'>
                <label>Código Respuesta</label><br/>
                <CodeResponseSelect />
                </div>
            </div>
        </div>
    )
}
