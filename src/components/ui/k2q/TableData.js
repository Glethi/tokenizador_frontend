import React, { useState, useEffect } from 'react'
import { getData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

export const TableData = () => {

  const [data, setData] = useState([{}]);

  const columns = [
    {
      name: 'ID Medio Acceso',
      selector: row => row['ID'],
      sortable: true
    },
    {
      name: 'KQ2 Medio Acceso',
      selector: row => row['TX_Description'],
      sortable: true
    },
    {
      name: 'TXs Aceptadas',
      selector: row => row['TX_Accepted'],
      sortable: true
    },
    {
      name: 'Monto Aceptado',
      selector: row => row['accepted_Amount'],
      sortable: true
    },
    {
      name: '% de Aceptación',
      selector: row => row['percenTX_Accepted'],
      sortable: true
    },
    {
      name: 'TXs Rechazadas',
      selector: row => row['TX_Rejected'],
      sortable: true
    },
    {
      name: 'Monto Rechazado',
      selector: row => row['rejected_Amount'],
      sortable: true
    },
    {
      name: '% de Rechazo',
      selector: row => row['percenTX_Rejected'],
      sortable: true
    },
  ]

  useEffect(() => {
    async function loadData(){
      const response = await getData('kq2');
      if(response.status === 200){
        setData(response.data);
      }
    }
    loadData();
  }, []) 

const tableData = {
    columns,
    data
  };
  
  return (
    <div className='tableData table-responsive table-striped table-bordered'>
       <DataTableExtensions
      {...tableData}
      exportHeders = {true}
    >
      <DataTable
        fixedHeader={true}
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
    </div>
  )
}
