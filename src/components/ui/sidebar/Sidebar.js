import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { BsList, BsX } from "react-icons/bs";
import logo from '../../../resources/logo.png';
import { FilterContext } from '../../../services/FilterContext';
import { BiUserCircle, BiLogOutCircle, BiUser, BiUserPin } from 'react-icons/bi';
import { FilterData } from '../k2q/FilterData';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';
import { FormTerminal } from '../FormTerminal';
import { routes } from '../userManagment/routesCatalog';
import { postData } from '../../../services/dashService';
import { TokensMenu } from './TokensMenu';

export const Sidebar = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setUser, user, setLoading } = useContext(FilterContext);
    const [data, setData] = useState([{}])
    const location = useLocation();
    const [dropdownUser, setDropdownUser] = useState(false);
    const [dropdownFilters, setDropdownFilters] = useState(false);
    const [dropdownTools, setDropwonTools] = useState(false);
    let locations = {
        locationFilter: true,
        locationDashboard: true,
        locationKq2: true,
        locationCodeResponse: true,
        locationEntry: true
    }

    useEffect(() => {
        async function loadData() {
            const response = await postData('terminalFilter', { Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry })
            if (response.status === 200) {
                setData(response.data);
            }
        }
        loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry])



    const handleDropdownUser = () => {
        setDropdownUser(!dropdownUser);
    }

    const handleDropdownFilters = () => {
        setDropdownFilters(!dropdownFilters)
    }

    const handleDropdownTools = () => {
        setDropwonTools(!dropdownTools)
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

    switch (location.pathname) {
        case routes.dashboard: locations.locationDashboard = false; break
        case routes.users: locations.locationFilter = false; break;
        case routes.breaker: locations.locationFilter = false; break;
        case routes.kq2: locations.locationKq2 = false; break
        case routes.codeResponse: locations.locationCodeResponse = false; break
        case routes.entry: locations.locationEntry = false; break
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <ul>
                    <div className='some'>
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
                                                                        : <></>
                                                                }
                                                                {
                                                                    locations.locationCodeResponse ?
                                                                        <div className='col'>
                                                                            <FilterDataCodeResp />
                                                                        </div>
                                                                        : <></>
                                                                }
                                                                {
                                                                    locations.locationEntry ?
                                                                        <div className='col'>
                                                                            <FilterDataEntryMode />
                                                                        </div>
                                                                        : <></>
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
                                                        <FormTerminal data={data} />
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
                    </div>
                    <li>
                        <NavLink  //className -> Para checar si es que esta actio el link.
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({ isActive }) => "" + (isActive ? 'active' : '')}
                            to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  //className -> Para checar si es que esta actio el link.
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-3'
                            activeClassName={({ isActive }) => "" + (isActive ? 'active' : '')}
                            to="/kq2">
                            Kq2 Medio Acceso
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                            activeClassName={({ isActive }) => " " + (isActive ? 'active' : '')}
                            to="/codigorespuesta">
                            Código Respuesta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                            activeClassName={({ isActive }) => " " + (isActive ? 'active' : '')}
                            to="/entrymode">
                            Entry Mode
                        </NavLink>
                    </li>
                    <Dropdown
                        isOpen={dropdownTools}
                        toggle={handleDropdownTools}>
                        <DropdownToggle caret className='drapToken'>
                            <label>Complementos</label>
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem toggle={!handleDropdownTools} text>
                                <TokensMenu />
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                                    to="/desglosador">
                                    Desglosador
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {
                        user.type === 'admin'
                            ?
                            <li>
                                <NavLink
                                    className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                                    activeClassName={({ isActive }) => " " + (isActive ? 'active' : '')}
                                    to="/users">
                                    Usuarios
                                </NavLink>
                            </li>
                            : <></>
                    }
                    <li className='user'>
                        <Dropdown
                            isOpen={dropdownUser}
                            toggle={handleDropdownUser}>
                            <DropdownToggle caret className='drapUser'>
                                <BiUserCircle size={25} className='mb-2' />
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