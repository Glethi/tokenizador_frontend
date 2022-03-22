import React, { useState, useEffect, useContext } from 'react';
import { getData } from '../../../services/dashService';
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { FilterContext } from '../../../services/FilterContext';

export const TableDataEntryMode = () => {

    const [data, setData] = useState([{}]);
    const { valFilterEntry } = useContext(FilterContext);

    const columns = [
        {
            name: 'ID Entry Mode',
            selector: 'ID',
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'Entry Mode',
            selector: 'entryMode_Description',
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'TXs',
            selector: 'accepted_TX',
            sotable: true,
            right: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(47, 164, 11)',
            }
        },
        {
            name: 'Monto',
            selector: 'accepted_Amount',
            sortable: true,
            right: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(100, 236, 57)',
            }
        },
        {
            name: 'Porcentaje %',
            selector: 'percenTX_Accepted',
            sortable: true,
            right: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(47, 164, 11)',
            }
        },
        {
            name: 'TXs',
            selector: 'rejected_TX',
            sortable: true,
            right: true,
            wrap: true,
            style:{
                backgroundColor: 'rgb(187, 1, 1)',
                color: 'white'
            }
        },
        {
            name: 'Monto',
            selector: 'rejected_Amount',
            sortable: true,
            right: true,
            wrap: true,
            style:{
                backgroundColor: 'rgb(255, 27, 27)',
                color: 'white'
            }
        },
        {
            name: 'Porcentaje %',
            selector: 'percenTX_Rejected',
            sortable: true,
            right: true,
            wrap: true,
            style:{
                backgroundColor: 'rgb(187, 1, 1)',
                color: 'white'
            }
        }
    ]

    useEffect(() => {
        async function loadData(){
            const response = await getData('entryMode');
            if(response.status === 200 && valFilterEntry == 'allData'){
                setData(response.data);
            }else{
                setData([response.data[valFilterEntry]])
            }
        }
        loadData();
    }, [valFilterEntry])

    const tableData = {
        columns,
        data
    };
    
    return (
        <div className='tableData table-responsive table-striped table-bordered'>
            <DataTableExtensions 
            {...tableData}
            exportHeaders = {true} 
            >
                <DataTable 
                fixedHeader = {true}
                fixedHeaderScrollHeight = "200px"
                pagination
                highlightOnHover/>
            </DataTableExtensions>
        </div>
    )
}
