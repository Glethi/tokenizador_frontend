import React, { useContext, useEffect, useState } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { FilterContext } from '../../../services/FilterContext';
import { postData } from '../../../services/dashService';
import Swal from 'sweetalert2';

export const TableDataC4 = () => {

    const { dat, filter } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            setData([{}]);
            const response = await postData('tokenC4Filter/main', filter)
            if(response.status === 200){
                setData(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Datos cargados correctamente',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
        loadData()
    }, [filter])
    

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
            name: 'KC4_TERM_ATTEND_IND',
            selector: row => row.ID_Terminal_Attended,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_TERM_OPER_IND',
            selector: row => row.ID_Terminal,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_TERM_LOC_IND',
            selector: row => row.Terminal_Location,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_CRDHLDR_PRESENT_IND',
            selector: row => row.ID_Cardholder_Presence,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_CRD_PRESENT_IND',
            selector: row => row.ID_Card_Presence,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_CRD_CAPTR_IND',
            selector: row => row.ID_Card_Capture,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_TXN_STAT_IND',
            selector: row => row.ID_Status,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_TXN_SEC_IND',
            selector: row => row.Security_Level,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_TXN_RTN_IND',
            selector: row => row.Routing_Indicator,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_CRDHLDR_ACTVT_TERM_IND',
            selector: row => row.Terminal_Activation_Cardholder,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_TERM_INPUT_CAP_IND',
            selector: row => row.ID_Terminal_Data_Transfer,
            sortable: true,
            right: true,
            wrap: true,
        },
        {
            name: 'KC4_CRDHLDR_ID_METHOD',
            selector: row => row.ID_Cardholder_Method,
            sortable: true,
            right: true,
            wrap: true,
        },
    ];

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
                    dense />
            </DataTableExtension>
        </div>
    )
}
