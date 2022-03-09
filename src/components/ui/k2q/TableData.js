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
      selector: 'ID',
      sortable: true,
      center: true
    },
    {
      name: 'KQ2 Medio Acceso',
      selector: 'TX_Description',
      sortable: true,
      center: true,
      grow: 2
    },
    {
      name: 'TXs Aceptadas',
      selector: 'TX_Accepted',
      sortable: true,
      center: true,
      style: {
        backgroundColor: 'rgba(76, 175, 80)',
      }
    },
    {
      name: 'Monto Aceptado',
      selector: 'accepted_Amount',
      sortable: true,
      center: true
    },
    {
      name: '% de Aceptación',
      selector: 'percenTX_Accepted',
      sortable: true,
      center: true
    },
    {
      name: 'TXs Rechazadas',
      selector: 'TX_Rejected',
      sortable: true,
      center: true,
      style:{
        backgroundColor: 'rgba(255, 82, 82)'
      }
    },
    {
      name: 'Monto Rechazado',
      selector: 'rejected_Amount',
      sortable: true,
      center: true
    },
    {
      name: '% de Rechazo',
      selector: 'percenTX_Rejected',
      sortable: true,
      center: true
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
