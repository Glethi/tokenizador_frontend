import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { BsBarChart, BsColumnsGap, BsTable } from "react-icons/bs";
import logo from '../../resources/logo.png';


export const Sidebar = () =>{

    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () =>{
        setDropdown(!dropdown);
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <ul>
                    <li>
                        <img src={logo}/>  
                    </li>
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
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                            to="/codigorespuesta">
                        <BsBarChart size={20}/> Código Respuesta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                            activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                            to="/entrymode">
                        <BsBarChart size={20}/> Entry Mode
                        </NavLink>
                    </li>
                    <Dropdown 
                    isOpen={dropdown} 
                    toggle={handleDropdown}
                    >
                        <DropdownToggle caret className="drap">
                        <BsTable size={20}/> Token's
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem>
                                <NavLink 
                                className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                                to="/tokenc4">
                                Token C4
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink 
                                className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                                to="/tokenc0">
                                Token C0
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink 
                                className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                activeClassName={({isActive}) => " " + (isActive ? 'active' : '')} 
                                to="/tokenb3">
                                Token B3
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink 
                                className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                activeClassName={({isActive}) => " " + (isActive ? 'active' : '')}
                                to="/tokenb4">
                                Token B4
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink 
                                className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                activeClassName={({isActive}) => "" + (isActive ? 'active' : '')} 
                                to="/tokenb2">
                                Token B2
                                </NavLink>  
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ul>
            </div>
        </div>
    )
}