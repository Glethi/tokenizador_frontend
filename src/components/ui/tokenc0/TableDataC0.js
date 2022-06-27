import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import Swal from 'sweetalert2';


export const TableDataC0 = ({data}) => {
    
    const columns = [
        {
            name: 'KQ2_ID_MEDIO_ACCESO',
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
            sotable: true,
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
            name: 'KC0_INDICADOR_DE_COMERCIO_ELEC',
            selector: row => row.ID_Ecommerce,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.flagEcommerce == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.flagEcommerce == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC0_TIPO_DE_TARJETA',
            selector: row => row.Card_Type,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.flagCardType == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.flagCardType == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC0_INDICADOR_DE_CVV2_CVC2_PRE',
            selector: row => row.ID_CVV2,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.flagCVV2 == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.flagCVV2 == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                }
            ]
        },
        {
            name: 'KC0_SAF',
            selector: row => row.ID_Information,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.flagInfo == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.flagInfo == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
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
