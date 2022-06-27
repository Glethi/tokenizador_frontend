import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { editUser } from './editUser';

export const TableDataUsers = ({data}) => {

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
            name: 'Editar Usuario',
            cell: (row) => 
                <button
                className='edit-button' 
                onClick={() => editUser(row)}>
                    <BiEditAlt size={20}/>
                </button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        },
        {
            name: 'Eliminar Usuario',
            cell: (row) => 
                <button
                className='erase-button' 
                onClick={() => console.log('boton borrar jala')}>
                    <BiTrash size={20}/>
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
