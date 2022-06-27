import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { BsBarChart, BsColumnsGap, BsTable, BsList, BsX } from "react-icons/bs";
import logo from '../../resources/logo.png';
import { FilterContext } from '../../services/FilterContext';
import { BiUserCircle, BiLogOutCircle, BiUser, BiUserPin } from 'react-icons/bi';
import { FilterData } from './k2q/FilterData';
import { FilterDataCodeResp } from './codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from './entryMode/FilterDataEntryMode';
import { FormTerminal } from './FormTerminal';
import { routes } from './userManagment/routesCatalog';
import { postData } from '../../services/dashService';

export const Sidebar = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry } = useContext(FilterContext);
    const [data, setData] = useState([{}])
    
    useEffect(() => {
        async function loadData() {
            const response = await postData('terminalFilter', { Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry })
            if (response.status === 200) {
                setData(response.data);
            }
        }
        loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry])

    const location = useLocation();
    const { setUser, user, setLoading } = useContext(FilterContext);
    const [dropdownToken, setDropdownToken] = useState(false);
    const [dropdownUser, setDropdownUser] = useState(false);
    const [dropdownFilters, setDropdownFilters] = useState(false);
    let locations = {
        locationFilter: true,
        locationDashboard: true,
        locationKq2: true,
        locationCodeResponse: true,
        locationEntry: true
    }
    let userType = true

    const handleDropdownToken = () => {
        setDropdownToken(!dropdownToken);
    }

    const handleDropdownUser = () => {
        setDropdownUser(!dropdownUser);
    }

    const handleDropdownFilters = () => {
        setDropdownFilters(!dropdownFilters)
    }

    const handleLogout = () => {
        setUser({
            username: '',
            name: '',
            fisrtname: '',
            type: '',
            logged: false
        })
        setLoading({
            data: true,
            sesion: true
        });
    }

    if (user.type === 'admin') {
        userType = true;
    }

    switch (location.pathname) {
        case routes.dashboard: locations.locationDashboard = false; break
        case routes.users: locations.locationFilter = false; break;
        case routes.kq2: locations.locationKq2 = false; break
        case routes.codeResponse: locations.locationCodeResponse = false; break
        case routes.entry: locations.locationEntry = false; break
    }
    

    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <ul>
                    {
                        locations.locationFilter ?
                            <li>
                                <Dropdown
                                    isOpen={dropdownFilters}
                                    toggle={handleDropdownFilters}>
                                    <DropdownToggle className='drapFilter'>
                                        {
                                            !dropdownFilters ? <BsList size={30} /> : <BsX size={30} />
                                        }
                                    </DropdownToggle>
                                    <DropdownMenu className='drapFilter-menu'>
                                        {
                                            locations.locationDashboard ?
                                                <><hr />
                                                <DropdownItem className='item text-center text-white' toggle={!handleDropdownFilters}>
                                                    <div className='row'>
                                                        <h5>Filtros Principales</h5>
                                                        {
                                                            locations.locationKq2 ?
                                                            <div className='col'>
                                                            <FilterData />
                                                            </div>
                                                            :<></>
                                                        }
                                                        {
                                                            locations.locationCodeResponse ?
                                                            <div className='col'>
                                                            <FilterDataCodeResp />
                                                            </div>
                                                            :<></>
                                                        }
                                                        {
                                                            locations.locationEntry ?
                                                            <div className='col'>
                                                            <FilterDataEntryMode />
                                                            </div>
                                                            :<></>
                                                        }
                                                    </div>
                                                </DropdownItem></>
                                            : <></>
                                        }
                                        <hr />
                                        <DropdownItem className='item text-center text-white' toggle={!handleDropdownFilters}>
                                            <div className='row'>
                                                <h5>Filtros Terminales</h5>
                                                <div className='col'>
                                                    <FormTerminal data={data}/>
                                                </div>
                                            </div>
                                        </DropdownItem>
                                        <hr />
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            :
                            <></>
                    }
                    <li>
                        <img src={logo} />
                    </li>
                    <li>
                        <NavLink  //className -> Para checar si es que esta actio el link.
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({ isActive }) => "" + (isActive ? 'active' : '')}
                            to="/dashboard">
                            <BsColumnsGap size={20} /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  //className -> Para checar si es que esta actio el link.
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({ isActive }) => "" + (isActive ? 'active' : '')}
                            to="/kq2">
                            <BsBarChart size={20} /> Kq2 Medio Acceso
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                            activeClassName={({ isActive }) => " " + (isActive ? 'active' : '')}
                            to="/codigorespuesta">
                            <BsBarChart size={20} /> Código Respuesta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                            activeClassName={({ isActive }) => " " + (isActive ? 'active' : '')}
                            to="/entrymode">
                            <BsBarChart size={20} /> Entry Mode
                        </NavLink>
                    </li>
                    <Dropdown
                        isOpen={dropdownToken}
                        toggle={handleDropdownToken}>
                        <DropdownToggle caret className='drapToken'>
                            <BsTable size={20} /> Token's
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem>
                                <NavLink
                                    className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                    to="/tokenc4">
                                    <BsColumnsGap size={20} /> Token C4
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                    to="/tokenc0">
                                    <BsColumnsGap size={20} /> Token C0
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                    to="/tokenb3">
                                    <BsColumnsGap size={20} /> Token B3
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                    to="/tokenb4">
                                    <BsColumnsGap size={20} /> Token B4
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                    to="/tokenb2">
                                    <BsColumnsGap size={20} /> Token B2
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                className={'text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'}
                                to={'/tokenb5'}>
                                    <BsColumnsGap size={20}/> Token B5
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                className={'text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'}
                                to={'/tokenb6'}>
                                    <BsColumnsGap size={20}/> Token B6
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {
                        userType
                            ?
                            <li>
                                <NavLink
                                    className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                                    activeClassName={({ isActive }) => " " + (isActive ? 'active' : '')}
                                    to="/users">
                                    <BiUserPin size={20} /> Usuarios
                                </NavLink>
                            </li>
                            : <></>
                    }
                </ul>
                <ul className='userDrop'>
                    <li>
                        <Dropdown
                            isOpen={dropdownUser}
                            toggle={handleDropdownUser}>
                            <DropdownToggle caret className='drapUser'>
                                <BiUserCircle size={30} />
                            </DropdownToggle>
                            <DropdownMenu dark>
                                <DropdownItem disabled className='text-white'>
                                    <BiUser size={20} /> Nombre: {user.name + ' ' + user.fisrtname + ' ' + user.secondname}
                                </DropdownItem>
                                <DropdownItem disabled className='text-white'>
                                    <BiUserCircle size={20} /> Nombre de Usuario: {user.username}
                                </DropdownItem>
                                <DropdownItem disabled className='text-white'>
                                    <BiUserPin size={20} /> Rol: {user.type}
                                </DropdownItem>
                                <DropdownItem onClick={handleLogout} className='text-white'>
                                    <BiLogOutCircle size={20} /> Salir
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    )
}