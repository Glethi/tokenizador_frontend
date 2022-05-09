import React, { useContext } from 'react';
import { FilterContext } from '../../../services/FilterContext';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';


export const TableDataCodeResp = () => {

    const { data } = useContext(FilterContext);

    const columns = [
        {
            name: 'ID Código Respuesta',
            selector: 'ID',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row  => row.ID <= '010',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row  => row.ID > '010',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
        ]
        },
        {
            name: 'Código Respuesta',
            selector: 'Description',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.Description == 'Aprobada',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.Description != 'Aprobada',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'TXs',
            selector: 'CodeResp_TXS',
            sortable: true,
            right: true
        },
        {
            name: 'Monto',
            selector: 'CodeResp_Amount',
            sortable: true,
            right: true 
        },
        {
            name: 'Porcentaje %',
            selector: 'CodeResp_Percent',
            sortable: true,
            right: true,
        },
    ]

    const tableData = {
        columns,
        data
    }
    

    return (
        <div className='tableData table-responsive table-striped table-bordered'>
            <DataTableExtensions 
            {... tableData}
            exportHeaders = {true}>
                <DataTable 
                fixedHeader = {true}
                fixedHeaderScrollHeight = "600px"
                pagination
                highlightOnHover
                />
            </DataTableExtensions> 
        </div>
    )
}
