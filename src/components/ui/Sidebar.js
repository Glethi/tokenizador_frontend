import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as Icons from "react-icons/bs";

export const Sidebar = () =>{
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <NavLink  //className -> Para checar si es que esta actio el link.
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName={({isActive}) => "" + (isActive ? 'active' : '')} 
                        to="/kq2">
                    <Icons.BsFillBarChartFill /> Kq2 Medio Acceso  
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                        to="/codigorespuesta">
                    <Icons.BsFillBarChartFill /> Código Respuesta
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                        to="/entrymode">
                    <Icons.BsFillBarChartFill/> Entry Mode
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                        to="/tokenc4">
                    <Icons.BsFillBarChartFill/> Token C4
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                        to="/tokenc0">
                    <Icons.BsFillBarChartFill/> Token C0
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName={({isActive}) => " " + (isActive ? 'active' : '')} 
                        to="/tokenb3">
                    <Icons.BsFillBarChartFill/> Token B3
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeclassName={({isActive}) => " " + (isActive ? 'active' : '')}
                        to="/tokenb4">
                <Icons.BsFillBarChartFill/> Token B4
                    </NavLink>
                </li>
                <li>
                <NavLink 
                        className='text-center text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeclassName={({isActive}) => "" + (isActive ? 'active' : '')} 
                        to="/tokenb2">
                 <Icons.BsFillBarChartFill/> Token B2
                    </NavLink>   
                </li>
            </ul>
        </div>
    )
}