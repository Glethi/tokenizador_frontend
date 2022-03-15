import React, { useState, useEffect } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { getData } from '../../../services/dashService';

export const TableDataB3 = () => {

    const [data, setData] = useState([{
        Bit_Map: '',
        Terminal_Serial_Number: '',
        Check_Cardholder: '',
        User_Field_One: '',
        User_Field_Two: '',
        Terminal_Type_EMV: '',
        App_Version_Number: '',
        CVM_Result: '',
        File_Name_Length: '',
        File_Name: ''
    }]);

    const columns = [
        {
            name: 'KB3_BIT_MAP',
            selector: 'Bit_Map',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Bit_Map.length != 4,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    } 
                },
                {
                    when: row => row.Bit_Map.length == 4,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    } 
                }
            ]
        },
        {
            name: 'KB3_TERM_SRL_NUM',
            selector: 'Terminal_Serial_Number',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Terminal_Serial_Number.length != 8,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Terminal_Serial_Number.length == 8,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_EMV_TERM_CAP',
            selector: 'Check_Cardholder',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Check_Cardholder.length != 8,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)', 
                        color: 'white'
                    }
                },
                {
                    when: row => row.Check_Cardholder.length == 8,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_USR_FLD1',
            selector: 'User_Field_One',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.User_Field_One.length != 4,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.User_Field_One.length == 4,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_USR_FLD2',
            selector: 'User_Field_Two',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.User_Field_Two.length != 8,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)', 
                        color: 'white'
                    }
                },
                {
                    when: row => row.User_Field_Two.length == 8,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_EMV_TERM_TYPE',
            selector: 'Terminal_Type_EMV',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Terminal_Type_EMV.length != 2,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Terminal_Type_EMV.length == 2,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_APP_VER_NUM',
            selector: 'App_Version_Number',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.App_Version_Number.length != 4,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)', 
                        color: 'white'
                    }
                },
                {
                    when: row => row.App_Version_Number.length == 4,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_CVM_RSLTS',
            selector: 'CVM_Result',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.CVM_Result.length != 6,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.CVM_Result.length == 6,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB3_DF_NAME_LGTH',
            selector: 'File_Name_Length',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.File_Name_Length.length != 4,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)', 
                        color: 'white'
                    }
                },
                {
                    when: row => row.File_Name_Length.length == 4,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB3_DF_NAME',
            selector: 'File_Name',
            sortable: true,
            center: true,
            wrap: true,
            grow: 3,
            conditionalCellStyles:[
                {
                    when: row => row.File_Name.length != 32,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.File_Name.length == 32,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
    ]

    useEffect(() => {
        async function loadData(){
            const response = await getData('tokenB3')
            if(response.status === 200){
                setData(response.data)
                console.log(response.data);
            }
        }
        loadData();
    }, []);

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
