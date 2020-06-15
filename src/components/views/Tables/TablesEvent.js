import React from 'react';
import MaterialTable from 'material-table';

export default function TablesBooking() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Reservation Date', field: 'date' },
      { title: 'Reservation Time', field: 'time' },
      { title: 'Table No', field: 'table' },
      { title: 'Guests amount', field: 'guests' },
      {
        title: 'Payment status', field: 'payment',
        lookup: { 1: 'paid', 0: 'in process' },
      },
    ],
    data: [
      { date: '16.02.22', time: '18:00', table: '2', guests: 3, payment: 1 },
    ],
  });

  return (
    <MaterialTable
      title="Single event information"
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
