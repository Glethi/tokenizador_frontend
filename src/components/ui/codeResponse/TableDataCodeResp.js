import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { getData } from '../../../services/dashService';

export const TableDataCodeResp = () => {

    const [data, setData] = useState([{}]);

    const columns = [
        {
            name: 'ID Código Respuesta',
            selector: 'ID_CodeResponse',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row  => row.ID_CodeResponse <= '010',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row  => row.ID_CodeResponse > '010',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
        ]
        },
        {
            name: 'Código Respuesta',
            selector: 'CodeResp_Description',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.CodeResp_Description == 'Aprobada',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.CodeResp_Description != 'Aprobada',
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

    useEffect(() => {
        async function loadData(){
            const response = await getData('codeResponse');
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, [])

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
                fixedHeaderScrollHeight = "200px"
                pagination
                highlightOnHover
                />
            </DataTableExtensions> 
        </div>
    )
}
