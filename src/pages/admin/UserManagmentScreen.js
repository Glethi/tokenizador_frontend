import React, { useContext, useEffect, useState } from 'react';
import { BiUserPin } from "react-icons/bi";
import { FormUser } from '../../components/ui/userManagment/FormUser';
import { TableDataUsers } from '../../components/ui/userManagment/TableDataUsers';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';


export const UserManagmentScreen = () => {

    const { user } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await postData('users', {id: user.id});
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, [])
    

    return (
        <div className='user-managment'>
            <h2><BiUserPin size={30}/> Gestión de Usuarios</h2>
            <FormUser />
            <TableDataUsers data={data}/>
        </div>
    )
}
