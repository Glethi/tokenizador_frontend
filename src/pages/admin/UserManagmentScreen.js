import React, { useContext, useEffect, useState } from 'react';
import { BiUserPin, BiUserPlus } from "react-icons/bi";
import { FormUser } from '../../components/ui/userManagment/FormUser';
import { TableDataUsers } from '../../components/ui/userManagment/TableDataUsers';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';


export const UserManagmentScreen = () => {

    const { setDataTable, user } = useContext(FilterContext);

    useEffect(() => {
        setDataTable([{}]);
        async function loadData(){
            const response = await postData('users', {id: user.id});
            if(response.status === 200){
                setDataTable(response.data);
            }
        }
        loadData();
    }, [])
    

    return (
        <div className='user-managment'>
            <h2><BiUserPin size={30}/> Gestión de Usuarios</h2>
            <h3><BiUserPlus size={30}/> Registrar Usuario</h3>
            <FormUser />
            <TableDataUsers />
        </div>
    )
}
