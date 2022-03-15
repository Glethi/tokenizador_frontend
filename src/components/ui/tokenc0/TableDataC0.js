import React, {useState, useEffect} from 'react';
import { getData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtension from 'react-data-table-component-extensions';


export const TableDataC0 = () => {

    const [data, setData] = useState([{}]);

    const columns = [
        {
            name: 'KC0_INDICADOR_DE_COMERCIO_ELEC',
            selector: 'ID_Ecommerce',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_Ecommerce != '0' || row.ID_Ecommerce != ' ' || row.ID_Ecommerce != '1' ||
                                row.ID_Ecommerce != '5' || row.ID_Ecommerce != '6' || row.ID_Ecommerce != '7',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.ID_Ecommerce == '0' || row.ID_Ecommerce == '' || row.ID_Ecommerce == '1' ||
                                row.ID_Ecommerce == '5' || row.ID_Ecommerce == '6' || row.ID_Ecommerce == '7',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)',
                    }
                }
            ]
        },
        {
            name: 'KC0_TIPO_DE_TARJETA',
            selector: 'Card_Type',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.Card_Type != 'B' || row.Card_Type != 'R' || row.Card_Type != 'S' ||
                                row.Card_Type != '',
                    styles: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.Card_Type == 'B' || row.Card_Type == 'R' || row.Card_Type == 'S' ||
                                row.Card_Type == '',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'KC0_INDICADOR_DE_CVV2_CVC2_PRE',
            selector: 'ID_CVV2',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles:[
                {
                    when: row => row.ID_CVV2 != '0' || row.ID_CVV2 != '1' || row.ID_CVV2 != '2' ||
                                row.ID_CVV2 != '9' || row.ID_CVV2 != '',
                    styles: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.ID_CVV2 == '0' || row.ID_CVV2 == '1' || row.ID_CVV2 == '2' ||
                                row.ID_CVV2 == '9' || row.ID_CVV2 == '',
                    style: {
                        backgroundColor: 'rgb(47, 164, 11)'
                    }
                }
            ]
        },
        {
            name: 'KC0_INDICADOR_DE_INFORMACION_A',
            selector: 'ID_Information',
            sortable: true,
            center: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: row => row.ID_Information != '0' || row.ID_Information != '1' || 
                                row.ID_Information != '',
                    styles: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.ID_Information == '0' || row.ID_Information == '1' || 
                                row.ID_Information == '',
                    style: {
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
    ]

    useEffect(() => {
        async function loadData() {
            const response = await getData('tokenC0');
            if(response.status === 200){
                setData(response.data);
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
