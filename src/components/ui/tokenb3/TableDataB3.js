import React, { useContext } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { FilterContext } from '../../../services/FilterContext';


export const TableDataB3 = () => {

    const { dat } = useContext(FilterContext);
    const data = dat;

    const columns = [
        {
            name: 'KB3_BIT_MAP',
            selector: row => row.Bit_Map,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.bitMapFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.bitMapFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_TERM_SRL_NUM',
            selector: row => row.Terminal_Serial_Number,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.termSerNumFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.termSerNumFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_EMV_TERM_CAP',
            selector: row => row.Check_Cardholder,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.checkCHFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.checkCHFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_USR_FLD1',
            selector: row => row.User_Field_One,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.userFoFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.userFoFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_USR_FLD2',
            selector: row => row.User_Field_Two,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.userFtFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.userFtFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_EMV_TERM_TYPE',
            selector: row => row.Terminal_Type_EMV,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.termTypeFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.termTypeFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_APP_VER_NUM',
            selector: row => row.App_Version_Number,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.appVersionFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.appVersionFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_CVM_RSLTS',
            selector: row => row.CVM_Result,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.cvmResFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.cvmResFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_DF_NAME_LGTH',
            selector: row => row.File_Name_Length,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.fileNamelenFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.fileNamelenFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_DF_NAME',
            selector: row => row.File_Name,
            sortable: true,
            center: true,
            wrap: true,
            grow: 3,
            conditionalCellStyles: [
                {
                    when: row => row.fileNameFlag !== 1,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.fileNameFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
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
