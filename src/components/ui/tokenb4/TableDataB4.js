import React, { useState, useEffect } from 'react'
import { getData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';

export const TableDataB4 = () => {

    const [data, setData] = useState([{
        Service_EntryMode: '',
        Capacity_Terminal: '',
        EVM_Status: '',
        Data_Suspect: '',
        PAN_Number: '',
        Device_Info: '',
        Online_Code: '',
        ARQC_Verification: '',
        ID_Response_ISO: ''
    }]);

    const columns = [
        {
            name: 'KB4_PT_SRV_ENTRY_MDE',
            selector: 'Service_EntryMode',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.Service_EntryMode.length != 3,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Service_EntryMode.length == 3,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_TERM_ENTRY_CAP',
            selector: 'Capacity_Terminal',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.Capacity_Terminal.length != 1,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Capacity_Terminal.length == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_LAST_EMV_STAT',
            selector: 'EVM_Status',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.EVM_Status.length != 1,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.EVM_Status.length == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_DATA_SUSPECT',
            selector: 'Data_Suspect',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.Data_Suspect.length != 1,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Data_Suspect.length == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_APPL_PAN_SEQ_NUM',
            selector: 'PAN_Number',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.PAN_Number.length != 2,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.PAN_Number.length == 2,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_DEV_INFO',
            selector: 'Device_Info',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.Device_Info.length != 6,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Device_Info.length == 6,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_RSN_ONL_CDE',
            selector: 'Online_Code',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.Online_Code.length != 4,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Online_Code.length == 4,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_ARQC_VRFY',
            selector: 'ARQC_Verification',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.ARQC_Verification.length != 1,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.ARQC_Verification.length == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_ISO_RC_IND',
            selector: 'ID_Response_ISO',
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.ID_Response_ISO.length != 1,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.ID_Response_ISO.length == 1 || row.ID_Response_ISO == '',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
    ]

    useEffect(() => {
        async function loadData(){
            const response = await getData('tokenB4')
            if(response.status === 200){
                setData(response.data)
            }
        }
        loadData()
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
                <DataTable 
                fixedHeader = {true}
                fixedHeaderScrollHeight = "500px"
                pagination
                highlightOnHover
                dense/>
            </DataTableExtension>
        </div>
    )
}
