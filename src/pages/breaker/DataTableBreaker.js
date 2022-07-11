import React, { useEffect, useState } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { postData } from '../../services/dashService';

export const DataTableBreaker = ({msm}) => {

    const [catalog, setCatalog] = useState([{}]);
    const values = Object.values(msm)
    const keys = Object.keys(msm);
    const data = [];
    const labels = [];
    const valuesOutCatalog = [];
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
                number: i,
                field: e.field,
                name: e.name,
                type: e.type,
                len: e.len,
                value: values[i]
            })
        }
        i++;
    })

    for(let x = data.length+5; x < keys.length-1; x++){
        labels.push(keys[x]);
        valuesOutCatalog.push(values[x]);
    }
    for(let j = 0; j < labels.length; j++){
        if(j %2 != 0){
            data.push({
                number: j+labels.length+6,
                field: 'P-63',
                name: labels[j],
                type: 'Numerico',
                len: '4',
                value: valuesOutCatalog[j]
            })
        }else{
            data.push({
                number: j+labels.length+6,
                field: 'P-63',
                name: labels[j],
                type: 'Numerico',
                len: '4',
                value: valuesOutCatalog[j]
            })
        }
    }

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
            grow: 3
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
