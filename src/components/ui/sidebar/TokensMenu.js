import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export const TokensMenu = () => {

    const [dropdownToken, setDropdownToken] = useState(false);

    const handleDropdownToken = () => {
        setDropdownToken(!dropdownToken);
    }

    return (
        <Dropdown
            isOpen={dropdownToken}
            toggle={handleDropdownToken}
            direction={'left'}>
            <DropdownToggle caret className='drapToken'>
                Análisis por Tokens
            </DropdownToggle>
            <DropdownMenu dark>
                <DropdownItem>
                    <NavLink
                        className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                        to="/tokenc4">
                        Token C4
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                        to="/tokenc0">
                        Token C0
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                        to="/tokenb3">
                        Token B3
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                        to="/tokenb4">
                        Token B4
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        className='text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'
                        to="/tokenb2">
                        Token B2
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        className={'text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'}
                        to={'/tokenb5'}>
                        Token B5
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        className={'text-center text-white text-decoration-none rounded py-2 w-100 d-inline-block px-4'}
                        to={'/tokenb6'}>
                        Token B6
                    </NavLink>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
