import React, { useEffect } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { FilterContext } from '../../../services/FilterContext';
import { postData } from '../../../services/dashService';


export const TableDataB3 = () => {

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB3Filter/main')
        }
    }, [])
    

    const columns = [
        {
            name: 'KB3_BIT_MAP',
            selector: row => row.Bit_Map,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_TERM_SRL_NUM',
            selector: row => row.Terminal_Serial_Number,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_EMV_TERM_CAP',
            selector: row => row.Check_Cardholder,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_USR_FLD1',
            selector: row => row.User_Field_One,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_USR_FLD2',
            selector: row => row.User_Field_Two,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_EMV_TERM_TYPE',
            selector: row => row.Terminal_Type_EMV,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_APP_VER_NUM',
            selector: row => row.App_Version_Number,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_CVM_RSLTS',
            selector: row => row.CVM_Result,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_DF_NAME_LGTH',
            selector: row => row.File_Name_Length,
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'KB3_DF_NAME',
            selector: row => row.File_Name,
            sortable: true,
            center: true,
            wrap: true,
            grow: 3,
        }
    ]

    const tableData = {
        columns,
        data
    }

    return (
        <div className='tableData table-responsive'>
            <DataTableExtension
                {...tableData}
                exportHeaders={true}>
                <DataTable
                    fixedHeader={true}
                    fixedHeaderScrollHeight="600px"
                    pagination
                    highlightOnHover
                    dense />
            </DataTableExtension>
        </div>
    )
}
