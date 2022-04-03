import React, { useContext } from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { FilterContext } from '../../../services/FilterContext';

export const DataTableB2 = () => {

    const { dat } = useContext(FilterContext);
    const data = dat;

    const columns = [
        {
            name: 'KB2_BIT_MAP',
            selector: row => row.Bit_Map,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.bitMapFlag == 0,
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
            name: 'KB2_USR_FLD1',
            selector: row => row.User_Field_One,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.userFOFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.userFOFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB2_ARQC',
            selector: row => row.ARQC,
            center: true,
            grow: 6,
            conditionalCellStyles: [
                {
                    when: row => row.arqcFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.arqcFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB2_AMT_AUTH',
            selector: row => row.AMT_Auth,
            center: true,
            grow: 5,
            conditionalCellStyles: [
                {
                    when: row => row.amtAuthFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.amtAuthFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB2_AMT_OTHER',
            selector: row => row.AMT_Other,
            center: true,
            grow: 5,
            conditionalCellStyles: [
                {
                    when: row => row.amtOtherFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.amtOtherFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB2_ATC',
            selector: row => row.ATC,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.atcFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.atcFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB2_TERM_CTRY_CDE',
            selector: row => row.Terminal_Country_Code,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.termConFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.termConFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB2_TRAN_CRNCY_CDE',
            selector: row => row.Terminal_Currency_Code,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.termCurrFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.termCurrFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB2_TRAN_DAT',
            selector: row => row.Transaction_Date,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.transDateFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.transDateFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB2_TRAN_TYPE',
            selector: row => row.Transaction_Type,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.transTypeFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.transTypeFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB2_UNPREDICT_NUM',
            selector: row => row.Umpedict_Number,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.umpNumFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.umpNumFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB2_ISS_APPL_DATA_LGTH',
            selector: row => row.Issuing_App_Data_Length,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.appDataLenFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.appDataLenFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB2_ISS_APPL_DATA',
            selector: row => row.Issuing_App_Data,
            center: true,
            grow: 20,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.appDataFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.appDataFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KB2_TVR',
            selector: row => row.TVR,
            center: true,
            grow: 3,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.tvrFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.tvrFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KB2_AIP',
            selector: row => row.AIP,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.aipFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.aipFlag == 1,
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
                dense
                />
            </DataTableExtension>
        </div>
    )
}
