import React, { useState, useEffect } from 'react'
import { getData } from '../../../services/dashService';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

export const TableData = () => {

  const [data, setDataTable] = useState([{}]);

  const columns = [
    {
      name: 'ID',
      selector: 'ID',
      sortable: true,
      center: true,
      wrap: true
    },
    {
      name: 'Descripción',
      selector: 'TX_Description',
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: 'Transacciones',
      selector: 'TX_Accepted',
      sortable: true,
      right: true,
      wrap: true, 
      style: {
        backgroundColor: 'rgb(47, 164, 11)',
      }
    },
    {
      name: 'Monto',
      selector: 'accepted_Amount',
      sortable: true,
      right: true,
      wrap: true,
      style: {
        backgroundColor: 'rgb(100, 236, 57)',
      }
    },
    {
      name: 'Porcentaje',
      selector: 'percenTX_Accepted',
      sortable: true,
      right: true,
      wrap: true,
      style: {
        backgroundColor: 'rgb(47, 164, 11)',
      }
    },
    {
      name: 'Transacciones',
      selector: 'TX_Rejected',
      sortable: true,
      right: true,
      wrap: true,
      style:{
        backgroundColor: 'rgb(187, 1, 1)',
        color: 'white'
      }
    },
    {
      name: 'Monto',
      selector: 'rejected_Amount',
      sortable: true,
      right: true,
      wrap: true,
      style:{
        backgroundColor: 'rgb(255, 27, 27)',
        color: 'white'
      }
    },
    {
      name: 'Porcentaje',
      selector: 'percenTX_Rejected',
      sortable: true,
      right: true,
      wrap: true,
      style:{
        backgroundColor: 'rgb(187, 1, 1)',
        color: 'white'
      }
    },
  ]

  useEffect(() => {
    async function loadData(){
      const response = await getData('kq2');
      if(response.status === 200){
        setDataTable(response.data);
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
      exportHeaders = {true} 
    >
      <DataTable
        fixedHeader = {true}
        fixedHeaderScrollHeight = "200px"
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
    </div>
  )
}
