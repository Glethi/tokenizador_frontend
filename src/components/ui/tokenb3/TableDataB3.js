import React, { useContext, useEffect } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { FilterContext } from '../../../services/FilterContext';
import { postData } from '../../../services/dashService';
import Swal from 'sweetalert2';

export const TableDataB3 = () => {

    const { filterB3, setDataTable, dataTable:data } = useContext(FilterContext);

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB3Filter/main', filterB3);
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
    }, [filterB3])
    
    console.log(data);

    const columns = [
        {
            name: 'KQ2_ID_MEDIO_ACCESO',
            selector: row => row.ID_Access_Mode,
            sortable: true,
            center: true,
            wrap: true,
            style: {
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
            name: 'KB3_BIT_MAP',
            selector: row => row.Bit_Map,
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.bitMapFlag == 1,
                    style:{
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.bitMapFlag == 0,
                    style:{
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
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
                    when: row => row.termSerNumFlag == 1,
                    style:{
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.termSerNumFlag == 0,
                    style:{
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
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
                    when: row => row.checkCHFlag == 1,
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                },
                {
                    when: row => row.checkCHFlag == 0,
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
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
                    when: row => row.userFoFlag == 1,
                    style:{
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.userFoFlag == 0,
                    style:{
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
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
                    when: row => row.userFtFlag == 1,
                    style:{
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                },
                {
                    when: row => row.userFtFlag == 0,
                    style:{
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
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
                    when: row => row.termTypeFlag == 1,
                    style:{
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.termTypeFlag == 0,
                    style:{
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
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
                    when: row => row.appVersionFlag == 1,
                    style:{
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                },
                {
                    when: row => row.appVersionFlag == 0,
                    style:{
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
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
                    when: row => row.cvmResFlag == 1,
                    style:{
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.cvmResFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
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
                    when: row => row.fileNamelenFlag == 1,
                    style:{
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                },
                {
                    when: row => row.fileNamelenFlag == 0,
                    style:{
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
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
            conditionalCellStyles:[
                {
                    when: row => row.fileNameFlag == 1,
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                },
                {
                    when: row => row.fileNameFlag == 0,
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                }
            ]
        }
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
                    fixedHeader={true}
                    fixedHeaderScrollHeight="600px"
                    pagination
                    highlightOnHover
                    dense />
            </DataTableExtension>
        </div>
    )
}
