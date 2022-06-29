import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { deleteUser } from './deleteUser';
import { editUser } from './editUser';

export const TableDataUsers = ({data, flag, setFlag}) => {

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'Nombre',
            selector: row => row.name,
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'Primer Apellido',
            selector: row => row.firstname,
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'Segundo Apellido',
            selector: row => row.secondname,
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'Nombre Usuario',
            selector: row => row.username,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.type === 'admin',
                    style: {
                        backgroundColor: 'rgb(121, 189, 249)'
                    }
                },
                {
                    when: row => row.type === 'op',
                    style: {
                        backgroundColor: 'rgb(149, 254, 252)'
                    }
                }
            ]
        }, 
        {
            name: 'Rol',
            selector: row => row.type,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.type === 'admin',
                    style: {
                        backgroundColor: 'rgb(22, 144, 252)'
                    }
                },
                {
                    when: row => row.type === 'op',
                    style: {
                        backgroundColor: 'rgb(45, 245, 242)'
                    }
                }
            ]
        },
        {
            name: 'Editar',
            cell: (row) => 
                <button
                className='edit-button' 
                onClick={() => editUser(row, flag, setFlag)}>
                    <BiEditAlt size={25} color={'#0013FF'} />
                </button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        },
        {
            name: 'Eliminar',
            cell: (row) => 
                <button
                className='erase-button' 
                onClick={() => deleteUser(row, flag, setFlag)}>
                    <BiTrash size={25} color={'red'}/>
                </button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        }
    ]

    const tableData = {
        columns, 
        data
    }

    return (
        <div className='tableData responsive'>
            <DataTableExtension
            {...tableData}
            exportHeaders = {true}>
                <DataTable
                fixedHeader = {true}
                fixedHeaderScrollHeight = "800px"
                pagination
                highlightOnHover
                dense/>
            </DataTableExtension>
        </div>
    )
}
