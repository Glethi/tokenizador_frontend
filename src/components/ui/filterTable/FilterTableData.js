import React, { useEffect, useContext, useState } from 'react';
import { getData, postData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { FilterContext } from '../../../services/FilterContext';

export const FilterTableData = () => {

    const { dataTable:data } = useContext(FilterContext);

    const columns = [
        {
            name: 'Q2_MEDIO_ACCESO',
            selector: row => row.ID_Access_Mode,
            sortable: true,
            right: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(24, 143, 254 )'
            }
        },
        {
            name: 'CODIGO_RESPUESTA',
            selector: row => row.ID_Code_Response,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.ID_Code_Response <= '010',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.ID_Code_Response > '010',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'ENTRY_MODE',
            selector: row => row.ID_Entry_Mode,
            sortable: true,
            right: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(150, 24, 254)',
                color: 'white'
            }
        },
        {
            name: 'FIID_TARJ',
            selector: row => row.Fiid_Card,
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'FIID_COMER',
            selector: row => row.Fiid_Comerce,
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'NOMBRE_DE_TERMINAL',
            selector: row => row.Terminal_Name,
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'NUM_SEC',
            selector: row => row.Number_Sec,
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'MONTO',
            selector: row => row.amount,
            sortable: true,
            right: true,
            wrap: true
        },
    ]
    
    const tableData = {
        columns,
        data
    };

    return (
        <div className='tableData table-responsive'>
            <DataTableExtension
                {...tableData}
                exportHeaders={true}>
                <DataTable
                    fixedHeader={true}
                    fixedHeaderScrollHeight="500px"
                    pagination
                    highlightOnHover
                    dense
                />
            </DataTableExtension>
        </div>
    )
}
