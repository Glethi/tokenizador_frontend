import React, { useEffect, useState } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { postData } from '../../services/dashService';

export const DataTableBreaker = ({msm}) => {

    const [catalog, setCatalog] = useState([{}]);
    const values = Object.values(msm);
    const data = [];
    const positions = values[values.length-1];

    //Se obtiene el catalogo de la data de los mensajes
    useEffect(() => {
        async function loadData(){
            const response = await postData('getCatalogMessage', {positions: positions});
            if(response.status === 200){
                setCatalog(response.data);
            }
        }
        loadData()
    }, []);

    let i = 4; //Control de las posiciones de 'values' en la tabla
    catalog.map((e, index) => {
        if(positions[index] == e.id){
            data.push({
                number: i-3,
                field: e.field,
                name: e.name,
                type: e.type,
                len: e.len,
                value: values[i]
            })
        }
        i++;
    })

    console.log(data);
    

    const columns = [
        {
            name: 'ID',
            selector: 'number',
            sortable: true,
            center: true,
            wrap: true,
            grow: -2,
        },
        {
            name: 'Campo',
            selector: 'field',
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'Nombre',
            selector: 'name',
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'Tipo Dato',
            selector: 'type',
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'Longitud',
            selector: 'len',
            sortable: true,
            center: true,
            wrap: true,
        },
        {
            name: 'Valor',
            selector: 'value',
            sortable: true,
            left: true,
            wrap: true,
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
                fixedHeader={true}
                fixedHeaderScrollHeight="500px"
                pagination
                highlightOnHover
                dense/>
            </DataTableExtension>
        </div>
    )
}
