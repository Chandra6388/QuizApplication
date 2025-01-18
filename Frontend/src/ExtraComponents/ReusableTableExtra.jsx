import React, { useCallback, memo, useState } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const ExpandableRow = memo(({ row, handlePriceChange, getPriceValue, EditService }) => {
  const [localPrices, setLocalPrices] = useState(() => {
    const prices = {};
    row?.ServiceChargeBases?.forEach((item) => {
      item?.ServiceChargeBasisValues?.forEach((chargeType) => {
        prices[chargeType.id] = getPriceValue(
          row?.id,
          item?.ChargeBasis?.id,
          chargeType?.ChargeType?.id,
          chargeType
        );
      });
    });
    return prices;
  });

  const handleInputChange = (id, value) => {
    setLocalPrices((prevPrices) => ({
      ...prevPrices,
      [id]: value,
    }));
  };

  const handleSave = () => {
    Object.entries(localPrices).forEach(([chargeTypeId, value]) => {
      const chargeType = row?.ServiceChargeBases?.flatMap((item) =>
        item.ServiceChargeBasisValues
      ).find((type) => type.id === chargeTypeId);

      if (chargeType) {
        handlePriceChange(
          value,
          row.id,
          chargeType.ChargeBasis.id,
          chargeType.ChargeType.id,
          chargeType.operator,
          chargeType.id
        );
      }
    });
    EditService('Price', row);
  };

  return (
    <>
      {row?.ServiceChargeBases?.map((item, index) => (
        <div className="expandableContent" key={index}>
          <div className="expandableContent-div">
            <div>
              <h6 className="text-pink mb-0">Charge Basis {index + 1}</h6>
              <hr />
              {item.ChargeBasis.name}
              {item?.ServiceChargeBasisValues?.map((chargeType) => (
                <p key={chargeType.id}>{chargeType.ChargeType.name}</p>
              ))}
            </div>
            <div>
              <p className="text-pink mb-5">Price</p>
              {item?.ServiceChargeBasisValues?.map((chargeType) => (
                <div key={chargeType.id}>
                  <input
                    type="text"
                    className="mb-2"
                    onChange={(e) =>
                      handleInputChange(chargeType.id, e.target.value)
                    }
                    disabled={item?.ChargeBasis?.input_required === 0}
                    value={localPrices[chargeType.id] || ''}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="expandableContent">
        <div className="expandableContent-div d-flex justify-content-end">
          <button className="btn btn-pink" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
});

const Datatable = ({
  columns,
  data,
  filter,
  handlePriceChange,
  getPriceValue,
  EditService,
}) => {
  const [expandedRowId, setExpandedRowId] = useState(null);

  const noDataImage = '/assets/img/no-data.png';

  const handleTableRef = (node) => {
    if (node) {
      const searchInput = node.querySelector('.data-table-extensions-filter input');
      if (searchInput && searchInput.placeholder !== 'Search here') {
        searchInput.placeholder = 'Search here';
      }
    }
  };

  const handleRowExpand = (rowId) => {
    setExpandedRowId((prevRowId) => (prevRowId === rowId ? null : rowId));
  };

  const memoizedExpandableRowsComponent = useCallback(
    (data) => (
      <ExpandableRow
        row={data}
        handlePriceChange={handlePriceChange}
        getPriceValue={getPriceValue}
        EditService={EditService}
      />
    ),
    [handlePriceChange, getPriceValue, EditService]
  );

  return (
    <div className="datatable-container" ref={handleTableRef}>
      {data.length === 0 ? (
        <div className="text-center">
          <img
            src={noDataImage}
            alt="No records available"
            style={{ width: '250px', height: 'auto', objectFit: 'contain' }}
          />
          <p className="fs-16">There are no records to display</p>
        </div>
      ) : (
        <div>
          <DataTableExtensions
            columns={columns}
            data={data}
            export={false}
            print={false}
            search={true}
            filter={filter}
          >
            <DataTable
              fixedHeader={true}
              fixedHeaderScrollHeight="500px"
              noHeader
              defaultSortField="JobId"
              defaultSortAsc={false}
              pagination
              highlightOnHover
              paginationRowsPerPageOptions={[10, 50, 100]}
              paginationComponentOptions={{
                selectAllRowsItem: true,
                selectAllRowsItemText: 'All',
              }}
              expandableRows
              onRowClicked={(row) => handleRowExpand(row.id)}
              expandableRowExpanded={(row) => expandedRowId === row.id}
              expandableRowsComponent={({ data }) => memoizedExpandableRowsComponent(data)}
            />
          </DataTableExtensions>
        </div>
      )}
    </div>
  );
};

export default Datatable;
