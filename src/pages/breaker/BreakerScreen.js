import React, { useState } from 'react'
import { BsFileEarmarkBarGraph, BsFileEarmarkPlus } from 'react-icons/bs';
import { uploadFile } from './uploadFile';

export const BreakerScreen = () => {

    const [flagData, setFlagData] = useState(false);

    const handleClick = () => {
        const response = uploadFile();
        console.log(response);
    }
    return (
        <div className='breaker'>
            <h2><BsFileEarmarkBarGraph className='mb-2' size={30}/> Desglosador de Mensajes</h2>
            {
                flagData ? 
                <></>
                :
                <div className='breaker-container'>
                <h3>Elija el archivo que contiene el mensaje que desea validar.</h3>
                <button 
                className='upload-file'
                onClick={handleClick}>
                    <BsFileEarmarkPlus size={30}/><br />Subir Archivo
                </button>
                </div>
            }
            
        </div>
    )
}
