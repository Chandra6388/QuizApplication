import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

const SimpleDatatable = ({ columns, data, perPage, perPageSelect, searchable, paging }) => {

  useEffect(() => {
    const dataTable = new DataTable("#simpleTable", {
      searchable: searchable,
      fixedHeight: true,
      paging: paging,
      perPageSelect: perPageSelect,  
      perPage: perPage,              
    });

    return () => {
      if (dataTable) {
       
      }
    };
  }, [data, columns, perPage, perPageSelect, searchable, paging]); 

  return (
    <div className='col-12'>
      <table id="simpleTable" className="table datatable">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleDatatable;
