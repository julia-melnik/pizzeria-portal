
import React from 'react';
import MaterialTable from 'material-table';

export default function OrderingOrderId() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Order No', field: 'number' },
      { title: 'Order Type', field: 'type' },
      { 
        title: 'Payment status', 
        field: 'payment',
        lookup: { 34: 'paid', 63: 'in process' }, 
      },
      {
        title: 'Shipment',
        field: 'shipment',
        lookup: { 34: 'local', 63: 'delivery' },
      },
    ],
    data: [
      { number: '4758', type: 'delivery', payment: 34, shipment: 63 },
      
    ],
  });

  return (
    <MaterialTable
      title="Order information"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
