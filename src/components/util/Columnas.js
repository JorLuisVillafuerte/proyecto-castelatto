export const columnasPedidos = [
    { title: 'id', field: 'idpedido', hidden: true },
    {
      title: 'Codigo', field: 'codPedido', validate: rowData => rowData.codPedido === '' ?
        { isValid: false, helperText: 'Codigo no puede estar vacio' } : true
    },
    { title: 'Descripcion', field: 'descripcion', },
    {
        title: 'Cliente', field: 'cliente', validate: rowData => rowData.cliente === '' ?
          { isValid: false, helperText: 'cliente no puede estar vacio' } : true
      },
    { title: 'Fecha Emision', field: 'fechaEmision', type: 'date', editable: 'never' },
    {title: 'Vendedor', field: 'vendedor'},
    {title: 'Direccion', field: 'direccion'},
    {title: 'Galpon', field: 'galpon'},
]