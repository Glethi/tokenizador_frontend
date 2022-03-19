import React, { useState, useEffect } from 'react'
import { getData } from '../../../services/dashService'
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';

export const DataTableB2 = () => {

    const [data, setData] = useState([{

    }])

    const columns = [
        {
            name: 'KB2_BIT_MAP',
            selector: 'Bit_Map',
            center: true,
            wrap: true,
        },
        {
            name: 'KB2_USR_FLD1',
            selector: 'User_Field_One',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_ARQC',
            selector: 'ARQC',
            center: true,
            grow: 6
        },
        {
            name: 'KB2_AMT_AUTH',
            selector: 'AMT_Auth',
            center: true,
            grow: 5
        },
        {
            name: 'KB2_AMT_OTHER',
            selector: 'AMT_Other',
            center: true,
            grow: 5
        },
        {
            name: 'KB2_ATC',
            selector: 'ATC',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_TERM_CTRY_CDE',
            selector: 'Terminal_Country_Code',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_TRAN_CRNCY_CDE',
            selector: 'Terminal_Currency_Code',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_TRAN_DAT',
            selector: 'Transaction_Date',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_TRAN_TYPE',
            selector: 'Transaction_Type',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_UNPREDICT_NUM',
            selector: 'Umpedict_Number',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_ISS_APPL_DATA_LGTH',
            selector: 'Issuing_App_Data_Length',
            center: true,
            wrap: true
        },
        {
            name: 'KB2_ISS_APPL_DATA',
            selector: 'Issuing_App_Data',
            center: true,
            grow: 20,
            wrap: true
        },
        {
            name: 'KB2_TVR',
            selector: 'TVR',
            center: true,
            grow: 3,
            wrap: true
        },
        {
            name: 'KB2_AIP',
            selector: 'AIP',
            center: true,
            wrap: true
        },
    ]

    useEffect(() => {
        async function loadData(){
            const response = await getData('tokenB2')
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
        <div className='tableData table-responsive'>
            <DataTableExtension 
            {...tableData}
            exportHeaders = {true}>
                <DataTable  fixedHeader = {true}
                fixedHeaderScrollHeight = "500px"
                pagination
                highlightOnHover
                />
            </DataTableExtension>
        </div>
    )
}
