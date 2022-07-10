import React, { useEffect, useState } from 'react'
import { BsFileEarmarkBarGraph, BsFileEarmarkPlus } from 'react-icons/bs';
import { DataTableBreaker } from './DataTableBreaker';
import { ReportBreaker } from './ReportBreaker';
import { uploadFile } from './uploadFile';

export const BreakerScreen = () => {

    const [flagData, setFlagData] = useState(false);
    const [data, setData] = useState([{}]);
    
    return (
        <div className='breaker'>
            <h2><BsFileEarmarkBarGraph className='mb-2' size={30}/> Desglosador de Mensajes</h2>
            {
                flagData ? 
                    <ReportBreaker data={data}/>
                :
                <div className='breaker-container'>
                <h3>Elija el archivo que contiene el mensaje que desea validar.</h3>
                <button 
                className='upload-file'
                onClick={() => uploadFile(setData, setFlagData)}>
                    <BsFileEarmarkPlus size={30}/><br />Subir Archivo
                </button>
                </div>
            }
            
        </div>
    )
}
