import React, { useState, useEffect, useContext } from 'react'
import { getData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { FilterContext } from '../../../services/FilterContext';

export const TableDataB4 = () => {

    const { dat } = useContext(FilterContext);
    const data = dat;

    const columns = [
        {
            name: 'KB4_PT_SRV_ENTRY_MDE',
            selector: row => row.Service_EntryMode,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.serviceEMFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.serviceEMFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_TERM_ENTRY_CAP',
            selector: row => row.Capacity_Terminal,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.capTermFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.capTermFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_LAST_EMV_STAT',
            selector: row => row.EVM_Status,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.evmStatFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.evmStatFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_DATA_SUSPECT',
            selector: row => row.Data_Suspect,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.dataSuspFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.dataSuspFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_APPL_PAN_SEQ_NUM',
            selector: row => row.PAN_Number,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.panFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.panFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_DEV_INFO',
            selector: row => row.Device_Info,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.devinfoFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.devinfoFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_RSN_ONL_CDE',
            selector: row => row.Online_Code,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.onlCodeFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.onlCodeFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB4_ARQC_VRFY',
            selector: row  => row.ARQC_Verification,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.arqcVerFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.arqcVerFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB4_ISO_RC_IND',
            selector: row => row.ID_Response_ISO,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.IDrespFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.IDrespFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
    ]

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
