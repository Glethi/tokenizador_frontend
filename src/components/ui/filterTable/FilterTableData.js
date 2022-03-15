import React, { useState, useEffect, useContext } from 'react';
import { getData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { DataContext } from '../../../services/DataContext';

export const FilterTableData = () => {

    //const [data, setData] = useState([{}]);

    const {data, setDat} = useContext(DataContext);

    const columns = [
        {
            name: 'FIID_TARJ',
            selector: 'Fiid_Card',
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'FIID_COMER',
            selector: 'Fiid_Comerce',
            sortable: true,
            center: true,
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
            name: 'CODIGO_RESPUESTA',
            selector: 'Code_Response',
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row  => row.Code_Response <= '010',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row  => row.Code_Response > '010',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'R',
            selector: 'R',
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'NUM_SEC',
            selector: 'Number_Sec',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'KQ2_ID_MEDIO_ACCESO',
            selector: 'ID_Access_Mode',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'ENTRY_MODE',
            selector: 'entryMode',
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'MONTO',
            selector: 'amount',
            sortable: true,
            right: true,
            wrap: true
        },
    ]

    useEffect(() => {
        async function loadData(){
            const response = await getData('tokenC4DataTable');
            if(response.status === 200){
                setDat(response.data)
            }
        }
        loadData();
    }, []);

    const tableData = {
        columns,
        data
    };

    return (
        <div className='tableData table-responsive'>
            <DataTableExtension 
            {...tableData}
            exportHeaders = {true}>
                <DataTable
                fixedHeader = {true}
                fixedHeaderScrollHeight = "500px"
                pagination
                highlightOnHover 
                dense
                />
            </DataTableExtension>
        </div>
    )
}
