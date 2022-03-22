import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsBarChart, BsColumnsGap, BsTable } from "react-icons/bs";

export const Sidebar = () =>{
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <ul>
                    <li>
                        <NavLink  //className -> Para checar si es que esta actio el link.
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => "" + (isActive ? 'active' : '')} 
                            to="/">
                        <BsColumnsGap size={20}/> Dashboard  
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  //className -> Para checar si es que esta actio el link.
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => "" + (isActive ? 'active' : '')} 
                            to="/kq2">
                        <BsBarChart size={20}/> Kq2 Medio Acceso  
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                            to="/codigorespuesta">
                        <BsBarChart size={20}/> Código Respuesta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                            to="/entrymode">
                        <BsBarChart size={20}/> Entry Mode
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                            to="/tokenc4">
                        <BsTable size={20}/> Token C4
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                            to="/tokenc0">
                        <BsTable size={20}/> Token C0
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')} 
                            to="/tokenb3">
                        <BsTable size={20}/> Token B3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                            to="/tokenb4">
                    <BsTable size={20}/> Token B4
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({isActive}) => "" + (isActive ? 'active' : '')} 
                            to="/tokenb2">
                    <BsTable size={20}/>  Token B2
                        </NavLink>   
                    </li>
                </ul>
            </div>
        </div>
    )
}