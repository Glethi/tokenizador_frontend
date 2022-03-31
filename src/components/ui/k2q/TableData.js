import React, { useContext } from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { FilterContext } from '../../../services/FilterContext';

export const TableData = () => {

  const { data } = useContext(FilterContext);

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
      selector: 'Description',
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

  const tableData = {
    columns,
    data
  };

  
  return (
    <div className='tableData table-responsive'>
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
