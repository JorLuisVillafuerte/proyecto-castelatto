import React, { useContext, Fragment, useEffect, useState } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext'
import AlertaContext from '../../context/alertas/alertaContext'
import TablaGestion from '../tablas/TablaGestion';
import {columnasPedidos} from '../util/Columnas';
import AuthContext from '../../context/autenticacion/authContext';
import { Dialog, DialogContent} from '@material-ui/core';
import { Table } from 'reactstrap';

const VerPedidos = () => {

    const pedidoContext = useContext(PedidoContext); 
    const {pedidos,obtenerPedidos, editarPedido, eliminarPedido} = pedidoContext;
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    const authContext = useContext(AuthContext);
    const {usuario} = authContext;
    
    useEffect(() => {
        if(pedidos.length === 0){
            obtenerPedidos();
        }
    }, []);

    const actualizarFila = (newData, oldData, resolve, reject) => {
        if(usuario && (usuario.cargo === 'jefeproduccion' || usuario.cargo === 'admin') ){
            editarPedido(newData);
            setTimeout(() => {
                resolve()
            }, 3000);

        }else{
            mostrarAlerta('No tienes los permisos para realizar la accion', 'alerta-error');
            reject();
            
        }
        
    }
    const eliminarFila = async (oldData, resolve, reject) => {
        if(usuario && (usuario.cargo === 'jefeproduccion' || usuario.cargo === 'admin') ){
            eliminarPedido(oldData);
            setTimeout(() => {
                resolve()
            }, 3000);

        }else{
            mostrarAlerta('No tienes los permisos para realizar la accion', 'alerta-error');
            reject();
        }
    }
    const [openPopup, setOpenPopup] = useState(false);
    const [pedido, setPedido] = useState(null);
    const cerrarPopup = () => {setOpenPopup(false);};
    const mostrarDescripcion = (event,rowData) =>{
        setPedido(rowData);
        console.log(rowData);
        setOpenPopup(true);

    }
    if(pedidos.length === 0){return null;}
    return ( 
        <Fragment>
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
            <h1>VER PEDIDOS</h1>
                <div id="custom-font">
                    <TablaGestion
                        columns={columnasPedidos}
                        data={pedidos}
                        handleRowUpdate={actualizarFila}
                        handleRowDelete={eliminarFila}
                        type={'verpedidos'}
                        handleDetails={mostrarDescripcion}
                        />
                </div>
                <Dialog fullWidth={'sm'} maxWidth={'sm'} open={openPopup} onClose={cerrarPopup} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <div>
                            {pedido === null ? (null): (
                                <Table>
                                <thead>
                                  <tr>
                                    <th>#Id</th>
                                    <th>Producto</th>
                                    <th>Descripcion</th>
                                    <th>Unidades</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {pedido.pedidoDetalleList.map((detalle) => {
                                        return(
                                            <tr>
                                                <th scope="row">{detalle.idpedidoDetalle}</th>
                                                <td>{detalle.idproducto.codProducto}</td>
                                                <td>{detalle.idproducto.descripcion}</td>
                                                <td>{detalle.unidades}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                              </Table>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>        
        </Fragment>
     );
}
 
export default VerPedidos;