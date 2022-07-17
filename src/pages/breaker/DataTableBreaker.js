import React, { useEffect, useState } from 'react';
import DataTableExtension from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { postData } from '../../services/dashService';
import { breakerValidator } from './breakerValidator/breakerValidator';

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
    let flag = '0';
    catalog.map((e, index) => {
        if(positions[index] == e.id){
            flag = breakerValidator(e.field, values[i])
            if(flag !== '1'){ flag = '0' }
            data.push({
                number: i,
                field: e.field,
                name: e.name,
                type: e.type,
                len: values[i].length,
                value: values[i],
                flag: flag
            })
            i++;
        }
    })

    for(let x = data.length+5; x < keys.length-1; x++){
        labels.push(keys[x]);
        valuesOutCatalog.push(values[x]);
    }

    let fieldController = 2, numberField = 'P-63', counter = 0, type = '-'
    for(let j = 0; j < labels.length; j++){
        fieldController++;
        if(fieldController === 3){
            counter++;
            numberField = 'P-63'+'.'+counter;
            fieldController = 0;
            type = '-'
        }else{
            type = 'AN'
        }
        data.push({
            number: j + labels.length+2,
            field: numberField,
            name: labels[j],
            type: type,
            len: valuesOutCatalog[j].length,
            value: valuesOutCatalog[j]
        })
    }

    const columns = [
        {
            name: 'Número',
            selector: 'number',
            sortable: true,
            center: true,
            wrap: true,
            grow: -2
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
            conditionalCellStyles: [
                {
                    when: row => row.flag === '0',
                    style: {
                        backgroundColor: 'rgb(255, 27, 27)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.flag === '1',
                    style:{
                        backgroundColor: 'rgb(100, 236, 57)'
                    }
                }
            ]
        },
        {
            name: 'Valor',
            selector: 'value',
            sortable: true,
            left: true,
            wrap: true,
            grow: 3,
            conditionalCellStyles: [
                {
                    when: row => row.flag === '0',
                    style: {
                        backgroundColor: 'rgb(187, 1, 1)',
                        color: 'white'
                    }
                },
                {
                    when: row => row.flag === '1',
                    style:{
                        backgroundColor: 'rgb(47, 164, 11)'
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
                fixedHeader={true}
                fixedHeaderScrollHeight="500px"
                pagination
                highlightOnHover
                dense/>
            </DataTableExtension>
        </div>
    )
}
