import React from 'react'
import { Spinner } from 'reactstrap';

export const SesionScreen = () => {
  return (
    <div className='sesion-page'>
        <div className='container'>
            <h1>Cerrando sesión</h1>
            <Spinner color='light' className='spinner'/>
        </div>
    </div> 
  )
}