import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';
import Swal from 'sweetalert2';

export const TableDataB6 = ({data}) => {

    const columns = [
        {
            name: 'KQ2_ID_MEDIO_ACCESO',
            selector: 'ID_Access_Mode',
            center: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(24, 143, 254 )'
            }
        },
        {
            name: 'CODIGO_RESPUESTA',
            selector: 'ID_Code_Response',
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
            selector: 'ID_Entry_Mode',
            sortable: true,
            center: true,
            wrap: true,
            style: {
                backgroundColor: 'rgb(150, 24, 254)',
                color: 'white'
            }
        },
        {
            name: 'KB6_ISS_SCRIPT_DATA_LGTH',
            selector: 'dataLength',
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name: 'KB6_ISS_SCRIPT_DATA',
            selector: 'scriptData',
            sortable: true,
            center: true,
            wrap: true
        }
    ]

    const dataTable = {
        columns,
        data
    }
    


    return (
        <div className='tableData table-responsive'>
            <DataTableExtension 
                {...dataTable}
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
