import React, { useContext, useEffect, useState } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { FilterContext } from '../../../services/FilterContext';
import { postData } from '../../../services/dashService';
import Swal from 'sweetalert2';

export const TableDataC4 = () => {

    const { filterC4, setDataTable, dataTable:data } = useContext(FilterContext);
    
    useEffect(() => {
        setDataTable([{}]);
        async function loadData(){
            const response = await postData('tokenC4Filter/main', filterC4)
            if(response.status === 200){
                setDataTable(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Datos cargados correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        loadData()
    }, [filterC4])
    

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
            conditionalCellStyles: [
                {
                    when: row => row.TermAttFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.TermAttFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
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
            conditionalCellStyles: [
                {
                    when: row => row.TermOperFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.TermOperFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
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
                    when: row => row.TermLocFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.TermLocFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
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
                    when: row => row.CardholdrPresFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.CardholdrPresFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
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
            conditionalCellStyles: [
                {
                    when: row => row.CardpresenceFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.CardpresenceFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
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
            conditionalCellStyles: [
                {
                    when: row => row.CardCaptureFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.CardCaptureFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
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
            conditionalCellStyles: [
                {
                    when: row => row.ReqStatusFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.ReqStatusFlag === 1,
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
            conditionalCellStyles: [
                {
                    when: row => row.SecLevelFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.SecLevelFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
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
            conditionalCellStyles: [
                {
                    when: row => row.routingFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.routingFlag === 1,
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
            conditionalCellStyles: [
                {
                    when: row => row.TermActivationFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.TermActivationFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
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
            conditionalCellStyles: [
                {
                    when: row => row.TermDataTransFlag === 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.TermDataTransFlag === 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
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
            conditionalCellStyles: [
                {
                    when: row => row.CardholdrMethodFlag === 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.CardholdrMethodFlag === 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
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
                exportHeaders={true}>
                <DataTable
                    onRowClicked={(row) => {
                        Swal.fire({
                            title: 'Datos de la Terminal',
                            html: 
                            `<b>Fiid Tarjeta:</b> ${row.Fiid_Card} <br />
                            <b>Fiid Comercio:</b> ${row.Fiid_Comerce} <br />
                            <b>Nombre de Terminal:</b> ${row.Terminal_Name} <br />
                            <b>Numero de Serie: </b> ${row.Number_Sec} <br />
                            <b>Monto:</b> $${row.amount} MXN`,
                            confirmButtonText: 'Aceptar'
                        })
                    }}
                    fixedHeader={true}
                    fixedHeaderScrollHeight="500px"
                    pagination
                    highlightOnHover
                    dense />
            </DataTableExtension>
        </div>
    )
}
