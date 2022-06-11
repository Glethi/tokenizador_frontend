import React, { useEffect, useContext } from 'react'
import { postData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import { FilterContext } from '../../../services/FilterContext';
import Swal from 'sweetalert2';

export const TableDataB4 = () => {

    const { filterB4, setDataTable, dataTable:data } = useContext(FilterContext);

    useEffect(() => {
        setDataTable([{}]);
        async function loadData(){
            const response = await postData('tokenB4Filter/main', filterB4);
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
    }, [filterB4]);
    
    const columns = [
        {
            name: 'KQ2_ID_MEDIO_ACCESO',
            selector: row => row.ID_Access_Mode,
            center: true,
            wrap: true,
            style:{
                backgroundColor: 'rgb(24, 143, 254 )'
            }
        },
        {
            name: 'CODIGO_RESPUESTA',
            selector: row => row.ID_Code_Response,
            sortable: true,
            center: true,
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
            center: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(150, 24, 254)',
                color: 'white'
            }
        },
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
                onRowClicked={row => {
                    Swal.fire({
                        title: 'Detalle de la Transacción',
                        html: 
                        `<b>ID Comercio: </b> ${row.ID_Comer} <br />
                        <b>Terminal Comercio:</b> ${row.Term_Comer} <br />
                        <b>FIID Comercio:</b> ${row.Fiid_Comer} <br />
                        <b>Red Lógica Comercio:</b> ${row.Ln_Comer} <br />
                        <hr>
                        <b>Nombre de Terminal:</b> ${row.Terminal_Name} <br />
                        <b>FIID Terminal:</b> ${row.Fiid_Term} <br />
                        <b>Red Lógica Terminal:</b> ${row.Ln_Term} <br />
                        <b>Numero de Serie: </b> ${row.Number_Sec} <br />
                        <hr>
                        <b>FIID Tarjeta:</b> ${row.Fiid_Card} <br />
                        <b>Red Lógica Tarjeta:</b> ${row.Ln_Card}
                        <hr>
                        <b>Monto:</b> ${row.amount}`,
                        confirmButtonText: 'Aceptar'
                    })
                }}
                fixedHeader = {true}
                fixedHeaderScrollHeight = "500px"
                pagination
                highlightOnHover
                dense/>
            </DataTableExtension>
        </div>
    )
}
