import React, { useContext } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { FilterContext } from '../../../services/FilterContext';

export const TableDataC4 = () => { 

    const { dat } = useContext(FilterContext);
    var data = dat;

    const columns = [
        {
            name: 'KC4_TERM_ATTEND_IND',
            selector:  row => row.ID_Terminal_Attended,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Terminal_Attended <= '2',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.ID_Terminal_Attended > '2',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_TERM_OPER_IND',
            selector: row => row.ID_Terminal,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Terminal == '0',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)',
                    }
                },
                {
                    when: row => row.ID_Terminal != '0',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_TERM_LOC_IND',
            selector: row => row.Terminal_Location,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Terminal_Location <= '3',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.Terminal_Location > '3',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_CRDHLDR_PRESENT_IND',
            selector: row => row.ID_Cardholder_Presence,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Cardholder_Presence <= '5',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)',
                    }
                },
                {
                    when: row => row.ID_Cardholder_Presence > '5',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_CRD_PRESENT_IND',
            selector: row => row.ID_Card_Presence,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Card_Presence <= '1',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.ID_Card_Presence > '1',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_CRD_CAPTR_IND',
            selector: row => row.ID_Card_Capture,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Card_Capture <= '1',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)',
                    }
                },
                {
                    when: row => row.ID_Card_Capture > '1',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_TXN_STAT_IND',
            selector: row => row.ID_Status,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Status != '0' || row.ID_Status != '4',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.ID_Status == '0' || row.ID_Status == '4',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KC4_TXN_SEC_IND',
            selector: row => row.Security_Level,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Security_Level <= '2',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)',
                    }
                },
                {
                    when: row => row.Security_Level > '2',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_TXN_RTN_IND',
            selector: row => row.Routing_Indicator,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Routing_Indicator != '0' || row.Routing_Indicator != '1' || row.Routing_Indicator != '3',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Routing_Indicator == '0' || row.Routing_Indicator == '1' || row.Routing_Indicator == '3',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KC4_CRDHLDR_ACTVT_TERM_IND',
            selector: row => row.Terminal_Activation_Cardholder,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Terminal_Activation_Cardholder <= '9',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)',
                    }
                },
                {
                    when: row => row.Terminal_Activation_Cardholder == '5' ||  row.Terminal_Activation_Cardholder > '9',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_TERM_INPUT_CAP_IND',
            selector: row => row.ID_Terminal_Data_Transfer,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Terminal_Data_Transfer <= '9',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.ID_Terminal_Data_Transfer > '9',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC4_CRDHLDR_ID_METHOD',
            selector: row => row.ID_Cardholder_Method,
            sortable: true,
            right: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Cardholder_Method <= '9' || row.ID_Cardholder_Method <= ' ',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)',
                    }
                },
                {
                    when: row => row.ID_Cardholder_Method > '9',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
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
