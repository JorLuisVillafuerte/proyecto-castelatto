import MaterialTable from 'material-table';
import React from 'react';

const TablaGestion = (props) => {
    console.log('Datos que recibe la tabla: '+ props.data);
  
    return (
      <MaterialTable
        title={''}
        columns={props.columns}
        data={props.data}
        editable={{
          onRowUpdate: (newData, oldData) =>
          new Promise((resolve,reject) => {
            props.handleRowUpdate(newData, oldData, resolve,reject);
          }),
          onRowDelete : (oldData) => 
          new Promise ((resolve,reject) => { 
            props.handleRowDelete(oldData, resolve,reject)
          }) 
        }}
        /*actions={[
          {
            icon: 'search',
            tooltip: 'Ver registro',
            onClick: (event, rowData) => {
              props.handleDetails(event,rowData);
            }
          }
        ]}*/
        localization={{          
          body: {
              emptyDataSourceMessage: 'No hay registros para mostrar en la tabla',
              editRow:{
                deleteText: '¿Estas seguro de eliminar el registro seleccionado?'
              },
              deleteTooltip: 'Eliminar',
              editTooltip: 'Editar',
              addTooltip: 'Agregar'
          },
          header: {
            actions: 'Acciones'
          },
        }}
        options={{
          pageSize: 10,
          headerStyle: {
            fontSize: 16,
          }
        }}
      />
    );
}
 
export default TablaGestion;