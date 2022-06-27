import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { FilterContext } from '../../../services/FilterContext';

export const FilterTableData = ({data}) => {

    const columns = [
        {
            name: 'KQ2_ID_MEDIO_ACCESO',
            selector: 'ID_Access_Mode',
            sortable: true,
            right: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(24, 143, 254 )'
            }
        },
        {
            name: 'CODIGO_RESPUESTA',
            selector: 'ID_Code_Response',
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
            selector: 'ID_Entry_Mode',
            sortable: true,
            right: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(150, 24, 254)',
                color: 'white'
            }
        },
        {
            name: 'ID_COMER',
            selector: 'ID_Comer',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'TERM_COMER',
            selector: 'Term_Comer',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'FIID_COMER',
            selector: 'Fiid_Comer',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'FIID_TERM',
            selector: 'Fiid_Term',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'LN_COMER',
            selector: 'Ln_Comer',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'LN_TERM',
            selector: 'Ln_Term',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'FIID_TARJ',
            selector: 'Fiid_Card',
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'LN_TARJ',
            selector: 'Ln_Card',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'NOMBRE_DE_TERMINAL',
            selector: 'Terminal_Name',
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'NUM_SEC',
            selector: 'Number_Sec',
            sortable: true,
            right: true,
            wrap: true,
            grow: 1.2
        },
        {
            name: 'MONTO',
            selector: 'amount',
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
