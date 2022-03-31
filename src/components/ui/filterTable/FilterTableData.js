import React, { useEffect, useContext, useState } from 'react';
import { getData, postData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { FilterContext } from '../../../services/FilterContext';

export const FilterTableData = () => {

    const [data, setData] = useState([{}]);
    const { flag, filter, setFilter } = useContext(FilterContext);

    const columns = [
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
            name: 'CODIGO_RESPUESTA',
            selector: row => row.Code_Response,
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
            selector: row => row.R,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'NUM_SEC',
            selector: row => row.Number_Sec,
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'KQ2_ID_MEDIO_ACCESO',
            selector: row => row.ID_Access_Mode,
            sortable: true,
            right: true,
            wrap: true
        },
        {
            name: 'ENTRY_MODE',
            selector: row => row.entryMode,
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

    useEffect(() => {
        async function loadData(){
            if(flag === 'tokenC4DataTable'){
                const response = await getData(flag);
                if(response.status === 200){
                    setData(response.data);
                }
            }else{
                switch(flag){
                    case 'tokenC4Filter': {
                        const responseFilter = await postData(flag, filter);
                        if(responseFilter.status === 200){
                            setData(responseFilter.data);
                        }
                        setFilter({});
                        break;
                    }
                    case 'tokenC0Filter': {
                        const responseFilter = await postData(flag, filter);
                        if(responseFilter.status === 200){
                            setData(responseFilter.data);
                        }
                        setFilter({});
                        break;
                    }
                }
            }
        }
        loadData();
    }, [flag]);

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
