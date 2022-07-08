import React, { useEffect, useState } from 'react'
import { BsFileEarmarkBarGraph, BsFileEarmarkPlus } from 'react-icons/bs';
import { uploadFile } from './uploadFile';

export const BreakerScreen = () => {

    const [flagData, setFlagData] = useState(false);
    const [data, setData] = useState([{}]);
    
    return (
        <div className='breaker'>
            <h2><BsFileEarmarkBarGraph className='mb-2' size={30}/> Desglosador de Mensajes</h2>
            {
                flagData ? 
                data.map((msm, index) => (
                    <div key={index} className='breaker-container-info'>
                        <div className='row m-2'>
                            <h3>Mensaje No. {index+1}</h3>
                            <div className='col'>
                                <label><b>Mensaje:</b></label><br />
                                <textarea disabled className='text-message'>{msm.message}</textarea>
                            </div>
                        </div>
                        <div className='row m-2'>
                            <div className='col'>
                                <label><b>Header:</b></label><br />
                                <textarea disabled className='text-subField'>{msm.header}</textarea>
                            </div>
                            <div className='col'>
                                <label><b>Type:</b></label><br />
                                <textarea disabled className='text-subField'>{msm.type}</textarea>
                            </div>
                            <div className='col'>
                                <label><b>BitMap:</b></label><br />
                                <textarea disabled className='text-subField'>{msm.bitmap}</textarea>
                            </div>
                        </div>
                    </div>
                ))
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
