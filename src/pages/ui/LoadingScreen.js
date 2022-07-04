import React from 'react'
import { Spinner } from 'reactstrap';

export const LoadingScreen = () => {
  return (
    <div className='loading-page'>
        <div className='container'>
            <h1>Iniciando Sesión</h1>
            <h2>Cargando datos del perfil...</h2>
            <Spinner color='light' className='spinner' />
        </div>
    </div>
  )
}
